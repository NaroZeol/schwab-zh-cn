(() => {
  'use strict';

  if (!/^https:\/\/client\.schwab\.com$/.test(location.origin) &&
      !/^about:(blank|srcdoc)$/.test(location.href)) return;

  const blocked = [
    'script', 'style', 'noscript', 'template', 'textarea', 'code', 'pre',
    'svg', 'canvas', '[contenteditable]:not([contenteditable="false"])',
    '[translate="no"]', 'volc-translate', '[role="textbox"]',
    '.account-list-cell-name', '.watchlist-name', '.account-number', '[data-testid*="account-number"]',
    '.snap-container__fw-symbol-name'
  ].join(',');
  const onOrderStatus = () => /^\/app\/trade\/orderstatus(?:\/|$)/i.test(location.pathname);
  const onPositions = () => /^\/app\/accounts\/positions(?:\/|$)/i.test(location.pathname);
  const positionColumnLabels = new Map([
    ['Price Chng $', '涨跌额'], ['Price Chng %', '涨跌幅'],
    ['Day Chng $', '当日涨跌额'], ['Day Chng %', '当日涨跌幅'],
    ['Gain/Loss $', '盈亏额'], ['Gain/Loss %', '盈亏率'],
    ['Gain/Loss % 2', '盈亏率 2'], ['Reinvest?', '股息再投']
  ]);
  const positionSymbolCell = 'th[scope="row"].symbolColumn';
  const positionMenuItem = '.sdps-menu__item,[role="menuitem"]';
  const dataCell = 'td,sdps-table-cell,[role="cell"],[role="gridcell"],[role="rowheader"],th[scope="row"]';
  const staticCell = '.account-list-cell-type,.account-list-cell-control,.groupfooter-row-data,.pos-foot-cell,.nextStepCell,.accountTotalTableHeader';
  const categoryHeaders = new Set([
    'type', '类型', 'account type', '账户类型', 'status', '状态', 'order status', '订单状态',
    'order type', '订单类型', 'transaction type', '交易类型', 'document type', '文件类型',
    'action', '买卖方向', 'actions', '操作', 'more actions', '更多操作', 'reinvest', 'reinvest?', '再投资', '是否再投资',
    'transfer type', '转账类型', 'transfer status', '转账状态', 'time in force', '有效期'
  ]);
  const attributes = ['aria-label', 'aria-description', 'aria-valuetext', 'title', 'placeholder', 'alt'];
  const displayFields = /date.?range|time.?period|transaction.?type|document.?type|order.?type|time.?in.?force|timing|duration|frequency|sort|order.?status|\baction\b|strategy|symbol.?type|security.?id.?type|conditional.?type|criteria.?type|glossaryDropdown|cost.?basis.?method|display.?mode|reinvest/i;
  const extensionDom = globalThis.chrome?.dom;
  const runtime = globalThis.chrome?.runtime;
  const extensionId = runtime?.id;
  const caseVariants = new Map();
  const optionLabels = new WeakMap();
  const descriptionCells = new WeakSet();
  const transactionDescriptions = new Set([
    'foreign currency deposit', 'foreign currency withdrawal', 'bank interest', 'bank interest credit',
    'bank sweep', 'bank sweep interest', 'cash dividend', 'dividend reinvestment', 'journal entry',
    'journaled cash', 'moneylink transfer', 'moneylink deposit', 'moneylink withdrawal',
    'wire received', 'wire sent', 'foreign tax withheld', 'margin interest', 'cash in lieu'
  ]);
  const roots = new WeakSet();
  const queued = new Set();
  const possibleHosts = new Set();
  let scheduled = false;

  for (const [label, localized] of schwabLabels) {
    if (!label.includes(' ')) continue;
    const key = label.toLowerCase();
    if (!caseVariants.has(key)) caseVariants.set(key, localized);
    else if (caseVariants.get(key) !== localized) caseVariants.set(key, null);
  }

  const lookup = label => schwabLabels.get(label) ?? caseVariants.get(label.toLowerCase());
  const labelRules = [
    [/^(\d+) of (\d+) selected$/i, ([, selected, total]) => `已选 ${selected}／${total} 项`],
    [/^(.+), sort (ascending|descending)$/i, ([, name, order]) => {
      const label = lookup(name);
      return label && `${label}，${order.toLowerCase() === 'ascending' ? '升序' : '降序'}排列`;
    }],
    [/^(.+?)\s*Toggle$/, ([, name]) => {
      const label = lookup(name);
      return label && `展开或收起${label}`;
    }],
    [/^Additional information about (.+?)\.?$/i, ([, name]) => {
      const label = lookup(name);
      return label && `查看关于${label}的补充信息`;
    }],
    [/^Position row, held in (\d+) accounts?, activate to (expand|collapse)\.$/,
      ([, count, action]) => `${count} 个账户持有此证券，点击${action === 'expand' ? '展开' : '收起'}。`],
    [/^Account ending in ([0-9 ]+)$/i, ([, ending]) => `账户尾号 ${ending}`],
    [/^(.+)\. There (?:are|is) (\d+) nested items?\.?$/i, ([, name, count]) => {
      const label = lookup(name);
      return label && `${label}，包含 ${count} 个子项目`;
    }],
    [/^Search finished and found (\d+) (Transactions?|Documents?|Orders?)\.?$/i,
      ([, count, item]) => `搜索完成，找到 ${count} 条${{t: '交易记录', d: '文件', o: '订单'}[item[0].toLowerCase()]}`],
    [/^(\d+[.)])\s+(.+)$/, ([, number, message]) => {
      const label = lookup(message);
      return label && `${number} ${label}`;
    }],
    [/^(.+?)\s*([:.])$/, ([, name, punctuation]) => {
      const label = lookup(name);
      return label && label + (punctuation === ':' ? '：' : '。');
    }]
  ];

  function translate(text, element) {
    if (onPositions() && element?.id === 'positions-account-summary-total-cash-and-investments-label' &&
        /^(Cash & Cash Investments Total|Total Cash & Cash Investments|Total cash & cash invest|现金及现金类投资合计)$/.test(text?.trim() ?? '')) {
      return text.replace(/\S[\s\S]*\S|\S/, '现金及等价物合计');
    }
    if (!text || !/[a-z]{2}/i.test(text)) return text;
    const label = text.trim().replace(/\s+/g, ' ');
    let localized = lookup(label);
    if (label === 'Cash & Cash Investments' &&
        (element?.id === 'cash-&-cash-investments-label' ||
         (onPositions() && element?.matches('th .holdings-name-wrap_pre-line > span')))) {
      localized = '现金类资产';
    }
    if (onPositions()) {
      const positionHeader = element?.closest('table.positions-details-table thead th');
      const columnPicker = element?.closest('app-edit-columns');
      if (positionHeader) {
        localized = positionColumnLabels.get(label) ?? localized;
      }
      if (positionHeader || columnPicker) {
        if (label === 'Open') localized = '开盘价';
        if (label === 'Last') localized = '最新价';
        if (label === 'Beta') localized = '贝塔系数';
      }
      if (columnPicker && label === 'Toggle') localized = '展开或收起';
    }
    for (const [pattern, render] of labelRules) {
      if (localized) break;
      const match = pattern.exec(label);
      if (match) localized = render(match);
    }
    if (!localized && element?.matches('title')) {
      const pageTitle = /^(.+) \| Charles Schwab$/.exec(label);
      const title = pageTitle && lookup(pageTitle[1]);
      if (title) localized = `${title} · 嘉信理财`;
    }
    const tradeTicket = element?.closest('snap-trade') || element?.getRootNode().host?.closest('snap-trade');
    if ((/^\/app\/trade\/(tom|orderstatus)(\/|$)/i.test(location.pathname) || tradeTicket) &&
        !element?.closest('nav,header,footer')) {
      if (label === 'Action') localized = '买卖方向';
      if (label === 'Market') localized = '市价';
      if (label === 'Day') localized = '当日有效';
    }
    if (label === 'Last' && onOrderStatus() &&
        element?.closest('th,[role="columnheader"],sdps-table-header')) localized = '最新价';
    return localized ? text.replace(/\S[\s\S]*\S|\S/, localized) : text;
  }

  function columnName(cell) {
    const row = cell.closest('tr,sdps-table-row,[role="row"]');
    const table = row?.closest('table,[role="table"],[role="grid"],sdps-table');
    if (!table) return;
    const normalize = label => label?.trim().replace(/\s+/g, ' ').toLowerCase();
    const explicit = cell.getAttribute('data-label') ?? cell.getAttribute('data-title');
    if (explicit) return normalize(explicit);

    const reference = cell.getAttribute('headers');
    const referenced = reference && cell.getRootNode().getElementById?.(reference);
    if (referenced) return normalize(referenced.textContent);
    const headers = [...table.querySelectorAll('thead tr:last-child > th,sdps-table-header,[role="columnheader"]')];
    const column = cell.getAttribute('aria-colindex');
    let header = column && headers.find(candidate => candidate.getAttribute('aria-colindex') === column);
    if (!header && Number.isInteger(cell.cellIndex)) header = headers[cell.cellIndex];
    if (!header) {
      const siblings = Array.from(cell.parentElement.children).filter(candidate => candidate.matches(dataCell));
      if (siblings.length === headers.length) header = headers[siblings.indexOf(cell)];
    }
    if (!header || header.colSpan > 1 || row.querySelector('[colspan]:not([colspan="1"])')) return;
    return normalize(header.textContent);
  }

  function closestThroughShadow(element, selector) {
    for (let current = element; current; current = current.getRootNode().host) {
      const match = current.closest(selector);
      if (match) return match;
    }
  }

  function isPositionCaptionCell(cell) {
    if (cell.matches(positionSymbolCell)) return true;
    if (cell.matches('td.holdings-cursor') && cell.querySelector('.group-header-font-style')) return true;
    if (cell.matches('td.tooltip-column') &&
        cell.querySelector('sdps-button[title="Dividend Reinvestment?"],sdps-button[title="是否股息再投资？"]')) return true;
    if (!cell.matches('th[scope="row"]')) return false;
    if (cell.querySelector('.security-group-total')) return true;
    const cashCaption = cell.querySelector('.holdings-name-wrap_pre-line > span')?.firstChild?.nodeValue?.trim();
    return /^(Cash & Cash Investments|现金及现金类投资|现金类资产)$/.test(cashCaption ?? '');
  }

  function shouldSkip(element) {
    // Schwab uses a contenteditable wrapper for keyboard column reordering.
    // These rows contain column captions, not account data or user input.
    if (onPositions() && element.matches('#listOfSelectedColumns .contentdiv-selected-column[contenteditable="true"]') &&
        element.closest('app-edit-columns')) return false;
    if (element.matches(blocked)) return true;
    if (!element.matches(dataCell) || element.matches(staticCell)) return false;
    if (onOrderStatus() && element.matches('.sdps-table-expandable__caret-spacing,.sdps-table-expandable__tradingActions')) return false;
    if (onPositions() && isPositionCaptionCell(element)) return false;
    const column = columnName(element);
    if (/^\/retail\/accounts\/history(?:\/|$)/i.test(location.pathname) &&
        /^(description|说明|交易说明)$/.test(column ?? '')) {
      descriptionCells.add(element);
      return false;
    }
    descriptionCells.delete(element);
    return !categoryHeaders.has(column);
  }

  function localizeOption(option) {
    const select = option.closest('select');
    if (!select) return;
    const orderFilter = onOrderStatus() && /^(status|type)-dropdown$/.test(select.name);
    const contractFilter = /^\/retail\/accounts\/rgl(?:\/|$)/i.test(location.pathname) &&
      select.id === 'options-select-id';
    const identity = [select.id, select.name, select.getAttribute('aria-label'),
      ...Array.from(select.labels ?? [], label => label.textContent)].join(' ');
    if (!orderFilter && !contractFilter &&
        select.getRootNode().host?.localName !== 'trading-preference' && !displayFields.test(identity) &&
        !/日期范围|时间段|交易类型|文件类型|订单类型|有效期|频率|排序|订单状态|买卖方向|策略|成本基础计算方法|再投资/.test(identity)) return;
    const previous = optionLabels.get(option);
    const current = option.getAttribute('label');
    const original = current === previous?.localized ? previous.original : current;
    const source = original ?? option.text;
    const localized = translate(source, option);
    if (localized !== source) {
      optionLabels.set(option, {original, localized});
      if (current !== localized) option.label = localized;
    } else if (previous && current === previous.localized) {
      optionLabels.delete(option);
      if (original === null) option.removeAttribute('label');
      else option.label = original;
    }
  }

  function visitShadow(element) {
    let root = element.shadowRoot;
    if (!root && extensionDom && element instanceof HTMLElement && element.localName.includes('-')) {
      try {
        root = extensionDom.openOrClosedShadowRoot?.(element);
      } catch (error) {
        if (!extensionId || !String(error?.message).includes('Extension context invalidated')) throw error;
        observer.disconnect();
        return;
      }
    }
    if (root && !roots.has(root)) visit(root);
  }

  function localize(node) {
    const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement ?? node.getRootNode().host;
    const protectedSymbol = onPositions() && element && closestThroughShadow(element, positionSymbolCell) &&
      !closestThroughShadow(element, positionMenuItem);
    if (node.nodeType === Node.TEXT_NODE) {
      if (protectedSymbol || node.parentElement?.matches('option')) return;
      const cell = node.parentElement?.closest(dataCell);
      if (descriptionCells.has(cell) && !transactionDescriptions.has(node.data.trim().replace(/\s+/g, ' ').toLowerCase())) return;
      const localized = translate(node.data, node.parentElement);
      if (localized !== node.data) node.data = localized;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (!protectedSymbol && node.matches('option')) localizeOption(node);
      for (const attribute of attributes) {
        const original = node.getAttribute(attribute);
        if (protectedSymbol && !/^(Open Menu|Close Menu)$/i.test(original ?? '')) continue;
        const localized = translate(original, node);
        if (localized !== original) node.setAttribute(attribute, localized);
      }
      visitShadow(node);
    }
  }

  function visit(root) {
    if ((root === document || root instanceof ShadowRoot) && !roots.has(root)) {
      roots.add(root);
      observer.observe(root, {
        subtree: true, childList: true, characterData: true, attributes: true,
        attributeFilter: [...attributes, 'label']
      });
    }

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (node.nodeType !== Node.ELEMENT_NODE) return NodeFilter.FILTER_ACCEPT;
        return shouldSkip(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    localize(root);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) localize(node);
  }

  function canTranslate(node) {
    if (!node.isConnected) return false;
    let element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    if (!element) element = node.getRootNode().host;
    while (element) {
      if (shouldSkip(element)) return false;
      element = element.parentElement ?? element.getRootNode().host;
    }
    return true;
  }

  function refresh() {
    scheduled = false;
    if (extensionId && !runtime.id) {
      observer.disconnect();
      queued.clear();
      possibleHosts.clear();
      return;
    }
    for (const node of queued) {
      if (canTranslate(node)) visit(node);
    }
    for (const element of possibleHosts) {
      if (canTranslate(element)) visitShadow(element);
    }
    queued.clear();
    possibleHosts.clear();
  }

  const observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'childList') {
        for (const node of record.addedNodes) queued.add(node);
        if (record.target.nodeName === 'OPTION') queued.add(record.target);
        if (record.target.localName?.includes('-')) possibleHosts.add(record.target);
      } else {
        queued.add(record.target);
        if (record.target.parentElement?.matches('option')) queued.add(record.target.parentElement);
      }
    }
    if (scheduled || (!queued.size && !possibleHosts.size)) return;
    scheduled = true;
    setTimeout(refresh, 16);
  });
  visit(document);
})();
