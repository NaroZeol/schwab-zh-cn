'use strict';

// Exact, case-sensitive matches keep account data and security symbols out of substring replacements.
const schwabLabels = new Map(`
Skip to Content|跳至主要内容
Charles Schwab Homepage|嘉信理财首页
Charles Schwab Logo|嘉信理财标志
Schwab Assistant|嘉信理财助手
Accounts|账户
Accounts.|账户
Trade|交易
Trade.|交易
TRADE|交易
Research|研究
Research.|研究
Transfer & Pay|转账与支付
Transfer & Pay.|转账与支付
Products|产品
Products.|产品
Learn|学习
Learn.|学习
Messages|消息
Support|支持
Profile|个人资料
Log Out|退出登录
Summary|账户概览
Account Summary|账户概览
Account Details|账户详情
Positions|持仓
Transaction History|交易记录
Realized Gain / Loss|已实现盈亏
Realized Gain/Loss|已实现盈亏
Statements & Tax Forms|对账单与税务表格
Investment Income|投资收益
Portfolio Performance|投资组合表现
Corporate Actions|公司行动
Open An Account|开立账户
All-In-One Trade Ticket|综合交易单
Stocks & ETFs|股票与 ETF
Options|期权
Chains|期权链
Schwab Investing Themes™|嘉信主题投资™
Order Status|订单状态
Bonds|债券
Futures|期货
Forex|外汇
IPOs|首次公开发行（IPO）
Trading Platforms|交易平台
Watchlist|自选列表
Watchlists|自选列表
U.S. Markets|美国市场
International Markets|国际市场
Research Tools|研究工具
Stocks|股票
Bonds & Fixed Income|债券与固定收益
Calendar|日历
Transfer Funds|资金划转
Transfer Activity|转账记录
Wire Transfer|电汇
Wire Transfers|电汇
Link External Bank|关联外部银行
Move Account to Schwab|将账户转入嘉信
Routing Numbers & Direct Deposit|银行路由号码与直接存款
Product Offerings|产品一览
American Depositary Receipts (ADRs)|美国存托凭证（ADR）
Cash Solutions|现金管理方案
Margin|保证金
Schwab Brokerage Account|嘉信证券账户
Retirement & IRAs|退休计划与个人退休账户
Invest/Trade on Your Own|自主投资与交易
Investment Advice|投资建议
Work With an Advisor|咨询投资顾问
Trading Tools & Resources|交易工具与资源
Investing & Planning Tools|投资与规划工具
Pricing & Fees|定价与费用
Our Satisfaction Guarantee|满意保证
Insights & Education|市场洞察与投资教育
Market Commentary|市场评论
Trading|交易
thinkorswim Demos|thinkorswim 演示
Equity Compensation|股权薪酬
Financial Planning|财务规划
Retirement|退休规划
Portfolio Management|投资组合管理
Schwab Coaching™|嘉信投资指导™
Schwab Coaching|嘉信投资指导
Schwab Network|嘉信财经频道
Message Center|消息中心
Contact Us|联系我们
Branch Services|网点服务
Help|帮助
How To|操作指南
Debit Cards & Checks|借记卡与支票
Forms & Applications|表格与申请
Security Settings|安全设置
Trusted Contact|可信联系人
Contact Information|联系方式
Beneficiaries|受益人
Account Access|账户访问权限
Margin & Options|保证金与期权
Cost Basis Methods|成本基础计算方法
Alerts|提醒
Paperless|无纸化
Site Settings|网站设置
Search|搜索
Refresh|刷新
Print|打印
Print page|打印页面
Updated:|更新于：
As of|截至
Disclosures|披露说明
Settings|设置
Additional Info|补充信息
Additional actions|其他操作
Customize|自定义
Hide|隐藏
Show|显示
Back|返回
Next|下一步
Previous|上一页
Close|关闭
Cancel|取消
Continue|继续
Done|完成
Apply|应用
Save|保存
Edit|编辑
Delete|删除
Remove|移除
Clear|清除
Reset|重置
View|查看
View All|查看全部
Show More|显示更多
Show Less|收起
Learn More|了解更多
Dismiss|关闭提示
Loading|加载中
Loading...|加载中…
Loading…|加载中…
No results found|没有找到结果
More Details|更多详情
View Details|查看详情
Details|详情
Date|日期
Date range|日期范围
Date Range|日期范围
Start Date|开始日期
End Date|结束日期
From Date|起始日期
To Date|截止日期
Today|今天
Yesterday|昨天
All|全部
All Accounts|所有账户
Select Account|选择账户
Select an account|选择账户
Account|账户
Account Name|账户名称
Account Number|账号
Account Type|账户类型
Account Value|账户价值
Total Account Value|账户总价值
Account Value History|账户价值历史
Total Value|总资产
total value|总资产
Total Value Toggle|展开或收起总资产
Accounts Toggle|展开或收起账户
Positions Toggle|展开或收起持仓
Accounts details|账户详情
Start investing now|开始投资
Your account is funded! Place your first trade, explore investment tools, cash options, and more.|资金已到账。您可以进行首笔交易，也可以了解投资工具、现金管理选项等。
Invest funds|投资资金
Add a Non-Schwab Account|添加非嘉信账户
Day Change|当日变动
day change|当日变动
Day Change %|当日变动幅度
Cash & Cash Investments|现金及现金类投资
Cash & Cash Investments Total|现金及现金类投资合计
Cash & Money Market|现金与货币市场
Cash Balance|现金余额
Cash|现金
Investment|投资
Investments|投资
Investments Total|投资合计
Individual|个人账户
Joint|联名账户
Brokerage|证券账户
Type|类型
Quantity|数量
Symbol|证券代码
Symbol / Name|代码／名称
Name|名称
Description|说明
Price|价格
Price Change|价格变动
Last Price|最新价
Market Value|市值
Cost Basis|成本基础
Gain / Loss|盈亏
Gain/Loss|盈亏
Unrealized Gain/Loss|未实现盈亏
Ratings|评级
Reinvest|再投资
% of Holdings|持仓占比
Actions|操作
Total|合计
Subtotal|小计
Equities|股票
Mutual Funds|共同基金
Fixed Income|固定收益
ETFs & Closed End Funds|ETF 与封闭式基金
Cash & Money Market Total|现金与货币市场合计
Click to collapse Cash & Money Market security group|收起现金与货币市场分组
Click to expand Cash & Money Market security group|展开现金与货币市场分组
Click to open accounts disclosures|查看账户披露说明
Click to open positions disclosures|查看持仓披露说明
Portfolio Insights|投资组合洞察
Portfolio Insights Toggle|展开或收起投资组合洞察
Message Highlights|重要消息
Message Highlights Toggle|展开或收起重要消息
Dismiss Message|关闭消息提示
View Message|查看消息
Go to Message Center|前往消息中心
Quick Links|快捷入口
Quick Links Toggle|展开或收起快捷入口
To track your orders, go to order status.|前往订单状态查看订单进度。
Set and Manage Alerts|设置和管理提醒
Set alerts to monitor your portfolio, track asset prices, and follow the market.|设置提醒以监控投资组合、跟踪资产价格和关注市场动态。
Proxy Events|股东代理投票事项
View your proxy materials and vote online.|在线查看代理投票材料并投票。
Check if you have upcoming proxy events.|查看是否有即将举行的代理投票事项。
Join online trading and investing interactive webcasts.|参加交易与投资互动网络讲座。
Use our articles, videos, courses, and webcasts to make smarter investment decisions.|通过文章、视频、课程和网络讲座了解投资决策。
Learn More From Schwab|嘉信理财学习资源
Learn More From Schwab Toggle|展开或收起嘉信学习资源
Should You Pay Off a Mortgage Before You Retire?|退休前应还清房贷吗？
Weekly Trader's Outlook|每周交易展望
Working in Retirement: Effect on Savings and RMDs|退休后继续工作对储蓄和最低规定提取额的影响
ETFs and Taxes: What You Need to Know|ETF 与税务须知
What Is a Roth IRA and How Does It Work?|什么是罗斯个人退休账户？它如何运作？
Short Selling: The Risks and Rewards|卖空的风险与收益
See all of our expert perspective on a variety of topics.|浏览专家对各类投资主题的见解。
Markets|市场
Markets Toggle|展开或收起市场
U.S.|美国
Europe|欧洲
Asia/Pacific|亚太
Go to markets|前往市场页面
Time (ET)|美国东部时间
Back to Top|返回顶部
Agreements|协议
Privacy|隐私
Accessibility Help|无障碍帮助
FDIC Insurance|美国联邦存款保险
Screen Share|屏幕共享
Generate a Balance Letter|生成余额证明
Generate a balance letter|生成余额证明
Balance Date|余额日期
Balance Details|余额详情
Balance Details Disclosures|余额详情披露说明
Not enough data yet|数据暂不足
Rates|利率
Securities|证券
Positions Detail|持仓明细
Option Details|期权详情
Option Requirement|期权保证金要求
Funds Available|可用资金
Settled Funds|已结算资金
Intraday Margin Buying Power|日内保证金购买力
Cash + Borrowing|现金加借款额度
Borrowing|借款额度
Cash on Hold|冻结现金
Margin Details & Buying Power|保证金详情与购买力
Balance Subject to Interest|计息余额
Month to Date Interest Owed|本月至今应付利息
Margin Equity|保证金账户净值
Equity Percent|净值比例
Margin Rate|保证金利率
View Realized Gain/Loss|查看已实现盈亏
View Positions|查看持仓
Cost Basis Calculator|成本基础计算器
Gain/Loss Summary|盈亏汇总
Transaction Analyzer|交易分析
Symbol Optional|证券代码（选填）
Filter by Transaction Types|按交易类型筛选
Intra-day transactions are subject to change.|日内交易记录可能变动。
Update paperless preferences|更新无纸化偏好
Tax FAQs|税务常见问题
Tax Forms|税务表格
Statements and Documents|对账单与文件
Document Types|文件类型
Additional information about Document Types.|文件类型详情。
Statements|对账单
Letters|函件
Reports & Plans|报告与计划
Trade Confirms|交易确认单
IRA Contributions|个人退休账户缴款
Employer Sponsored Account Forms|雇主赞助账户表格
Cost Basis Fact Sheet|成本基础说明
Select a time period to view monthly income.|请选择时间段查看月度收益。
Table View|表格视图
Chart View|图表视图
Hide Chart|隐藏图表
Show Chart|显示图表
Estimated income payments are not guarantees of future payments.|预估收益不保证未来的实际付款。
Total Income|总收益
Received Income YTD|年初至今已收收益
Est. Income Remain|预计剩余收益
Total Est. Income|预计总收益
View Saved Orders|查看已保存订单
What's New|新功能
Saved Orders|已保存订单
Open Orders|未完成订单
All Orders|全部订单
Order Type|订单类型
Order Date|下单日期
Order Number|订单编号
Order Time|下单时间
Order Details|订单详情
Status|状态
Filled|已成交
Partially Filled|部分成交
Canceled|已取消
Cancelled|已取消
Rejected|已拒绝
Expired|已过期
Pending|待处理
Open|未完成
Today's|今日
Action|操作
Buy|买入
Sell|卖出
Buy to Open|买入开仓
Buy to Close|买入平仓
Sell to Open|卖出开仓
Sell to Close|卖出平仓
Sell Short|卖空
Buy to Cover|买入平空
Market|市场
Limit|限价
Stop|止损
Stop Limit|止损限价
Trailing Stop|追踪止损
Limit Price|限价
Stop Price|止损触发价
Average Price|平均价格
Time in Force|有效期
Day|日
Good Till Canceled|撤销前有效
Order Amount|订单金额
Estimated Amount|预计金额
Estimated Total|预计合计
Review|复核
Review Order|复核订单
Place Order|提交订单
Submit Order|提交订单
Preview Order|预览订单
Add Order|添加订单
+ Add Order|＋ 添加订单
Add Conditional|添加条件单
+ Add Conditional|＋ 添加条件单
Full Page Ticket|全页交易单
Options Level:|期权权限级别：
Trading policies|交易政策
How to place a trade|如何下单
Enter symbol|输入证券代码
Bid|买价
Ask|卖价
Volume|成交量
Open Interest|未平仓合约数
Strike|行权价
Strike Price|行权价
Expiration|到期日
Expiration Date|到期日
Calls|看涨期权
Puts|看跌期权
Option Chain|期权链
Option Chains|期权链
Trade Date|交易日期
Settlement Date|结算日期
Transaction Type|交易类型
Amount|金额
Fees|费用
Commission|佣金
Price Paid|成交价
Proceeds|卖出所得
Date Acquired|买入日期
Date Sold|卖出日期
Short Term|短期
Long Term|长期
Realized Gain|已实现收益
Realized Loss|已实现亏损
Transfer|转账
Transfers|转账
Transfer Status|转账状态
Transfer Date|转账日期
Transfer Type|转账类型
Transfer Amount|转账金额
Frequency|频率
One Time|单次
Recurring|定期
From|转出方
To|转入方
From Account|转出账户
To Account|转入账户
External Accounts|外部账户
Bank Name|银行名称
Routing Number|银行路由号码
Checking|支票账户
Savings|储蓄账户
Review Transfer|复核转账
Submit Transfer|提交转账
Scheduled|已安排
Completed|已完成
Pending Transfers|待处理转账
Deposit|存入
Withdrawal|提取
Dividends|股息
Interest|利息
Income|收益
Performance|表现
Return|回报
Rate of Return|回报率
Time Period|时间段
Benchmark|基准
Asset Allocation|资产配置
Overview|概览
Quotes|报价
Quote|报价
Charts|图表
News|新闻
Indices|指数
Sectors|板块
Market Cap|市值
Market Movers|市场异动
Top Gainers|涨幅领先
Top Losers|跌幅领先
Most Active|成交活跃
Create Watchlist|创建自选列表
Edit Watchlist|编辑自选列表
Add Symbol|添加证券代码
Inbox|收件箱
Sent|已发送
Subject|主题
Compose|撰写
Unread|未读
Mark as Read|标记为已读
Notification Settings|通知设置
Manage Alerts|管理提醒
Create Alert|创建提醒
Active Alerts|有效提醒
Go to Statements|前往对账单
Transaction History Table, sorted by Date|交易记录表，按日期排序
Fees & Comm|费用与佣金
More Actions|更多操作
Realized Gain/Loss Details|已实现盈亏明细
content is loading|内容加载中
No documents found|未找到文件
Third Party Tax Software|第三方报税软件
Charitable Disclosures:|慈善捐赠披露：
Tax Prep Disclosures:|报税披露：
Estimated Income|预计收益
Monthly Average|月均收益
Received Total|已收收益合计
Received Interest|已收利息
Received Dividends|已收股息
Est. Remaining|预计剩余收益
Est. Interest Remaining|预计剩余利息
Est. Dividends Remaining|预计剩余股息
Glossary|术语表
accounts details|账户详情
More Information|更多信息
Select time range|选择时间范围
Select sections to include:|选择要包含的区块：
Export|导出
Account or Portfolio|账户或投资组合
Learn more|了解更多
Learn more about Risk vs. Return|了解风险与回报
How we calculate rate of return|回报率计算方法
Net contributions|净投入
Common indexes|常用指数
More indices & definitions|更多指数及定义
Show annualized returns|显示年化回报
Compare performance across different time frames.|比较不同时间段的表现。
Past performance is no guarantee of future results.|过往表现不能保证未来结果。
You do not have any orders.|暂无订单。
Recently Searched|最近搜索
Options Level: Long|期权权限级别：买入期权
Options Chain|期权链
Characteristics and Risks of Standardized Options|标准化期权的特征与风险
Characteristics and Risks of Standardized Options.|标准化期权的特征与风险。
Options data is provided by the Options Price Reporting Authority.|期权数据由美国期权价格报告机构（OPRA）提供。
Markets Disclosures|市场披露说明
Market Disclosures|市场披露说明
watchlist name|自选列表名称
Earnings|盈利
Valuations|估值
Profitability|盈利能力
Condensed Table View|紧凑表格视图
The quotes presented are in real-time. Actual prices may change.|此处显示实时报价。实际价格可能变动。
Edit columns|编辑列
Customize defaults|自定义默认设置
Skip to content|跳至主要内容
View all symbols|查看全部证券代码
Return to Legacy View|返回旧版
Sector & Industry|板块与行业
Volatility|波动率
Data Source Identification|数据来源
Quotes Disclosures|报价披露说明
Index and Volatility Disclosures|指数与波动率披露说明
News Disclosures|新闻披露说明
Futures Module Disclosures|期货模块披露说明
Risk Disclosure Statement for Futures and Options|期货与期权风险披露声明
Set up your transfer|设置转账
Next Steps|后续步骤
Between your internal and/or external (non-Schwab) bank accounts.|在您的嘉信账户与外部银行账户之间划转。
Cash:|现金：
Only between your Schwab brokerage accounts.|仅限您的嘉信证券账户之间。
Positions:|持仓：
Link or delete an external account|关联或删除外部账户
Tell us what you'd like to transfer|选择要转移的资产
Cash only|仅现金
Positions only|仅持仓
Positions and cash|持仓和现金
View, edit, cancel recent or pending transfers.|查看、编辑或取消近期或待处理的转账。
Full transaction history|完整交易记录
Get details|查看详情
Manage accounts|管理账户
Nickname external accounts|设置外部账户昵称
Add receiving account|添加收款账户
We’ll take it from there.|接下来由我们处理。
Download and print|下载并打印
Move assets from my Schwab brokerage account|从我的嘉信证券账户转出资产
Estimated time:|预计用时：
Note: Not all account types are supported.|注意：部分账户类型暂不支持。
There is no transfer activity based on selected filters.|没有符合筛选条件的转账记录。
Select an option|请选择一项
Send a wire|发起电汇
Wire funds from your account|从您的账户电汇资金
Receive a wire|接收电汇
Get instructions for incoming wires|查看收款电汇指引
Recent or pending transfers|近期或待处理的转账
Help with wires|电汇帮助
Whether a wire is your best option|电汇是否适合您
How to send a wire to or from your Schwab account|如何向嘉信账户汇款或从嘉信账户汇出
Facts about routing numbers, fees, limits and hold times|银行路由号码、费用、限额和资金冻结时间
Get wires help|获取电汇帮助
Downloadable wire forms|可下载的电汇表格
Domestic wires|美国境内电汇
International wires|国际电汇
Bank wires|银行电汇
IRA wires|个人退休账户电汇
PAL wires|质押资产信用额度电汇
Manage your external bank accounts|管理外部银行账户
Add Account|添加账户
Delete Account|删除账户
Your linked external accounts will appear here.|已关联的外部账户将显示在这里。
Downloadable forms|可下载表格
IRA distributions|个人退休账户提款
Education savings distributions|教育储蓄提款
Send Document / Message|发送文件或消息
Chat With Us|在线咨询
Message Center: simpler, more efficient, easier to use|消息中心：更简洁、更高效、更易用
Take the Tour|查看功能导览
Secure|安全消息
Notifications|通知
Urgent|紧急
Important|重要
Recent|近期
Veterans Day Schedule|退伍军人节安排
No message selected.|尚未选择消息。
quick quote|快速报价
Snap Ticket Order Entry Form Container|快捷交易单
Markets Disclosures Open Modal|打开市场披露说明
Condensed View|紧凑视图
Default View|默认视图
More|更多
Ok|确定
OK|确定
Yes|是
No|否
Note:|注意：
Selected|已选
Select|选择
Select All|全选
Deselect All|取消全选
Required|必填
Optional|选填
Clear All|清除全部
Select Date|选择日期
Date Picker|日期选择器
DatePicker|日期选择器
Search finished|搜索完成
Results|结果
No results|没有结果
No data available|暂无数据
An error occurred.|发生错误。
Please try again.|请重试。
Show Details|显示详情
Hide Details|隐藏详情
Expand All|全部展开
Collapse All|全部收起
Print this page|打印本页
Download|下载
Download PDF|下载 PDF
Download CSV|下载 CSV
Export to CSV|导出为 CSV
Table caption|表格标题
button group|按钮组
Tab list|选项卡列表
Important notification.|重要通知。
Server notification.|服务器通知。
Press ENTER to open a calendar and use the TAB key to navigate through dates and use ENTER to select the date.|按 Enter 打开日历，按 Tab 浏览日期，再按 Enter 选择。
Custom Date Range|自定义日期范围
Custom Range|自定义日期范围
Last 7 Days|过去 7 天
Last 30 Days|过去 30 天
Last 60 Days|过去 60 天
Last 90 Days|过去 90 天
Last 6 Months|过去 6 个月
Last 12 Months|过去 12 个月
Next 12 Months|未来 12 个月
This Month|本月
Last Month|上个月
This Year|今年
Last Year|去年
Year to Date|年初至今
Year-to-Date|年初至今
All Dates|所有日期
Month to Date|月初至今
Select a date range|选择日期范围
Type date using the format|请按指定格式输入日期
Display Settings|显示设置
Customize Columns|自定义列
Customize Table|自定义表格
Manage Columns|管理列
Choose Columns|选择要显示的列
Reset to Default|恢复默认设置
Restore Defaults|恢复默认设置
Condense the table view|切换为紧凑表格视图
Your table data will be updated based on the datapoints you selected.|表格将按您选择的数据项更新。
locked columns|锁定列
Would you like to delete this watchlist?|要删除此自选列表吗？
Don't show this again|不再显示
Don’t show this again|不再显示
Apply Filters|应用筛选
Clear Filters|清除筛选
Filters|筛选条件
All Types|所有类型
All Statuses|所有状态
All Transactions|所有交易
Symbol (Optional)|证券代码（选填）
Enter Symbol|输入证券代码
Enter a symbol|输入证券代码
Search by Symbol|按证券代码搜索
Security Name|证券名称
Symbol Lookup|查找证券代码
Recent Searches|近期搜索
Recently Viewed|最近查看
No matching symbols|没有匹配的证券代码
Select an action|选择买卖方向
Select order type|选择订单类型
Select time in force|选择有效期
Shares|股数
Contracts|合约数
Dollars|金额
Dollar Amount|美元金额
Order Quantity|委托数量
Quantity Available|可用数量
Position Quantity|持仓数量
All Shares|全部股份
Available Shares|可用股份
Buying Power|购买力
Available Buying Power|可用购买力
Available to Trade|可用于交易
Available to Withdraw|可提取
Cash Available to Trade|可用于交易的现金
Cash Available to Withdraw|可提取现金
Cash Buying Power|现金购买力
Margin Buying Power|保证金购买力
Unsettled Funds|未结算资金
Settled Cash|已结算现金
Trading Restrictions|交易限制
Trade Settings|交易设置
Trade Type|交易类型
Trade Ticket|交易单
Order Ticket|交易单
Order Submitted|订单已提交
Order Confirmation|订单确认
Confirmation Number|确认编号
Order Received|已收到订单
Order Entered|已录入订单
Order Review|订单复核
Review your order|复核您的订单
Estimated Commission|预计佣金
Estimated Fees|预计费用
Estimated Order Value|预计订单价值
Estimated Principal|预计本金
Estimated Cost|预计成本
Estimated Proceeds|预计卖出所得
Estimated Total Cost|预计总成本
Estimated Total Proceeds|预计卖出所得合计
Estimated Credit|预计净收入
Estimated Debit|预计净支出
Net Credit|净收入
Net Debit|净支出
Even|收支相抵
Special Instructions|特殊指示
Trading Session|交易时段
Regular Session|常规交易时段
Regular Hours|常规交易时段
Extended Hours|延长交易时段
Pre-Market|盘前交易
After Hours|盘后交易
Day Only|仅当日有效
Good 'Til Canceled|撤销前有效
Good 'Til Cancelled|撤销前有效
GTC|撤销前有效（GTC）
Immediate or Cancel|立即成交否则取消
Fill or Kill|全部立即成交否则取消
All or None|全部成交或不成交
Market on Close|收盘市价单
Limit on Close|收盘限价单
Stop Market|止损市价单
Stop-Limit|止损限价单
Trailing Stop $|按金额追踪止损
Trailing Stop %|按百分比追踪止损
Trailing Amount|追踪幅度
Limit Offset|限价偏移
Trigger Price|触发价
Bid Size|买盘数量
Ask Size|卖盘数量
Bid/Ask|买价／卖价
Midpoint|买卖中间价
Last Trade|最后成交
Last Size|最近成交量
Day's Range|日内价格区间
Day Range|日内价格区间
52 Week Range|52 周价格区间
52-Week Range|52 周价格区间
Average Volume|平均成交量
Today's Volume|今日成交量
Previous Close|前收盘价
Change|变动
Percent Change|变动幅度
Net Change|净变动
Change %|变动幅度
Change ($)|变动金额
Change (%)|变动幅度
Real-Time Quote|实时报价
Delayed Quote|延迟报价
Quote Details|报价详情
View Quote|查看报价
Streaming Quotes|流式报价
Real Time|实时
Delayed|延迟
Order Status Details|订单状态详情
Working|挂单中
Queued|排队中
Accepted|已接受
Pending Review|等待审核
Pending Cancel|等待取消
Pending Replace|等待改单
Cancel Pending|等待取消
Replace Pending|等待改单
Cancel Requested|已请求取消
Replaced|已改单
Cancelled by User|用户已取消
Filled Quantity|已成交数量
Remaining Quantity|剩余数量
Execution Price|成交价
Execution Time|成交时间
Execution Details|成交明细
Order Activity|订单动态
Order History|订单历史
Cancel Order|取消订单
Replace Order|修改订单
Change Order|修改订单
Cancel All Orders|取消全部订单
No orders found|未找到订单
Select Trade to place an order. You will see the order here once the order has been processed.|选择「交易」可下单。订单处理后会显示在这里。
Total orders displayed may be impacted by system limits. To see all filled orders, check your Transaction History.|显示的订单数量可能受系统限制。查看所有已成交订单，请前往交易记录。
Conditional Orders|条件单
One Cancels Other|一单成交取消另一单（OCO）
One Triggers Other|一单触发另一单（OTO）
Order A|订单 A
Order B|订单 B
Approval Level:|获批期权权限级别：
Long (1)|买入期权（1 级）
Strategy|策略
Strategy level|策略权限级别
Single Leg|单腿策略
Multi-Leg|多腿策略
Multi-leg strategy|多腿策略
Option Type|期权类型
Contract|合约
Call|看涨期权
Put|看跌期权
Calls and Puts|看涨与看跌期权
In the Money|实值
At the Money|平值
Out of the Money|虚值
ITM|实值（ITM）
ATM|平值（ATM）
OTM|虚值（OTM）
Underlying|标的证券
Underlying Price|标的价格
Greeks|希腊字母指标
Pricer|期权定价工具
New Pricer|新版期权定价工具
Implied Volatility|隐含波动率
IV|隐含波动率（IV）
Delta|德尔塔（Delta）
Gamma|伽马（Gamma）
Theta|西塔（Theta）
Vega|维加（Vega）
Rho|罗（Rho）
Probability ITM|到期实值概率
Probability of Profit|盈利概率
Trade Builder|交易构建器
Trade & Probability Calculator|交易与概率计算器
Analyze Buy|分析买入
Analyze Sell|分析卖出
Max Profit|最大盈利
Max Loss|最大亏损
Breakeven|盈亏平衡点
Covered|有备兑
Covered Call|备兑看涨期权
Covered call|备兑看涨期权
Covered put|备兑看跌期权
Cash-Secured Put|现金担保看跌期权
Cash-secured equity put|现金担保股票看跌期权
Long|多头
Short|空头
Spreads|价差策略
Spread|价差策略
Vertical Spread|垂直价差
Calendar spread|日历价差
Butterfly spread|蝶式价差
Iron butterfly spread|铁蝶式价差
Iron Condor|铁鹰式价差
Credit spread|净收入价差
Debit spread|净支出价差
Short Uncovered|无担保卖出期权
Uncovered|无担保
Naked|无担保
Risk|风险
Limited|有限
Moderate|中等
Increased|较高
Unlimited|无限
Assignment|指派
Exercise|行权
Leg|策略腿
Option contract|期权合约
Expiration date|到期日
Strike price|行权价
Collar|领口策略
Condor|鹰式价差
Protective call|保护性看涨期权
Ratio spread|比率价差
Straddle|跨式组合
Strangle|宽跨式组合
Trade eligible options in extended hours|在延长交易时段交易符合条件的期权
Custom sort your Calls view and Puts view|自定义看涨与看跌期权的排序
Introducing tabs|新增选项卡
You'll see new tabs for Options Chain, Greeks, and our new Pricer.|新增期权链、希腊字母指标和期权定价工具选项卡。
Now you can recalculate Greek values using custom inputs with our new Pricer.|您可以在新定价工具中自定义参数，重新计算希腊字母指标。
Try this new way to compare data. Choose the Calls strategy or Puts strategy, then select any column header to sort your view by value.|选择看涨或看跌期权，再点击任一列标题按该列排序，即可比较数据。
Calculate potential profit and loss for multi-leg strategies. Find the Trade & Probability Calculator in the Trade Builder, or select Analyze Buy/Analyze Sell from any multi-leg strategy's More menu.|计算多腿策略的潜在盈亏。可从交易构建器打开交易与概率计算器，也可在多腿策略的「更多」菜单中选择分析买入或卖出。
My Balances|我的余额
Total Cash|现金合计
Total Market Value|总市值
Total Cost Basis|成本基础合计
Total Gain/Loss|盈亏合计
Total Day Change|当日总变动
Market Value Change|市值变动
Today's Gain/Loss|今日盈亏
Unrealized Gain / Loss|未实现盈亏
Unrealized Gain/Loss %|未实现盈亏比例
Long-Term Gain/Loss|长期盈亏
Short-Term Gain/Loss|短期盈亏
Gain/Loss %|盈亏比例
Gain/Loss $|盈亏金额
Cost Per Share|每股成本
Cost/Share|每股成本
Cost / Share|每股成本
Average Cost Per Share|平均每股成本
Open Date|开仓日期
Quotes Data|行情数据
Fundamental Data|基本面数据
Positions Data|持仓数据
Options Data|期权数据
Arrange Columns|调整列顺序
Select and drag a row to set your column order.|拖动列表中的行可调整表格列顺序。
52 Wk High|52 周最高价
52 Wk Low|52 周最低价
Prev Close|昨收价
Day High|当日最高价
Day Low|当日最低价
Exch|交易所
Last Tr (ET)|最近成交时间（美东）
Div $|股息金额
Div Pay Date|派息日
Div Yld|股息率
EPS Actual $|实际每股收益
5 Yr EPS Grw|5 年每股收益增长率
5 Yr Rev Grw|5 年营收增长率
Ex-Div|除息日
Last Div|最近一次股息
Last Earnings|最近财报日期
Next Earnings Date|下次财报日期
1 Yr EPS Grw|1 年每股收益增长率
1 Yr PM|1 年利润率
Perf vs. S&P 500 YTD|年初至今相对标普 500 表现
P/E Ratio|市盈率
Price/Book Ratio|市净率
Price/Sales Ratio|市销率
Return on Equity|净资产收益率
% of Acct|账户占比
Exp/Mat|到期日
Margin Req|保证金要求
DTE|距到期天数
Intr Val|内在价值
Open Int|未平仓合约数
Underlying Symbol|标的代码
Acquired Date|取得日期
Acquisition Date|取得日期
Purchase Date|买入日期
Holding Period|持有期限
Tax Lot|计税批次
Tax Lots|计税批次
View Lots|查看批次
Lot Details|批次明细
Lot Selection|批次选择
Select Lots|选择批次
Tax Lot Selection|计税批次选择
Reinvest Dividends|股息再投资
Reinvest Capital Gains|资本利得再投资
Dividend Reinvestment|股息再投资
Change Reinvestment|修改再投资设置
Reinvested|已再投资
Do Not Reinvest|不再投资
Pay in Cash|现金支付
Dividend Yield|股息收益率
Annual Dividend|年度股息
Ex-Dividend Date|除息日
Payment Date|支付日
Record Date|登记日
Sector|板块
Industry|行业
Unclassified|未分类
Stocks & Equities|股票
Exchange Traded Funds|交易所交易基金（ETF）
Exchange-Traded Funds|交易所交易基金（ETF）
ETFs & Closed-End Funds|ETF 与封闭式基金
Cash and Money Market|现金与货币市场
Money Market Funds|货币市场基金
Other Assets|其他资产
Other Holdings|其他持仓
% of Account|账户资产占比
% of Account Assets|账户资产占比
Additional information about|补充信息
Additional information about Gain/Loss|查看盈亏的补充信息
Balance Date additional information about|查看余额日期的补充信息
Cash Balance Rates|现金余额利率
Margin Rate Details|保证金利率详情
Margin Rate additional information about|查看保证金利率的补充信息
S M A, a Special Memorandum Account|SMA，特别备忘账户
What is total value?|什么是总资产？
Activity Center|动态中心
Select what you would like to see|选择要查看的内容
accounts module glossary|账户区块术语表
Accounts and Positions with Non-Schwab Data|包含非嘉信数据的账户与持仓
Privacy Policy|隐私政策
Aggregation Services End User Terms|账户聚合服务最终用户条款
Terms|条款
Don't see it here?|在这里找不到？
Intra-day transactions|日内交易
Transaction Details|交易详情
Transaction Status|交易状态
Trade Confirmation|交易确认单
Trade Confirmations|交易确认单
Cash Dividend|现金股息
Qualified Dividend|合格股息
Non-Qualified Dividend|非合格股息
Dividend|股息
Reinvest Dividend|股息再投资
Reinvest Shares|再投资所得股份
Capital Gain|资本利得
Capital Gains Distribution|资本利得分配
Long-Term Capital Gain|长期资本利得
Short-Term Capital Gain|短期资本利得
Bank Interest|银行利息
Credit Interest|贷方利息
Margin Interest|保证金利息
Interest Payment|利息支付
Bond Interest|债券利息
MoneyLink Transfer|MoneyLink 转账
MoneyLink Deposit|MoneyLink 存款
MoneyLink Withdrawal|MoneyLink 提款
Journal|账户内划转
Journaled Shares|划转股份
Cash Journal|现金划转
Security Transfer|证券划转
Funds Transfer|资金划转
Electronic Funds Transfer|电子资金划转
Wire Received|收到电汇
Wire Sent|汇出电汇
Wire In|收到电汇
Wire Out|汇出电汇
Cash In Lieu|零碎股份现金补偿
Return of Capital|资本返还
Foreign Tax Paid|已缴境外税款
Tax Withholding|预扣税
Withholding Tax|预扣税
Regulatory Fee|监管费
ADR Fee|存托凭证费
Service Fee|服务费
Fee Adjustment|费用调整
Stock Split|股票拆分
Reverse Split|股票反向拆分
Merger|合并
Spin-off|分拆
Corporate Action|公司行动
Adjustment|调整
Correction|更正
Miscellaneous|其他
Other|其他
Check|支票
ACH|ACH 电子划转
Debit|借项
Credit|贷项
Credits|贷项
Debits|借项
No transactions found|未找到交易记录
No transactions for the selected date range.|所选日期范围内没有交易记录。
For today’s transactions, real time realized gain/loss information may be delayed.|今日交易的实时已实现盈亏可能延迟显示。
Cost basis calculator popup|成本基础计算器弹窗
Gross Proceeds|卖出所得总额
Net Proceeds|卖出所得净额
Wash Sale|洗售交易
Wash Sale Adjustment|洗售调整
Disallowed Loss|不得抵扣的亏损
Covered Securities|需申报成本基础的证券
Noncovered Securities|无须由券商申报成本基础的证券
Unadjusted Cost Basis|未调整成本基础
Adjusted Cost Basis|调整后成本基础
Cost Basis Method|成本基础计算方法
Account Default Lot Selection Method|账户默认批次选择方法
Select default method|选择默认方法
First In, First Out|先进先出
Last In, First Out|后进先出
FIFO|先进先出（FIFO）
LIFO|后进先出（LIFO）
High Cost|高成本优先
Low Cost|低成本优先
Tax Lot Optimizer™ by Schwab|嘉信计税批次优化器™
Learn about Tax Lot Optimizer™|了解计税批次优化器™
Use Account Default|使用账户默认方法
Use Account Default (Identified Cost)|使用账户默认方法（指定成本）
Request Different Method|申请使用其他方法
Available methods:|可用方法：
Average Cost|平均成本
Identified Cost|指定成本
Specific Identification|指定批次
How to request a different method|如何申请使用其他方法
Change the Cost Basis Method on my Brokerage Account|更改我的证券账户成本基础计算方法
Cost Basis Disclosure Statement|成本基础披露说明
Premium Amortization On|启用溢价摊销
Premium Amortization Off|关闭溢价摊销
Constant Yield|固定收益率法
Straight Line|直线法
Include Discount on Taxes|将折价计入税务申报
Do Not Include Discount on Taxes|不将折价计入税务申报
Available methods for premium amortization:|可用的溢价摊销方法：
Available methods for discount accretion:|可用的折价摊增方法：
Available methods for taxes:|可用的税务处理方式：
The market discount will not be included in your tax forms.|税务表格中不会计入市场折价。
Shares are sold in order of their purchase dates, from oldest to newest.|按买入日期从早到晚卖出。
Shares are sold in order of their purchase dates, from newest to oldest.|按买入日期从晚到早卖出。
Shares are sold in order of their original purchase prices, from highest to lowest.|按原始买入价格从高到低卖出。
Shares are sold in order of their original purchase prices, from lowest to highest.|按原始买入价格从低到高卖出。
Shares are sold in a tax-optimized order, from biggest losses to biggest gains.|按税务优化顺序卖出，从亏损最多到盈利最多。
Shares are sold in the order selected in the Account Default Lot Selection Method.|按账户默认批次选择方法指定的顺序卖出。
Losses, Short Term|短期亏损
Losses, Long Term|长期亏损
No Gains and No Losses, Short Term|短期无盈亏
No Gains and No Losses, Long Term|长期无盈亏
Gains, Long-Term|长期盈利
Gains, Short-Term|短期盈利
W-8 Form Status|W-8 表格状态
Valid|有效
Invalid|无效
Expiring Soon|即将到期
Tax Year|纳税年度
Tax Documents|税务文件
Tax Document|税务文件
Account Documents|账户文件
Account Statements|账户对账单
Brokerage Statement|证券账户对账单
Bank Statement|银行对账单
Monthly Statement|月度对账单
Annual Statement|年度对账单
Annual Account Summary|年度账户汇总
Year-End Summary|年末汇总
Supplemental Information|补充信息
Original|原始版
Corrected|更正版
Corrected Tax Form|更正后的税务表格
Consolidated 1099|合并版 1099 表
Form 1099|1099 表
Form 1099-B|1099-B 表
Form 1099-DIV|1099-DIV 表
Form 1099-INT|1099-INT 表
Form 1042-S|1042-S 表
Form 5498|5498 表
Form W-8BEN|W-8BEN 表
Document Date|文件日期
Date Available|可获取日期
Statement Period|对账期间
Statement Date|对账单日期
View Statement|查看对账单
Download Statement|下载对账单
View Document|查看文件
Download Document|下载文件
See Closed and Inactive Accounts.|查看已关闭及不活跃账户。
Closed and Inactive Accounts|已关闭及不活跃账户
Phase 1|第一阶段
Phase 2|第二阶段
Phase 3|第三阶段
Why didn't I receive a tax form for one (or more) of my accounts?|为什么我的一个或多个账户没有收到税务表格？
Where can I find tax forms for my closed account(s)?|在哪里可以找到已关闭账户的税务表格？
Where can I find tax forms for my employer-sponsored account?|在哪里可以找到雇主赞助账户的税务表格？
Can I import tax forms to third-party tax software providers for my employer-sponsored account?|可以把雇主赞助账户的税务表格导入第三方报税软件吗？
Where do I find contribution receipts?|在哪里可以找到缴款收据？
Where do I find cost basis for contributions to my DAF account?|在哪里可以找到捐赠人建议基金账户所收资产的成本基础？
Where do I find my cost basis and realized gain/loss information?|在哪里可以找到成本基础和已实现盈亏？
What are the general guidelines for claiming tax deductions if I itemize?|逐项扣除时，申报税前扣除的一般指引是什么？
To find current and historical cost basis information for your account, visit Realized Gain / Loss page on Schwab.|若要查看账户当前及历史成本基础，请前往嘉信的「已实现盈亏」页面。
There are no documents available for your search criteria. Modify your search selections and try again.|没有符合搜索条件的文件。请调整搜索条件后重试。
Search finished, But There are no documents available for your search criteria. Modify your search selections and try again.|搜索已完成，未找到符合条件的文件。请调整条件后重试。
Frequently Asked Questions|常见问题
FAQ|常见问题
FAQs|常见问题
Statements & Account Documents|对账单与账户文件
Shareholder Materials|股东材料
Trade Notifications|交易通知
Paperless Delivery|电子送达
Delivery Preferences|送达偏好
Email Delivery|电子邮件送达
Mail Delivery|纸质邮件送达
Enroll|启用
Enrolled|已启用
Not Enrolled|未启用
Email Trade Details|发送交易详情邮件
Email Link to Trade Details|通过电子邮件发送交易详情链接
Account Alerts|账户提醒
Trade and Position Alerts|交易与持仓提醒
Stock and Bond Alerts|股票与债券提醒
Research Alerts|研究提醒
Choose how you'll get notified about account-related activity.|选择接收账户活动通知的方式。
Manage alerts to help monitor your portfolio activity and performance.|管理提醒以监控投资组合的活动和表现。
Set and edit alerts for market changes, new offerings, and more.|为市场变动、新发行等事项设置和编辑提醒。
Select which market research and updates to receive.|选择要接收的市场研究和动态。
Manage Account|管理账户
Manage Accounts|管理账户
Account Settings|账户设置
Account Preferences|账户偏好
Account Nickname|账户昵称
Account Nicknames|账户昵称
Nickname|昵称
Edit Nickname|编辑昵称
Account Owner|账户所有人
Account Holder|账户持有人
Account Holders|账户持有人
Account Registration|账户登记类型
Accounts and Roles|账户与角色
Accounts and roles|账户与角色
Role|角色
Access Level|访问权限级别
View Only|仅查看
View Only Access|仅查看权限
Limited Trading Authority|有限交易授权
Limited trading authority|有限交易授权
Full Trading Authority|完整交易授权
Full Trading Authority**|完整交易授权**
Compare Access Levels|比较权限级别
Give Account Access|授予账户访问权限
Change Access|更改权限
Change access|更改权限
Remove Access|撤销访问权限
Power of Attorney|授权委托
Start application|开始申请
Granting access to your account|授予账户访问权限
Changing access to your account|更改账户访问权限
Using the access|使用访问权限
Other Questions|其他问题
Why we ask this question|提出此问题的原因
Agree to the Terms and Conditions.|同意条款与条件。
Select the account you want them to access.|选择您要授权对方访问的账户。
Someone with access can:|获得访问权限的人可以：
What access levels can I give and/or manage on Schwab.com?|我可以在 Schwab.com 上授予或管理哪些权限？
This chart provides only a partial list of permissions. For full details, please review the FAQs.|此表仅列出部分权限。完整说明请参阅常见问题。
View account information like balances, transactions, positions, and performance|查看余额、交易记录、持仓和表现等账户信息
Update/change instructions for dividend payment, and reinvestment|更新股息支付与再投资指示
Update cost basis, lot selection method at trade or account level|更新交易或账户层面的成本基础和批次选择方法
Security Center|安全中心
Personal Information|个人信息
Mailing Address|邮寄地址
Phone Number|电话号码
Email Address|电子邮箱
Two-Factor Authentication|双重身份验证
Two-Step Verification|两步验证
Primary Beneficiary|主要受益人
Contingent Beneficiary|候补受益人
Transfer on Death|身故转移
Time period|时间段
Select Account/Portfolio|选择账户或投资组合
Value vs. net contributions|资产价值与净投入对比
Rate of return|回报率
Rate of Return Summary Table|回报率汇总表
How is this calculated?|如何计算？
Performance history|历史表现
Time frames over 1 year display annualized returns.|超过一年的区间显示年化回报。
Not enough data to display|数据不足，暂无法显示
Monthly Avg.|月均值
Est. Income Next 12 Mo|未来 12 个月预计收益
End of interactive chart.|交互式图表结束。
Price change dollar. Activated.|已显示价格变动金额。
Price change percent. Activate to show Price change percent|点击显示价格变动幅度。
Day change dollar. Activated.|已显示当日变动金额。
Day change percent. Activate to show day change percent|点击显示当日变动幅度。
Gain/Loss dollar. Activated.|已显示盈亏金额。
Gain/Loss percent. Activate to show Gain/Loss percent|点击显示盈亏比例。
Equities market data is provided from multiple sources including but not limited to Cboe One, Nasdaq Basic/Last Sale and the National Market System Plan.|股票行情来自多个来源，包括但不限于 Cboe One、Nasdaq Basic／Last Sale 和美国全国市场系统计划。
Equities market data is provided from multiple sources including but not limited to Cboe One, Nasdaq Basic and Last Sale and the National Market System Plan.|股票行情来自多个来源，包括但不限于 Cboe One、Nasdaq Basic 和 Last Sale，以及美国全国市场系统计划。
Option quotes are delayed for non-paying professional users or clients of unknown status.|未付费的专业用户或身份状态未知的客户看到的是延迟期权报价。
Option quotes are delayed for non-paying professional users or client of unknown status. Non-professional users may see a mix of real-time and delayed quotes.|未付费的专业用户或身份状态未知的客户看到的是延迟期权报价。非专业用户可能同时看到实时和延迟报价。
Streaming quotes may update as frequently as once per second. Streaming may be disabled to maintain system performance.|流式报价最快每秒更新一次。为维持系统性能，流式报价可能暂停。
Brokerage Products: Not FDIC Insured • No Bank Guarantee • May Lose Value|证券产品：不受美国联邦存款保险保障，不由银行担保，可能亏损。
Before trading, please check a real-time quote for current information.|交易前，请查看实时报价了解当前价格。
To update your streaming preferences, go to Profile and then go to Streaming Quotes.|如需更新流式报价偏好，请前往「个人资料」中的「流式报价」。
Here you can track your account value over time. Check back in a couple of days to start seeing trends.|可在这里查看账户价值随时间的变化。过几天再来查看趋势。
Account day change indicates the change in account value from the previous trading day's close. This includes your trading activity, as well as deposits and withdrawals. Day change is not displayed for all accounts.|账户当日变动是相对于上一交易日收盘时的账户价值变动，包含交易、存入和提取。部分账户不显示当日变动。
Account value is the total net worth of your account. This amount includes all cash and the market value of your investments, less outstanding obligations.|账户价值是账户净值，等于所有现金和投资市值之和减去尚未偿付的款项。
Cash & Cash Investments represent the total amount of cash and sweep money market funds in your account. It does not include Certificates of Deposit or Purchased Money Market Funds.|现金及现金类投资是账户现金和自动划转至货币市场基金的金额合计，不包括存款凭证或自行购买的货币市场基金。
Learn how your assets are protected at Schwab.|了解嘉信如何保护您的资产。
Mutual funds display Dividend Reinvestment instructions followed by Capital Gain Reinvestment instructions.|共同基金先显示股息再投资指示，再显示资本利得再投资指示。
Fixed Income Investments page|固定收益投资页面
Fixed income product page|固定收益产品页面
Bank sweep information can be found on your Statements. Current Balance bank sweep information can be found on the Balances page.|银行自动划转信息可在对账单中查看。当前银行自动划转余额可在余额页面查看。
Paper 1099s are typically mailed shortly after the forms are available online. Please allow several days for postal delivery.|纸质 1099 表通常在网上提供后不久寄出。邮寄需要数天。
Schwab uses a phased approach to get forms out quickly and minimize corrections.|嘉信分批发放税务表格，以便尽早提供并尽量减少更正。
If your portfolio includes securities that tend to reallocate or reclassify, your form may be provided in one of the later phases to avoid a correction.|如果投资组合中包含可能重新分配或重新分类的证券，税务表格可能安排在较晚批次发放，以减少更正。
How else can we help?|还需要什么帮助？
Link to recent or pending transfers|查看近期或待处理的转账
Message Center.|消息中心。
Don't add|不添加
Yes, apply|是，提交申请
Stock/ETF|股票／ETF
Mutual Fund|共同基金
Crypto|加密货币
Vertical Call|看涨期权垂直价差
Vertical Put|看跌期权垂直价差
Calendar Call|看涨期权日历价差
Calendar Put|看跌期权日历价差
Diagonal Call|看涨期权对角价差
Diagonal Put|看跌期权对角价差
Ratio Call|看涨期权比率价差
Ratio Put|看跌期权比率价差
Custom 2 Leg|自定义双腿策略
Butterfly Call|看涨期权蝶式价差
Butterfly Put|看跌期权蝶式价差
Custom 3 Leg|自定义三腿策略
Condor Call|看涨期权鹰式价差
Condor Put|看跌期权鹰式价差
Iron Butterfly|铁蝶式价差
Custom 4 Leg|自定义四腿策略
Buy Write|买入股票并卖出备兑看涨期权
Sell Write|卖空股票并卖出备兑看跌期权
Protective Call|保护性看涨期权
Protective Put|保护性看跌期权
Collar/Synthetic|领口策略／合成策略
Rollout|展期
Rollout Spread|价差展期
Rollout Straddle|跨式组合展期
Custom Stock Opt|自定义股票期权策略
Mark|标记价
Dividends and capital gains|股息和资本利得
Capital gains only|仅资本利得
None|无
Group by Asset Type|按资产类型分组
Full Width View|全宽视图
account summary|账户概览
Day Change Information|当日变动说明
Gain/Loss Information|盈亏说明
Positions Details|持仓明细
Positions Details *|持仓明细 *
Customize positions details table settings|自定义持仓明细表格设置
Qty|数量
Price Information|价格说明
Price Chng %|价格变动幅度
Mkt Val|市值
Day Chng %|当日变动幅度
Gain/Loss % 2|盈亏比例 2
Reinvest?|是否再投资
Reinvest Dividend Information|股息再投资说明
Cash & Cash Investments1|现金及现金类投资 1
Cash & Cash Investments Information|现金及现金类投资说明
Total Cash & Money Market|现金与货币市场合计
Positions Total|持仓合计
Last 7 days|过去 7 天
Current month|本月
Previous month|上个月
Last 6 months|过去 6 个月
Current year|今年
Previous year|去年
Custom date range|自定义日期范围
Donor-Advised Fund (DAF)|捐赠人建议基金（DAF）
View our information sheet|查看说明资料
Estimated income payments are not projections or guarantees of future payments nor are they to be construed as performance data, past or future. Past performance is no guarantee of future results.|预计收益不代表对未来付款的预测或保证，也不能作为过去或未来的业绩数据。过往表现不能保证未来结果。
Certain accounts and positions may include data on assets not held or valued by Schwab, or related to accounts in which you may have view-only access or serve as a power of attorney. Your Schwab or Schwab Bank account statement is the only official record of your Schwab or Schwab Bank holdings and balances.|部分账户或持仓可能包含嘉信未托管或估值的资产，也可能关联您仅有查看权限或作为受托代理人的账户。嘉信或嘉信银行的账户对账单是持仓与余额的唯一正式记录。
The Position Day Change value is calculated as: Price Change x the shares/bonds/units/contracts held in the account currently. It assumes no change in quantity from the prior day and will be available until one hour prior to the next market open.|持仓当日变动等于价格变动乘以账户当前持有的股份、债券、份额或合约数量。计算假设持有数量与前一天相同，并显示至下次开市前一小时。
The % of Account Assets for each position is calculated using all the long positions with values and all cash or cash investment amounts.|各持仓占账户资产的比例以所有具有市值的多头持仓、现金和现金类投资为基础计算。
Ratings are specific to each type of security. Equities display Schwab Equity Ratings®, ETFs & Closed End Funds display a link to Morningstar ratings, Mutual Funds display Morningstar ratings, and Fixed Income display S&P followed by Moody's ratings.|评级因证券类型而异。股票显示嘉信股票评级，ETF 和封闭式基金提供晨星评级链接，共同基金显示晨星评级，固定收益证券依次显示标普和穆迪评级。
As your agreement for the receipt and use of market data provides, the securities markets (1) reserve all rights to the market data that they make available; (2) do not guarantee that data; and (3) shall not be liable for any loss due either to their negligence or to any cause beyond their reasonable control.|根据您接受的市场数据接收与使用协议，证券市场保留所提供市场数据的一切权利，不保证数据，并且对其过失或超出其合理控制范围的原因所导致的损失不承担责任。
This is the default lot selection method for this account. Changing this method will apply to orders executed on the following trading day. Any open orders that execute today will use the method on file before the change was made.|这是账户的默认计税批次选择方法。更改自下一交易日起适用于成交订单。今日成交的未完成订单仍采用原方法。
Cost basis is the original value of an asset for tax purposes. Fees, commissions, wash rules, stock splits, dividends, and returns of capital can affect the cost basis.|成本基础是用于税务计算的资产原始价值。费用、佣金、洗售规则、股票拆分、股息和资本返还都可能影响成本基础。
It is your responsibility to select the proper cost basis method appropriate to your tax situation. Identification of stock for sale, transfer, delivery or distribution must be made by settlement date. View|您需要根据自身税务情况选择合适的成本基础计算方法。出售、转让、交付或分配的股票必须在结算日之前指定。查看
Important Disclosures|重要披露说明
Investment Income Taxes|投资收益税
Save on Taxes: Know Your Cost Basis|了解成本基础与税务
Receive your documents electronically instead of by mail. Paperless delivery works when you have a valid email address and a PDF reader installed on your device.|通过电子方式接收文件。使用无纸化送达需要有效的电子邮箱，以及设备上安装的 PDF 阅读器。
You can go paperless for all eligible accounts and documents, or you can set individual preferences. Read|您可以为所有符合条件的账户和文件启用无纸化，也可分别设置偏好。请阅读
Statements and regulatory disclosures will be available online on the Statements tab or provided digitally to your email address on file. Regulatory disclosures include disclosure brochures and supplements (ADVs), account agreement amendments and notices.|您可在「对账单」选项卡查看对账单和监管披露文件，或通过已登记的电子邮箱接收。监管披露文件包括 ADV 披露手册和补充文件，以及账户协议修订与通知。
You will receive an email when your statements and regulatory disclosures are available. Login is required to access the Statements tab.|对账单和监管披露文件可查阅时，您会收到邮件。查看「对账单」选项卡需要登录。
What happens after I make a request to give someone access?|提交账户授权请求后会发生什么？
How do I start my request to give someone access to one (or more) of my accounts?|如何申请授权他人访问我的一个或多个账户？
What does the person I’m requesting access for need to do?|被授权人需要做什么？
Where can I find a list of my accounts showing who has access?|在哪里可以查看我的账户及其授权访问人员？
Once I give someone access, how long will they retain it?|授予权限后，对方能保留该权限多久？
Access will not expire. Once someone gets access, they will retain it at that level until it is changed or removed.|权限没有到期日。获得访问权限后，对方将保留相应级别的权限，直至权限被更改或撤销。
For assistance, visit our|如需协助，请访问我们的
Contact us|联系我们
How do I find my tax forms?|如何查找我的税务表格？
Security|安全
Account Protection|账户保护
Manage Beneficiaries|管理受益人
Trusted Contacts|可信联系人
Edit Contact Information|编辑联系方式
Hide Account|隐藏账户
Show Account|显示账户
Add Account Nickname|添加账户昵称
Bond|债券
Mutual Fund Trade|共同基金交易
Security Description|证券说明
Action Description|交易操作说明
Transaction Description|交易说明
Audit Trail|审计记录
Activity History|活动记录
Account Activity|账户活动
Document History|文件历史
No activity to display|暂无可显示的活动
Cash and Cash Investments|现金及现金类投资
Positions Details Table|持仓明细表
Cash & Money Market Funds|现金与货币市场基金
No positions to display|暂无可显示的持仓
There are no positions to display.|暂无可显示的持仓。
Disclosure|披露说明
Market Data and 3rd Party Disclosures|市场数据与第三方披露说明
Investment and Insurance Products Are: Not FDIC Insured • Not Insured by Any Federal Government Agency • Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or any of its Affiliates • Subject to Investment Risks, Including Possible Loss of Principal Amount Invested|投资和保险产品不受 FDIC 或任何美国联邦政府机构保险保障，不属于银行或其关联机构的存款或其他债务，也不由其担保。投资存在风险，可能损失本金。
Disclaimers, Disclosures and Footnotes|免责声明、披露说明与脚注
Check the background of Charles Schwab or one of its investment professionals on|可通过以下服务查询嘉信理财或其投资专业人员的背景：
Member SIPC|SIPC 会员
non-US Residents|非美国居民
Charles Schwab Hong Kong clients|嘉信理财香港客户
Charles Schwab UK clients|嘉信理财英国客户
Investment Professionals' Compensation|投资专业人员薪酬
Bank Client Complaint|银行客户投诉
additional buying power information|查看购买力说明
Snap Trade Preferences and Glossary|快捷交易偏好与术语表
refresh quotes|刷新报价
Chart|图表
Enter order at this price|以此价格录入订单
Unit|单位
decrement number|减少数值
increment number|增加数值
Quantity Calculator|数量计算器
additional order type information|查看订单类型说明
Order type|订单类型
additional price details|查看价格说明
additional timing information|查看有效期说明
Timing|有效期
additional special instruction information|查看特殊指示说明
Save Order|保存订单
No default|无默认值
Sell short|卖空
Stop limit|止损限价
Trailing stop|追踪止损
Day + extended hours|当日有效（含延长交易时段）
Good till canceled|撤销前有效
GTC + extended hours|撤销前有效（含延长交易时段）
Fill or kill|全部立即成交否则取消
Extended-hours a.m.|盘前延长交易时段
Extended-hours p.m.|盘后延长交易时段
Buy to open (BTO)|买入开仓（BTO）
Buy to close (BTC)|买入平仓（BTC）
Sell to open (STO)|卖出开仓（STO）
Sell to close (STC)|卖出平仓（STC）
Narrow|窄
Wide|宽
Set Limit Price Only|仅设置限价
Set Limit Price and Action|设置限价和买卖方向
SnapTicket|快捷交易单
Full trade ticket|完整交易单
Cash investments|现金类投资
One Cancels Other (OCO)|一单成交取消另一单（OCO）
Order 1 Triggers All|订单 1 触发所有后续订单
Order 1 Triggers Sequence|订单 1 触发后续订单序列
Order 1 Triggers OCO|订单 1 触发二选一订单（OCO）
Contingent (Trade Trigger)|条件单（交易触发）
Covered Call(Buy/Write)|备兑看涨期权（买入股票并卖出期权）
Covered Put(Sell/Write)|备兑看跌期权（卖空股票并卖出期权）
Select action|选择买卖方向
Stop market|止损市价单
Market on close|收盘市价单
GTC (Good till canceled)|撤销前有效（GTC）
FOK (Fill or kill)|全部立即成交否则取消（FOK）
Bid / Size|买价／买盘数量
Ask / Size|卖价／卖盘数量
Today's Open|今日开盘价
52 Week|52 周
Estimated amount|预计金额
Based on limit price|按限价估算
(does not include commission or fees)|（不含佣金或费用）
Schwab’s Financial Relationships with Fund Companies|嘉信与基金公司的财务关系
Execution price, speed and liquidity are affected by many factors, including market volatility, size and type of order and available market centers. Price can change quickly in fast market conditions, resulting in an execution price different from the quote displayed at order entry.|成交价格、速度和流动性受市场波动、订单规模与类型以及可用交易场所等因素影响。市场快速变动时，成交价可能不同于录入订单时显示的报价。
Equities market data is provided from multiple sources including but not limited to Cboe One, Nasdaq Basic/Last Sale, and the National Market System Plan.|股票行情来自多个来源，包括但不限于 Cboe One、Nasdaq Basic／Last Sale 和美国全国市场系统计划。
For Mutual Funds, the Net Asset Value (NAV) is a daily calculation occurring after market close. This process may take 2 to 4 hours before a final NAV is displayed to the public.|共同基金在每日收盘后计算资产净值（NAV）。最终净值可能需要 2 至 4 小时才会公开显示。
Options carry a high level of risk and are not suitable for all investors. Certain requirements must be met to trade options through Schwab. Multiple leg option strategies will involve multiple commissions.|期权风险较高，并非适合所有投资者。通过嘉信交易期权须满足相应要求。多腿期权策略可能产生多笔佣金。
Binary options are European-style contracts with a fixed, all-or-nothing cash payout that settle on the expiration date based on whether the underlying closes at or above a specified strike price (calls) or below the specified strike price (puts).|二元期权是到期日结算的欧式合约，现金收益为固定金额或零。看涨合约按标的收盘价是否达到或高于指定行权价结算，看跌合约按是否低于行权价结算。
Please read the options disclosure document titled|请阅读以下期权披露文件：
Characteristics And Risks Of Standardized Options|标准化期权的特征与风险
Quantity increment|数量步进
Price increment ($1 or more)|价格步进（1 美元及以上）
Price increment (less than $1)|价格步进（低于 1 美元）
Amount increment|金额步进
Price increment|价格步进
Quantity increment (Coins)|数量步进（币）
Preferred Chain|首选期权链
Bid/Ask Click Behavior|点击买价或卖价时的行为
Stocks/ETFs|股票／ETF
Single-leg Options|单腿期权
Multi-leg Options|多腿期权
Sec Id Type|证券标识类型
Criteria|触发条件
Category|类别
Trading Preferences|交易偏好
Trading preferences|交易偏好
Trade Preferences|交易偏好
Default action|默认买卖方向
Default order type|默认订单类型
Default timing|默认有效期
Day + Extended Hours|当日有效（含延长交易时段）
Extended-hours AM|盘前延长交易时段
Extended-hours PM|盘后延长交易时段
Preview|预览
Review and Submit|复核并提交
Edit Order|编辑订单
Saved Order|已保存订单
Price Improvement|价格改善
Shares or Dollars|股数或金额
Order preview|订单预览
MARKET OPEN|市场已开盘
MARKET CLOSED|市场已收盘
Market Open|市场已开盘
Market Closed|市场已收盘
Market opens at|市场开盘时间
Market closes at|市场收盘时间
Pre-market|盘前交易
After-hours|盘后交易
Extended Hours Quote|延长交易时段报价
Open orders|未完成订单
All Brokerage Accounts|所有证券账户
Total Accounts Value|账户总价值
Total Cash & Cash Investments|现金及现金类投资合计
SMA|特别备忘账户（SMA）
SMA Balance|特别备忘账户余额
Bank Sweep|银行自动划转
Bank Sweep Interest|银行自动划转利息
Bank Sweep Deposit|银行自动划转存入
Bank Sweep Withdrawal|银行自动划转提取
Bank Interest Credit|银行利息入账
Interest Paid|已付利息
Journal Entry|账户内划转记录
Journaled Cash|划转现金
Funds Received|收到资金
Funds Sent|转出资金
Foreign Tax Withholding|境外预扣税
Credit Balance|贷方余额
Debit Balance|借方余额
Cash Distribution|现金分配
Account Transfer|账户转移
Dividend Reinvestment Plan|股息再投资计划
Document Type|文件类型
All Document Types|所有文件类型
Account Letter|账户函件
Account Letters|账户函件
Portfolio Report|投资组合报告
Year-End Statement|年末对账单
Year-End Tax Statement|年末税务报表
Corrected Statement|更正后的对账单
Statement Summary|对账单汇总
Transaction Summary|交易汇总
Audit History|审计历史
Transaction Audit|交易审计
Activity Details|活动详情
Export History|导出记录
Download Transactions|下载交易记录
Print Transactions|打印交易记录
(Optional)|（选填）
Search results|搜索结果
All transaction types|所有交易类型
All document types|所有文件类型
No transactions|暂无交易记录
additional account information|查看账户补充信息
Launch the|打开
order form|订单表单
Close Snap Ticket Order Form|关闭快捷交易单
Go to DJIA research|查看道琼斯工业平均指数研究
Go to NASDAQ research|查看纳斯达克指数研究
Tell us the best way to confirm your identify.|请选择适合您的身份验证方式。
Tell us the best way to confirm your identity.|请选择适合您的身份验证方式。
Explore your new Schwab Wealth Advisory experience|了解嘉信财富顾问的新服务体验
Summary Settings|概览设置
Employer Sponsored|雇主赞助
Employer-Sponsored|雇主赞助
Uncategorized|未分类
External|外部账户
Linked Accounts|已关联账户
Non-Schwab Accounts|非嘉信账户
You may re-aggregate your accounts at any time.|您可随时重新关联这些账户。
Easily view and monitor your overall portfolio by linking your non-Schwab accounts and assets through our aggregation service.|通过账户聚合服务关联非嘉信账户和资产，便可集中查看并跟踪整体投资组合。
Important: Clicking 'OK' will remove this account. All related historical account balances used for account reporting by Schwab will be deleted. This may result in a change to your Total Value chart.|重要提示：点击「确定」将移除此账户。嘉信用于账户报告的相关历史余额将被删除，总资产图表可能因此变化。
Total Value is the sum of the accounts selected and may include data on assets not held or valued by Schwab, or related to accounts in which you may have view-only access or serve as a power of attorney. Changes in Total Value may be due to factors such as deposits and withdrawals made to your account and not necessarily a reflection of investment performance. Your Schwab or Schwab Bank account statement is the only official record of your Schwab or Schwab Bank holdings and balances.|总资产为所选账户价值之和，可能包含嘉信未托管或估值的资产，也可能包含您仅有查看权限或作为受托代理人的账户。总资产变动可能由存取款等因素造成，并不一定反映投资表现。嘉信或嘉信银行的账户对账单是持仓和余额的唯一正式记录。
You control which accounts and assets to include in Total Value from Summary Settings. This page can be accessed by selecting the Setting icon within Accounts. Unless you choose otherwise, certain accounts will automatically be included in Total Value, so make sure you are aware of which accounts are included by reviewing the Summary Settings within Accounts. The following accounts and assets cannot be included in Total Value: Schwab American Express Credit Cards and Schwab Defined Benefit Plans.|可在「账户」区块点击设置图标，进入「概览设置」，选择计入总资产的账户和资产。部分账户默认计入，请在概览设置中核对。嘉信美国运通信用卡和嘉信固定收益型退休计划无法计入总资产。
For SchwabAlliance.com users only, your advisor will not have access to the aggregated account information provided by the Aggregation Services in your account on SchwabAlliance.com.|仅对 SchwabAlliance.com 用户适用：您的顾问无法查看该网站账户聚合服务提供的汇总账户信息。
You are now leaving the Schwab.com website. This link is provided solely for your convenience under an agreement between Charles Schwab & Co. (Schwab) and|您即将离开 Schwab.com。此链接是嘉信理财依据与以下机构的协议为方便您而提供：
. Schwab is not affiliated with this website, does not endorse, and is not responsible for the content, completeness, or accuracy. You may return to Schwab.com, by selecting “Cancel”.|。嘉信与该网站无关联，也不为其背书，对网站内容及其完整性和准确性不承担责任。点击「取消」可返回 Schwab.com。
You are now going to a website that is owned and operated by Innovest Systems, LLC. Information on the website has been prepared by Innovest Systems, LLC, a service provider for Charles Schwab Trust Company. Charles Schwab Trust Company administers the account referenced, but does not monitor the content of the Innovest Systems, LLC website.|您即将访问由 Innovest Systems, LLC 运营的网站。网站信息由嘉信信托公司的服务提供商 Innovest Systems, LLC 编制。嘉信信托公司管理相关账户，但不监督该网站内容。
Your accounts are grouped together by default in categories chosen by Schwab based on similar attributes – for example, Investment, Bank, Employer Sponsored, or External. You can also customize/update these default settings by, for example, rearranging or renaming accounts or adding, renaming or removing categories. Any such customization will result in the removal of Schwab default settings, even for accounts/categories you did alter. After the removal of default settings, any account not placed by you in one of your customized categories will appear as "Uncategorized."|嘉信默认按相似特征对账户分组，例如投资、银行、雇主赞助或外部账户。您可以调整账户顺序或名称，也可以添加、重命名或移除类别。自定义后，嘉信的默认分组设置将被移除。未放入自定义类别的账户会显示为「未分类」。
Brokerage Account Balances are from the previous market close, but also may include new activity that will be posted to your account at after market close. Balances are subject to change.|证券账户余额以上一交易日收盘为基础，也可能包含将在收盘后入账的新活动。余额可能变动。
The tool calculates the complete cost basis and realized gain/loss reports for any stock or mutual fund and includes automatically applying all corporate actions affecting the original trade lots to determine the shares and cost basis on the specific holding dates.|此工具可为股票和共同基金计算完整的成本基础和已实现盈亏，并自动计入影响原始交易批次的公司行动，以确定特定持有日期的股数和成本基础。
Mutual fund values for Day Change and Price Change will be reset to zero approximately 4 hours before market open on Monday, and approximately 1 hour before market open Tuesday through Friday. After market open, Day Change and Price Change will appear if there is a valid value to present. If there is no quote, Day Change and/or Price Change values will show N/A.|共同基金的当日变动和价格变动将在周一开盘前约 4 小时、周二至周五开盘前约 1 小时归零。开盘后如有有效数据，将显示变动值。没有报价时，相应值将显示为不适用。
Fixed income investments are subject to various risks including changes in interest rates, credit quality, market valuations, liquidity, prepayments, early redemption, corporate events, tax ramifications and other factors. For further details, please contact a Schwab Fixed Income Specialist or see the|固定收益投资面临多种风险，包括利率、信用质量、市场估值和流动性的变化，以及提前还款、提前赎回、公司事件和税务影响。详情请咨询嘉信固定收益专员，或查看
Gain/Loss is the hypothetical gain or loss that may be realized and potentially taxed if the investment was sold at the current market price. The calculation uses the current market value of the security minus its cost basis (the cost of the investment with adjustments for any reinvestments, fees, and commissions). It does not include adjustments that may be necessary for computing your tax gains or losses or for reporting these gains or losses on your tax return and is not binding for the IRS. It is not intended to be used as a performance measurement, as it may not take into account all income generated by your investments.|盈亏是假设按当前市价出售投资时可能实现、并可能需要纳税的收益或亏损。它等于当前市值减去成本基础，成本基础会计入再投资、费用和佣金等调整。此数值未计入计算或申报税务盈亏所需的调整，对美国国税局没有约束力。它可能未反映投资产生的全部收益，因此不用于衡量表现。
Past performance is no guarantee of future results. The Overall Morningstar Rating is derived from the weighted average of the risk-adjusted performance figures associated with a fund's 3-year, 5-year and 10-year (if applicable) Morningstar-rated metrics. Click on stars for further rating and standardized performance information.|过往表现不能保证未来结果。晨星综合评级采用基金 3 年、5 年和适用时 10 年的风险调整后表现指标进行加权计算。点击星标查看评级详情和标准化业绩。
For Pending Alternative Investments, your Position will show pending until the purchase is complete by issuer, at which point records will update accordingly. Pending Alternative Investments are included in the Positions page as a courtesy. The Pending Alternative Investment is not in your account, may not be covered by SIPC, and you are at risk to the issuer. Once the purchase is completed and Schwab has obtained control over the alternative investment, the value of the alternative investment will be reflected in the Account Value, and the alternative investment position will be reflected in Positions.|待处理的另类投资会显示为待处理，直至发行人完成购买并更新记录。持仓页面仅供您查询这些待处理投资。它们尚未进入您的账户，可能不受 SIPC 保障，您须承担发行人风险。购买完成且嘉信取得该投资的控制后，其价值会计入账户价值，该投资也会显示在持仓中。
: Includes brokerage accounts for which we have all necessary tax information. (Forms for accounts holding securities at risk for income reallocation—for example, mutual funds, REITs, and UITs—won't be available by this date.)|：包括已取得全部必要税务信息的证券账户。持有可能重新分配收入的证券（例如共同基金、REIT 和单位投资信托）的账户，税表届时可能尚未提供。
: Includes brokerage accounts for which we now have the necessary tax information from issuers. (Forms for accounts holding securities that remain at risk for income reallocation where we haven't yet received the necessary tax information won't be available by this date.)|：包括已从发行人取得必要税务信息的证券账户。若账户持有仍可能重新分配收入的证券，且尚未收到必要税务信息，届时不会提供税表。
: Includes remaining accounts with reportable transactions that have not received a form.|：包括有须申报交易且尚未收到税表的其余账户。
We're unable to provide an expected availability date for corrected Form 1099s; the timing of corrected forms varies and is based on information received from the issuers of securities.|目前无法给出更正后 1099 表的预计提供日期。具体时间取决于证券发行人提供信息的时间和内容。
if the activity in the account does not meet IRS "de minimis" threshold(s) of having at least one of the following conditions:|若账户活动未达到美国国税局的最低申报门槛，即不符合以下任何一项条件：
won't be issued|将不予发放
You can typically access tax forms for closed accounts by going to the account selector on the Statements page and selecting|通常可在「对账单」页面的账户选择器中选择以下选项，以查看已关闭账户的税表：
Tax documents for employer-sponsored accounts cannot be imported into tax preparation software at this time; data must be entered manually. For more information on equity tax reporting, see the|目前雇主赞助账户的税务文件需要手动录入报税软件。股票税务申报详情请参阅
Where can I find information for my donor-advised fund (DAF) account with DAFgiving360™?|在哪里可以查看 DAFgiving360™ 捐赠人建议基金账户的信息？
On the Account Summary page, select your donor-advised fund (DAF) account. DAFgiving360 Client Center has contribution receipts and cost basis information that you can use for tax preparation.|在账户概览页选择您的捐赠人建议基金（DAF）账户。DAFgiving360 客户中心提供报税所需的捐赠收据和成本基础信息。
The Annual Account Summary combines all your contribution receipts into a single report for tax purposes. Go to|年度账户汇总将您的捐赠收据合并成一份报税用报告。请前往
and download the first letter.|并下载第一封函件。
Account > History > Account Letters|账户 → 历史记录 → 账户函件
If you prefer to download each contribution receipt separately, go to|若要分别下载每笔捐赠收据，请前往
Account > History > Contribution History|账户 → 历史记录 → 捐赠记录
For questions on contribution receipts, email Donor Services using the secure message center or call|如对捐赠收据有疑问，请通过安全消息中心联系捐赠人服务，或致电
To find cost basis information for contributions of securities to your DAF account, go to|若要查看向 DAF 账户捐赠的证券成本基础，请前往
and search by symbol and date range.|并按证券代码及日期范围搜索。
Account > History > Cost basis|账户 → 历史记录 → 成本基础
For cost basis questions on contributions from a Schwab account, contact your advisor or call Schwab’s Cost Basis Team at|如对从嘉信账户捐赠资产的成本基础有疑问，请联系您的顾问，或致电嘉信成本基础团队：
For general deductibility rules, refer to the Income Tax Considerations section of the|一般扣除规则请参阅以下政策的所得税注意事项：
DAFgiving360™ Program Policies|DAFgiving360™ 项目政策
Note that grants from a DAF account are not eligible for a tax deduction.|请注意，DAF 账户发放的资助款不享受税前扣除。
You can also find more educational information|更多学习资料可查看
here|此处
DAFgiving360 does not provide legal or tax advice. Please consult a qualified legal or tax advisor where such advice is necessary or appropriate.|DAFgiving360 不提供法律或税务建议。如有需要，请咨询具备相应资质的法律或税务顾问。
This general information is not intended to be a substitute for specific individualized tax, legal, or investment planning advice, and is not intended to be construed as tax advice.|此一般性信息不能替代针对个人情况的税务、法律或投资规划建议，也不构成税务建议。
How Paperless Delivery Works|无纸化送达方式
Enroll Eligible Accounts|为符合条件的账户启用
Email|电子邮件
edit email|编辑邮箱
Format for Trade Details|交易详情格式
Discard Changes|放弃更改
trade alerts|交易提醒
Go paperless with a Schwab Retirement Plan Services account|为嘉信退休计划服务账户启用无纸化
Click to log in to your Schwab Retirement Plan Services account.|点击登录您的嘉信退休计划服务账户。
log in|登录
Paperless Informed Consent|无纸化送达知情同意
Important Information About Your Informed Consent to Receive Paperless Documents Along with the International Addendum|关于同意接收电子文件的重要信息及国际附录
First In First Out (FIFO)|先进先出（FIFO）
Last In First Out (LIFO)|后进先出（LIFO）
Lot selection, average cost, identified cost, amortization, and accretion are accounting methods that could determine whether gains or losses are realized. Choosing one method over another could affect your taxes.|批次选择、平均成本、指定成本、摊销和摊增等会计方法会影响盈亏的确认。不同方法可能产生不同的税务结果。
With Tax Lot Optimizer™ by Schwab selected, shares are sold in a tax-optimized order, from biggest losses to biggest gains.|选择嘉信计税批次优化器™ 后，将按税务优化顺序卖出股份，从亏损最多到盈利最多。
This is the Tax Lot Optimizer™ order:|计税批次优化器™ 的顺序如下：
Shares with losses and with purchase dates newer than 1 year are sold in order of their losses, from biggest to smallest.|买入未满一年的亏损股份，按亏损从大到小卖出。
Shares with losses and with purchase dates older than 1 year are sold in order of their losses, from biggest to smallest.|买入超过一年的亏损股份，按亏损从大到小卖出。
Shares with exactly zero gains and zero losses, and with purchase dates newer than 1 year, are sold.|卖出买入未满一年且盈亏为零的股份。
Shares with exactly zero gains and zero losses, and with purchase dates older than 1 year, are sold.|卖出买入超过一年且盈亏为零的股份。
Shares with gains and with purchase dates older than 1 year are sold in order of their gains, from smallest to biggest.|买入超过一年的盈利股份，按盈利从小到大卖出。
Shares with gains and with purchase dates newer than 1 year are sold in order of their gains, from smallest to biggest.|买入未满一年的盈利股份，按盈利从小到大卖出。
This is the accounting method used for open-end mutual funds in this account. Changing this method will apply only to mutual funds purchased in the future.|这是此账户开放式共同基金的会计方法。更改仅适用于今后买入的共同基金。
These are the accounting methods available for open-end mutual funds in this account. Changing this method will apply only to open-end mutual funds purchased in the future.|以下为此账户开放式共同基金可用的会计方法。更改仅适用于今后买入的开放式共同基金。
The cost basis of all shares owned in the open-end mutual fund are evenly divided by the total number of shares owned in the open-end mutual fund.|开放式共同基金的每份成本基础等于持有份额的总成本基础除以持有总份额。
Letter of Authorization (LOA) to Change Fixed Income Amortization & Accretion Settings|更改固定收益摊销与摊增设置的授权函（LOA）
The cost basis is applied incrementally over the lifespan of the fixed income security.|在固定收益证券存续期间分期计入成本基础调整。
Do you want to send or receive a wire?|您要汇出还是接收电汇？
Find about wires including:|了解电汇相关事项，包括：
Get what you need if you can't send a wire online. Download the relevant form, then complete and return to Schwab. We'll take it from there.|如果无法在线汇款，请下载并填写相应表格，再交回嘉信。后续由嘉信处理。
You can link a Schwab account to an external bank account to move money between your accounts.|您可将嘉信账户关联到外部银行账户，以便在账户间划转资金。
Get what you need if an account can't link online. Download the PDF, complete it, and return to Schwab. We'll take it from there.|如果无法在线关联账户，请下载并填写 PDF 表格，再交回嘉信。后续由嘉信处理。
1-2 business days|1–2 个工作日
3 weeks|3 周
We’re unable to read your streaming preference at this time. We’ll turn streaming on for this session to provide you with the best experience. We’ll restore your streaming preference as soon as possible.|目前无法读取您的流式报价偏好。本次会话将暂时启用流式报价，并会尽快恢复您的偏好设置。
Quotes will be refreshed up to every second on many features of the website.|网站多项功能中的报价最快每秒刷新一次。
This setting is managed separately in the mobile app. For Professional Subscribers, this setting doesn't change market data entitlements or status.|移动应用单独管理此设置。对专业订阅用户而言，此设置不会改变行情数据权限或订阅状态。
Options carry a high level of risk and are not suitable for all investors. Certain requirements must be met to trade options through Schwab. Please read the options disclosure document titled|期权风险较高，并非适合所有投资者。通过嘉信交易期权须满足相应要求。请阅读以下期权披露文件：
. Investing involves risks, including loss of principal.|。投资涉及风险，包括本金亏损。
Columns marked with an * denote that the data updates will auto-refresh every 5 minutes.|带星号的列每 5 分钟自动刷新一次。
U.S. and Canadian index quotes are real-time, all other international index quotes may be delayed by as much as 15 minutes.|美国和加拿大指数提供实时报价，其他国际指数的报价可能最多延迟 15 分钟。
Charles Schwab Premier Bank, SSB.|嘉信优选银行。
Cryptocurrency market data and other information is provided by Paxos Trust Company, LLC and/or other third-party providers.|加密货币行情及其他信息由 Paxos Trust Company, LLC 或其他第三方提供商提供。
FOREIGN CURRENCY DEPOSIT|外币存入
FOREIGN CURRENCY WITHDRAWAL|外币提取
Foreign Currency Deposit|外币存入
Foreign Currency Withdrawal|外币提取
JOURNAL|账户内划转
DEPOSIT|存入
WITHDRAWAL|提取
DIVIDEND|股息
INTEREST|利息
BUY|买入
SELL|卖出
Fees and Commissions|费用与佣金
Transaction History Table|交易记录表
Showing results|显示结果
Results per page|每页结果数
Items per page|每页项目数
Previous Page|上一页
Next Page|下一页
First Page|第一页
Last Page|最后一页
More information|更多信息
Securities lending|证券借贷
Available Cash|可用现金
Cash Balance Information|现金余额说明
Account balance|账户余额
Account balances|账户余额
Balances|余额
Activity|活动
Current Balance|当前余额
Beginning Balance|期初余额
Ending Balance|期末余额
Net Deposits|净存入
Net Withdrawals|净提取
Opening Balance|期初余额
Closing Balance|期末余额
Starting Account Value|期初账户价值
Ending Account Value|期末账户价值
YTD|年初至今
Value|价值
Max|最长区间
From Type date using the format m m / d d / y y y y|起始日期，请按月／日／年格式输入
To Type date using the format m m / d d / y y y y|结束日期，请按月／日／年格式输入
Select Account/Portfolio Select Account/Portfolio|选择账户或投资组合
Performance history Compare performance across different time frames.|历史表现：比较不同时间段的表现。
The values presented in this table are trailing, which means they are calculated for select periods of time preceding {{endDate}}.|此表显示截至 {{endDate}} 的各个回溯期间的计算结果。
information alert label|信息提示
footnote|脚注
The values presented in this table are trailing. This means they calculated for select periods of time preceding|此表显示回溯期间的数据。计算区间截至
Data for this item is currently unavailable due to a gap in performance data or an error in the calculation(s). Adjusting the selected time frame may provide more data.|由于业绩数据缺失或计算出错，此项数据暂不可用。调整所选期间可能会显示更多数据。
Account or portfolio was not open or active during the entirety of the time period.|账户或投资组合在所选期间并非始终处于已开立或活跃状态。
The cost basis is realized upon maturity or redemption of the fixed income security.|在固定收益证券到期或赎回时确认成本基础。
The amount of income accreted from the discount will increase each year.|折价摊增计入收益的金额逐年增加。
The amount of income accreted from the discount is equal each year.|折价摊增计入收益的金额每年相同。
To learn more about investments and taxes, go to|如需了解投资与税务，请前往
for additional information on cost basis method choices and how Schwab reports adjusted-cost basis information to the IRS.|了解成本基础计算方法，以及嘉信向美国国税局报告调整后成本基础的方式。
Complete the|请填写
form.|表格。
Upload the completed form by navigating to the|如需上传已填写的表格，请前往
then selecting Upload Document, or print the completed form and mail to:|然后选择「上传文件」，也可以打印填写后的表格并邮寄至：
Upload Document|上传文件
form submitted to Schwab.|表格并提交给嘉信。
to find out which methods are selected.|查询当前选用的方法。
Call us at|请致电
and request a|索取
form, then mail it to the address listed in the form.|表格，并按表格所列地址邮寄。
, then save your preferences, then complete the Paperless Informed Consent.|，然后保存偏好并完成无纸化知情同意。
To set up|如需设置
If you want paperless delivery of Schwab Retirement Plan Services account materials,|若要电子接收嘉信退休计划服务账户材料，
, select the ''My Profile'' Tab, and Select ''Communication Preferences''.|，请选择「我的资料」选项卡中的「通讯偏好」。
1. To avoid any issues with online transfers please confirm the correct routing number with your bank.|1. 为避免在线转账出现问题，请向您的银行确认正确的路由号码。
2. Once you have confirmed the correct routing number, contact us by calling us at|2. 确认正确的路由号码后，请致电
to update your external account instructions.|以更新您的外部账户转账指示。
We see multiple routing numbers set up for the same external account. This often happens over time when banks change their instructions, or if you have moved since opening the external account.|同一外部账户已设置多个路由号码。银行变更转账指示，或开户后搬家，都可能出现这种情况。
Let authorized individuals access your Schwab accounts so they can view account activity, trade, or trade and move money and assets.|允许获授权的人访问您的嘉信账户。根据权限级别，对方可以查看账户活动、交易，或交易并划转资金和资产。
In addition to their current access, this level adds the ability to:|此级别在现有权限基础上增加以下权限：
exchange securities, including options and trades on margin|交易证券，包括期权与保证金交易
adjust instructions for account dividends and cost basis|调整账户股息与成本基础指示
For the complete list of permissions, review the FAQ and access levels chart.|完整权限请参阅常见问题和权限级别表。
The available access levels are View Only, Limited Trading Authority (LTA), and Full Trading Authority (FTA).|可选级别为仅查看、有限交易授权（LTA）和完整交易授权（FTA）。
Someone with|拥有以下权限的人：
access can view account information such as transaction history. They can also view and download statements and tax documents.*|可查看交易记录等账户信息，也可查看和下载对账单及税务文件。*
(LTA) can view account information and also place trades.*|（LTA）可查看账户信息并下单交易。*
(FTA) can view account information, place trades, and move/transfer money or securities. This includes moving/transferring to accounts that belong to someone else.|（FTA）可查看账户信息、下单交易，并转移资金或证券，包括转到他人名下的账户。
Select the “Give Account Access” button.|选择「授予账户访问权限」按钮。
Select the level of access you want the requested person to have (View Only, LTA, or FTA).|选择要授予对方的权限级别：仅查看、LTA 或 FTA。
Provide information about the person you would like to give access.|填写被授权人的信息。
If you’d like to give someone access to multiple accounts, please make each request one at a time. We will handle each access request separately.|如需授权对方访问多个账户，请为每个账户分别提交申请。嘉信会逐一处理。
If the account includes additional account holders, they will need to approve your request. We’ll notify them for you and explain the steps.|若账户还有其他持有人，需要他们批准申请。嘉信会通知他们并说明步骤。
I hold my account jointly with another account owner. Do all account holders need to approve my request to give someone access to the account?|如果是联名账户，授予访问权限的申请需要所有持有人批准吗？
Yes. All account holders must approve any request to give someone access to that account.|需要。授予他人账户访问权限须经全体持有人批准。
All account holders must approve the request before we can invite the requested person to apply.|全体账户持有人批准后，嘉信才会邀请被授权人提交申请。
They must complete the application within 7 days of receiving the email or it will expire.|对方须在收到邮件后 7 天内完成申请，否则申请将过期。
How long does it take for someone to receive access to my account once Schwab has received my request?|嘉信收到申请后，对方多久能获得账户访问权限？
What happens if I want to cancel a pending request to give access?|如果我想取消待处理的授权申请，怎么办？
What happens if my request to give access is incomplete and expires?|授权申请未完成且过期后会怎样？
Any additional account holder will have 7 calendar days from the date of the request to complete the approval.|其他账户持有人需在申请日期起 7 个自然日内完成审批。
How can I or another account holder change someone’s existing access?|我或其他账户持有人如何更改某人已有的访问权限？
Any account holder can change someone’s View Only or LTA existing account access on the Account Access page in the “Accounts and Roles” section.|任何账户持有人均可在「账户访问权限」页面的「账户与角色」区块更改现有的仅查看或 LTA 权限。
To change access from View Only to LTA or FTA or from LTA to FTA:|若要将仅查看升级为 LTA 或 FTA，或将 LTA 升级为 FTA：
To change access from FTA to LTA or View Only OR from LTA to View Only:|若要将 FTA 调整为 LTA 或仅查看，或将 LTA 调整为仅查看：
Find the account you want to make the change on, remove their existing access, then request access at the new level you want them to have.|找到要修改的账户，撤销对方现有权限，然后按所需新级别重新申请。
To change a power of attorney:|若要更改授权委托：
You may request support from a Schwab representative to start the process. You cannot manage power of attorney roles on Schwab.com.|请联系嘉信客服开始办理。Schwab.com 不提供授权委托角色管理。
How can I remove someone’s existing access? Can other account holders remove it?|我如何撤销某人的现有权限？其他持有人可以撤销吗？
Once the requested person gets access to my account, how can they begin or complete any of their authorized activities?|获得账户访问权限后，被授权人如何开展获准的操作？
Which Schwab electronic applications may use to give access to my account?|可以通过嘉信的哪些应用授予账户访问权限？
You can manage account access on Schwab.com using any browser on a computer, tablet, or mobile device. This feature is currently not available on the Schwab mobile app.|可通过电脑、平板或手机浏览器登录 Schwab.com 管理账户权限。嘉信移动应用目前不提供此功能。
The person I gave access to my account has lost/forgotten their Schwab.com credentials. May I provide them with my credentials instead?|被授权人丢失或忘记 Schwab.com 登录凭据时，可以使用我的凭据吗？
reset them at Schwab.com.|在 Schwab.com 重置登录凭据。
What level of access do I need? Is there a full list of permissions?|我需要哪一级权限？有完整权限清单吗？
The level of access you request depends on permission you wish to grant. Find a full list of permissions for each access level below.|申请的级别取决于您希望授予的权限。各级别的完整权限如下。
Giving someone Limited Trading Authority (LTA) access will allow them to:|授予有限交易授权（LTA）后，对方可以：
View account-level Social Security or Tax ID number(s)|查看账户对应的社会安全号码或税务识别号码
Download, print, and view account information, including statements, tax forms, trade confirmations, and emails going back 10 years|下载、打印和查看过去 10 年的账户信息，包括对账单、税务表格、交易确认单和邮件
Trade options*|交易期权*
Trade on margin*|进行保证金交易*
Trade on portfolio margin*|使用投资组合保证金交易*
Trade futures|交易期货
Trade forex|交易外汇
In addition to the abilities available to Limited Trading Authority (LTA), giving someone Full Trading Authority (FTA) ** access will allow them to:|除有限交易授权（LTA）的权限外，完整交易授权（FTA）** 还允许对方：
Initiate or cancel ACH ('MoneyLink') transactions from instructions already established by an account holder|依据账户持有人已设置的指示，发起或取消 ACH（MoneyLink）交易
Request wires payable to an account holder or to someone other than an account holder|申请向账户持有人或其他人员汇款
Initiate cash journals out of the account|发起从账户转出现金的内部划转
Update IRA contribution codes|更新个人退休账户缴款代码
Create and update tax withholding elections|设置和更新预扣税选项
** Futures and Forex accounts are not eligible for Full Trading Authority|** 期货与外汇账户不适用完整交易授权。
**Futures and Forex accounts are not eligible for Full Trading Authority.|** 期货与外汇账户不适用完整交易授权。
What if I need to add a durable power of attorney instead of an access level?|如果我需要办理持久授权委托，应该怎么做？
Complete the appropriate Durable Power of Attorney enrollment form from Services > Account Servicing > Forms on Schwab.com.|请在 Schwab.com 的「服务 → 账户服务 → 表格」中填写相应的持久授权委托登记表。
Why am I unable to use the account access feature to give access to some of my accounts?|为什么部分账户无法使用账户授权功能？
Account access is determined by the type of account and certain processing requirements:|能否授予账户访问权限取决于账户类型及处理要求：
This completely cancels this request to give this individual access to your account. If you want to add them later, you’ll have to make a new request.|此操作将取消授予该人士账户访问权限的申请。以后如需授权，必须重新提交申请。
This completely removes the selected person's access to your account. To give them any level of access again, you'll have to complete a new application.|此操作将完全撤销所选人士的账户访问权限。若要重新授权，须提交新申请。
Margin access added|已开通保证金权限
Margin access on request|可申请保证金权限
Margin access included|包含保证金权限
View rates and requirements|查看费率与要求
What is an option?|什么是期权？
Placing your first trade|进行首笔交易
Risk Definitions|风险定义
Limited risk|有限风险
Moderate risk|中等风险
Increased risk|较高风险
Unlimited risk|无限风险
For covered strategies:|适用备兑策略：
Covered call, puts|备兑看涨与看跌期权
Protective calls, puts|保护性看涨与看跌期权
Cash-secured equity puts|现金担保股票看跌期权
Collars|领口策略
Generate income on a stock position by selling a call|卖出看涨期权以获取股票持仓收益
Hedge a stock position by buying a put|买入看跌期权以对冲股票持仓
Objectives: Capital preservation, income|目标：保全资本、获得收益
The options strategy level you selected can include a margin line of credit on request.|您选择的期权策略级别可按申请包含保证金信贷额度。
Select "Yes, add" to apply for options trading with a margin line of credit.|选择「是，添加」以申请期权交易和保证金信贷额度。
Select "Don't add" to apply just for options trading.|选择「不添加」仅申请期权交易。
Select "Exit" to return to Margin & Options Access. Your options selection will not be saved.|选择「退出」返回保证金与期权权限页面。当前期权选项将不会保存。
Includes covered plus long strategies:|包括备兑策略和以下买入策略：
Long calls and puts (uncovered)|买入看涨或看跌期权（无备兑）
Long straddles|买入跨式组合
Long strangles|买入宽跨式组合
Buy calls or puts without owning the security|在未持有标的证券的情况下买入看涨或看跌期权
Covered strategies also included|同时包含备兑策略
Objectives: Capital preservation, income, growth, and speculation|目标：保全资本、收益、增长及投机
Current level|当前级别
Includes covered and long strategies plus spreads:|包括备兑策略、买入策略及以下价差策略：
Vertical spreads|垂直价差
Long calendar spreads|买入日历价差
Long diagonal spreads|买入对角价差
Long ratio spreads|买入比率价差
Butterflies, iron butterflies|蝶式和铁蝶式价差
Condors, iron condors|鹰式和铁鹰式价差
Simultaneously buy and sell the same type of option (call or put) of the same security|同时买入和卖出同一标的、同一类型的期权（看涨或看跌）
Covered and long strategies included|包含备兑和买入策略
Apply for Spreads|申请价差策略权限
Includes covered, long, and spread strategies, plus:|包括备兑、买入和价差策略，以及：
Short uncovered calls and puts|卖出无担保的看涨和看跌期权
Short calendar spreads|卖出日历价差
Short diagonal spreads|卖出对角价差
Short ratio spreads|卖出比率价差
Sell uncollateralized or unpaired calls or puts (unprotected against losses)|卖出无担保或未配对的看涨或看跌期权（亏损无保护）
Covered, long, and spread strategies included|包含备兑、买入和价差策略
Apply for Short Uncovered|申请无担保卖出期权权限
Compare strategies|比较策略
Looking to downgrade?|想降低权限级别？
How margin loans work|保证金贷款如何运作
Margin can increase your trading capital or support short-term financial needs.|保证金贷款可增加交易资金或满足短期资金需求。
Understand the benefits and risks of margin|了解保证金交易的益处与风险
Margin can be an effective component of your portfolio when it's managed wisely.|妥善管理时，保证金可作为投资组合的一个工具。
You can also download our|您也可以下载
Schwab Guide to Margin|嘉信保证金指南
Understand the options basics|了解期权基础
Learn about calls and puts, and other basic components of options contracts.|了解看涨、看跌期权及期权合约的其他基本要素。
Dig deeper into options|深入了解期权
Access educational videos, articles, and live streams options trading content.|查看期权交易的教学视频、文章与直播。
Investing Insights > Options|投资洞察 → 期权
Review our Privacy Notice|查看隐私声明
Margin trading increases your level of market risk.|保证金交易会增加您的市场风险。
Your downside is not limited to the collateral value in your margin account.|潜在损失可能超过保证金账户内担保品的价值。
Schwab may initiate the sale of any securities in your account, without contacting you, to meet a margin call.|为满足追加保证金要求，嘉信可以在未联系您的情况下卖出您账户内的证券。
Schwab may increase its "house" maintenance margin requirements at any time and is not required to provide you with advance written notice.|嘉信可随时提高内部维持保证金要求，无须事先书面通知。
You are not entitled to an extension of time on a margin call.|您无权要求延长追加保证金的期限。
For definitions, return to previous page and launch the glossary.|如需查看定义，请返回上一页并打开术语表。
At-the-money (ATM)|平值（ATM）
In-the-money (ITM)|实值（ITM）
Out-of-the-money (OTM)|虚值（OTM）
Example:|示例：
Front ratio spread|前端比率价差
Risk and options strategy levels:|风险与期权策略级别：
(Limited risk)|（有限风险）
(Moderate risk)|（中等风险）
(Increased risk)|（较高风险）
(Unlimited risk)|（无限风险）
Underlying stock may be assigned, reducing potential upside on long holdings.|标的股票可能因期权指派而被交割，减少多头持仓的潜在上涨收益。
Risk is limited to the premium paid for the option. The entire investment may be lost and, in some cases, may occur over a short period of time.|风险限于为期权支付的权利金。投资可能全部亏损，有时会在短期内发生。
Unlimited risk with short calls positions; uncovered puts incur max loss if underlying security declines to zero.|卖出无担保看涨期权的风险无限。若标的证券跌至零，卖出无担保看跌期权将产生最大亏损。
Clients residing in certain foreign jurisdictions are restricted from using margin for non-trading purposes.|居住在某些境外司法辖区的客户，使用保证金贷款作非交易用途受到限制。
Limit Price is locked. Click to unlock a fixed price and activate streaming prices.|限价已锁定。点击解除固定价格并启用流式报价。
Limit Price is unlocked. Click to lock a fixed price and deactivate streaming prices.|限价已解锁。点击锁定固定价格并停用流式报价。
Limit Price is unlocked. Click to discontinue streaming prices and set a fixed price.|限价已解锁。点击停止流式报价并设置固定价格。
Lock Limit Price|锁定限价
Unlock Limit Price|解锁限价
Step 1: Enter Order|第 1 步：录入订单
Step 2: Verify Order|第 2 步：复核订单
Verify Order|复核订单
Order Summary|订单摘要
Underlying Quote Information|标的证券报价信息
Estimated Quantity|预计数量
Industry Fee|行业费用
Estimated industry fee|预计行业费用
Estimated total amount|预计总金额
Order messages|订单提示
Warnings|警告
Info Only|参考信息
This order is based upon the dollar amount selected and price of the security at the time the order is routed to market.|此订单按您选择的美元金额，以及订单送往市场时的证券价格计算。
With market orders, prices can change quickly in fast market conditions resulting in execution prices that can be different from the quotes displayed at order entry.|市场快速波动时，市价单的实际成交价可能与录入订单时显示的报价不同。
Before placing this order, please verify that the order information is correct and read your Order Messages.|提交订单前，请核对订单信息并阅读订单提示。
Before placing this order, please acknowledge the highlighted Order Messages above.|提交订单前，请确认已阅读上方突出显示的订单提示。
Edit order details|编辑订单详情
Order Verification|订单复核
Take a Tour|查看功能导览
Take a tour|查看功能导览
View more information on order status filters|查看订单状态筛选说明
All orders status filter|按状态显示所有订单
Open order status filter|按状态显示未完成订单
Filled order status filter|按状态显示已成交订单
Cancelled order status filter|按状态显示已取消订单
Canceled order status filter|按状态显示已取消订单
View more information on date range|查看日期范围说明
All orders date filter|显示所有日期的订单
Today orders date filter|显示今日订单
Yesterday orders date filter|显示昨日订单
Past 7 days|过去 7 天
Past 14 days|过去 14 天
All orders from the last seven days date filter|显示过去 7 天的所有订单
All orders from the last fourteen days date filter|显示过去 14 天的所有订单
View more information on type|查看订单类型说明
All orders Type filter|显示所有类型的订单
Stocks & ETFs Type filter for orders|显示股票和 ETF 订单
Options Type filter for orders|显示期权订单
Fixed Income Type filter for orders|显示固定收益订单
Mutual Funds Type filter for orders|显示共同基金订单
Conditionals|条件单
Conditionals Type filter for orders|显示条件单
View more information on symbol filters|查看证券代码筛选说明
All orders symbol filter|显示所有证券代码的订单
View customize modal|打开自定义窗口
Order Status Table. To view or update your Streaming Quotes settings, go to My Profile, and then Streaming Quotes. Prices may not reflect actual value.|订单状态表。若要查看或更改流式报价设置，请前往「我的资料」中的「流式报价」。所示价格可能与实际价值不同。
Expand/Collapse Icon Column|展开或收起图标列
Fill Price|成交价
Created (ET)|创建时间（美国东部时间）
Last Activity (ET)|最近活动时间（美国东部时间）
Trading Actions|交易操作
Expand all orders|展开全部订单
Collapse all orders|收起全部订单
Left table scroll button. Click or press enter to scroll left|向左滚动表格，点击或按 Enter 键
Right table scroll button. Click or press enter to scroll right|向右滚动表格，点击或按 Enter 键
leftScroller|向左滚动
rightScroller|向右滚动
View information on status|查看状态说明
View information on Action|查看买卖方向说明
View information on timing|查看有效期说明
View information on mark|查看标记价说明
As your agreement for the receipt and use of market data provides, the securities markets/3rd party vendors (1) reserve all rights to the market data that they make available; (2) do not guarantee that data; and (3) shall not be liable for any loss due either to their negligence or to any cause beyond their reasonable control.|按照您接受的行情数据接收及使用协议，证券市场与第三方供应商保留其所提供数据的一切权利，不对数据作出保证，也不对其过失或超出合理控制范围的原因造成的损失承担责任。
Total cash & cash invest|现金及现金类投资合计
Review disclosures for list of streaming columns.|可在披露说明中查看提供流式数据的列。
Open Menu|打开菜单
Total ETFs & CEFs|ETF 与封闭式基金合计
ETFs & CEFs|ETF 与封闭式基金
Extended Hours Values|延长交易时段数据
Set Extended Hours Values|设置延长交易时段数据
Customize display|自定义显示
Message: Positions details table. Streaming preferences are enabled. Extended Hours Values setting is on. To update your streaming preferences, go to Profile and then go to Streaming Quotes. To update your Extended Hours Value setting, go to Customize and then select Extended Hours Values.|持仓明细表提示：已启用流式报价和延长交易时段数据。可在「个人资料 → 流式报价」中更改报价偏好，或在「自定义 → 延长交易时段数据」中更改延长时段设置。
Message: Positions details table. Streaming preferences are enabled. Extended Hours Values setting is off. To update your streaming preferences, go to Profile and then go to Streaming Quotes. To update your Extended Hours Value setting, go to Customize and then select Extended Hours Values.|持仓明细表提示：已启用流式报价，延长交易时段数据已关闭。可在「个人资料 → 流式报价」中更改报价偏好，或在「自定义 → 延长交易时段数据」中更改延长时段设置。
* Streamed data includes Ask, Ask Size, Bid, Bid Size, Day Change, Day High, Day Low, Delta, Gain/Loss, Intrinsic Value, In the money (ITM), Gamma, Last Price, Last Size, Last Trade (ET), Market Value, Price, Price Change, Rho, Theta, Vega, and Volume.|* 流式数据包括卖价、卖盘数量、买价、买盘数量、当日变动、当日最高价、当日最低价、Delta、盈亏、内在价值、实值状态（ITM）、Gamma、最新价、最近成交量、最近成交时间（美国东部时间）、市值、价格、价格变动、Rho、Theta、Vega 和成交量。
Quantity, % of Account, Cost Basis, Margin Requirement, and Cost/Share update every 5 minutes.|数量、账户资产占比、成本基础、保证金要求和每股成本每 5 分钟更新一次。
The Real Time Gain/Loss calculation is provided for informational purposes only and is an estimate of your unrealized daily gains or losses. It does not include all the adjustments that may be necessary for purposes of computing your tax gains or losses or for reporting these gains or losses on your tax return, and are not binding on the IRS.|实时盈亏仅供参考，反映当日未实现盈亏的估算值。它可能未包含计算或申报税务盈亏所需的全部调整，对美国国税局不具有约束力。
Non-Margin|非保证金
Transaction type filter options|交易类型筛选选项
Adjustments|调整
ATM Activity|ATM 活动
Bill Pay|账单支付
Checks|支票
Deposits|存入
Electronic Transfers|电子转账
Misc|其他
Security Transfers|证券划转
Taxes|税费
Trades|买卖交易
VISA Debit Card|Visa 借记卡
Withdrawals|提取
Last 3 months|过去 3 个月
Last 5 years|过去 5 年
Last 10 years|过去 10 年
Previous calendar year|上一个自然年
Include option contracts|包含期权合约
Exclude option contracts|排除期权合约
Option contracts only|仅期权合约
Reporting Period|报告期间
Total Proceeds|卖出所得合计
Totals|合计
Total Gains|收益合计
Total Losses|亏损合计
Net Gain|净收益
Gain loss details|盈亏明细
5 days|5 天
30 days|30 天
60 days|60 天
90 days|90 天
Custom View|自定义视图
Temporarily Unavailable|暂不可用
Expand|展开
Collapse|收起
Next steps|后续步骤
Duplicate order|复制订单
Opposite order|反向订单
Close Menu|关闭菜单
Sell All Shares|卖出全部股份
Sell Shares|卖出股份
Buy Shares|买入股份
Set Alert|设置提醒
Company News|公司新闻
Transactions|交易记录
Dividend Reinvestment?|是否股息再投资？
Price Chng $|价格变动金额
Day Chng $|当日变动金额
For Equities and ETFs, the price is the last trade price during the regular session. During the extended session, if the Last Trade price is outside the current bid and ask spread, or if there is no last trade price available, the bid price is used for long positions and the ask price is used for short positions. For Options, the mark price is used which represents the midpoint between the bid and the ask price. For Mutual Funds, the Net Asset Value (NAV) is used.|股票和 ETF 在常规交易时段使用最近成交价。在盘前或盘后交易时段，若最近成交价超出当前买卖报价范围，或没有最近成交价，多头持仓使用买价，空头持仓使用卖价。期权使用标记价，即买价和卖价的中点。共同基金使用基金净值（NAV）。
Today's gain or loss for your equity or options positions. The calculation is based on the gain or loss for your positions since the previous market close or your cost if purchased today.|股票或期权持仓的当日盈亏。计算以上一交易日收盘价为基准，当日买入的持仓以买入成本为基准。
"Gain/Loss ($/%)" is the hypothetical gain or loss that would be realized and potentially taxed if the investment was sold at the current market price. The calculation uses the current market value of the investments minus the cost basis, (e.g., adjustments for any reinvestments, fees, and commissions). It does not include all the adjustments that may be necessary for computing your tax gains or losses or for reporting these gains or losses on your tax return and is not binding on the IRS. It is not intended to be used as a performance measurement, since it does not take into account all income generated by your investments. For this reason, Gain/Loss ($/%) will typically under-report the performance for many investments.|“盈亏（金额／百分比）”是假设按当前市价卖出投资时可能实现并可能涉及纳税的盈亏。计算时以投资的当前市值减去成本基础，成本基础计入再投资、费用和佣金等调整。此计算未包含确定应税盈亏或在纳税申报表上报告盈亏时可能需要的全部调整，对美国国税局不具约束力。该指标未计入投资产生的全部收入，不适合用来衡量投资表现，因此通常会低估许多投资的实际表现。
Shows Dividend Reinvestment instructions for each security; note that mutual funds display Dividend Reinvestment instructions followed by Capital Gain Reinvestment instructions.|显示每只证券的股息再投资设置。共同基金先显示股息再投资设置，再显示资本利得再投资设置。
Learn how these assets are protected|了解这些资产如何受到保护
Day change indicates the change in account value from the previous trading day's close. This includes your trading activity, as well as deposits and withdrawals. Day change is not displayed for all accounts. For crypto accounts, day change indicates the change in account value since the previous crypto trading day using values from UTC midnight.|当日变动是账户价值相对上一交易日收盘时的变化，包含交易、存款和取款的影响。部分账户不显示当日变动。加密资产账户以协调世界时（UTC）午夜的账户价值为基准，计算自上一加密资产交易日以来的变化。
Edit column dialog. Press tab to cycle through column category checkboxes|编辑表格列的对话框。按 Tab 键依次切换各列类别的复选框。
applicable terms and conditions|适用的条款与条件
or any of its subsidiaries.|或其任何子公司。
. Charles Schwab & Co., Inc. is not affiliated with TaxAct|。嘉信理财与 TaxAct 无关联
This information cannot be used for the purpose of avoiding penalties that may be imposed under the Internal Revenue Code or applicable state or local tax law provisions. Where specific advice is necessary or appropriate, Schwab recommends consulting with a qualified tax professional, CPA, financial planner, or investment manager.|此信息不得用于规避《美国国内税收法典》或适用州及地方税法可能施加的处罚。如需具体建议，嘉信建议咨询具备资质的税务专业人士、注册会计师、理财规划师或投资经理。
`.trim().split('\n').map(line => line.trim().split('|')));
