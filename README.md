# 嘉信理财界面汉化

为嘉信理财客户网站（`client.schwab.com`）提供简体中文界面。这是一个非官方浏览器扩展。

覆盖账户概览、持仓、交易单、订单状态、交易记录和报表等常用页面。持仓页同时调整了一些中文表头和说明按钮的排版。网站更新后可能出现漏译。

## 安装

1. 从 [GitHub Releases](https://github.com/NaroZeol/schwab-zh-cn/releases) 下载 `schwab-zh-cn-v*.zip`，并解压。也可以从 **Code → Download ZIP** 下载源码。
2. 打开 Edge 的 `edge://extensions/`，开启**开发人员模式**。
3. 点击**加载解压缩的扩展**，选择包含 `manifest.json` 的文件夹。
4. 刷新已打开的嘉信页面。

更新时，把新版文件替换到已安装的目录，然后在扩展管理页点击**重新加载**，再刷新嘉信页面。

## 数据与权限

扩展仅在嘉信客户网站上运行，使用内置词典在本地修改显示文案、无障碍标签和样式。扩展不发送网络请求，不收集或上传账户数据，不提交交易。

## 开发与发布

使用 Node.js 24 运行 `node scripts/check-extension.mjs`。推送到 `main` 或提交 PR 后，GitHub Actions 会检查源码并构建安装包。

发布新版时，先更新 `manifest.json` 的版本和 `CHANGELOG.md`，提交并推送到 `main`，再创建并推送对应的版本标签（如 `v1.2.17`）。CI 会核对标签与清单版本，检查通过后生成 GitHub Release 和安装 ZIP。
