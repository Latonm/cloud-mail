<p align="center">
    <img src="doc/demo/logo.png" width="80px" />
    <h1 align="center">Cloud Mail</h1>
    <p align="center">以 Cloudflare 為基礎打造的簡約響應式電子郵件服務，支援寄送郵件及收發附件 🎉</p>
    <p align="center">
        繁體中文 | <a href="/README-en.md" style="margin-left: 5px">English</a>
    </p>
    <p align="center">
        <a href="https://github.com/maillab/cloud-mail/tree/main?tab=MIT-1-ov-file" target="_blank" >
            <img src="https://img.shields.io/badge/license-MIT-green" />
        </a>
        <a href="https://github.com/maillab/cloud-mail/releases" target="_blank" >
            <img src="https://img.shields.io/github/v/release/maillab/cloud-mail" alt="releases" />
        </a>
        <a href="https://github.com/maillab/cloud-mail/issues" >
            <img src="https://img.shields.io/github/issues/maillab/cloud-mail" alt="issues" />
        </a>
        <a href="https://github.com/maillab/cloud-mail/stargazers" target="_blank">
            <img src="https://img.shields.io/github/stars/maillab/cloud-mail" alt="stargazers" />
        </a>
        <a href="https://github.com/maillab/cloud-mail/forks" target="_blank" >
            <img src="https://img.shields.io/github/forks/maillab/cloud-mail" alt="forks" />
        </a>
    </p>
    <p align="center">
        <a href="https://trendshift.io/repositories/20459" target="_blank" >
            <img src="https://trendshift.io/api/badge/repositories/20459" alt="trendshift" >
        </a>
    </p>
</p>


## 專案簡介

只需一個網域，就能建立多個不同的電子郵件信箱，使用方式與各大電子郵件服務相似。本專案支援部署至 Cloudflare Workers，可降低伺服器成本，讓您打造自己的郵件服務。

## 專案展示

- [線上示範](https://skymail.ink)<br>
- [部署文件](https://doc.skymail.ink)<br>

| ![](/doc/demo/demo1.png) | ![](/doc/demo/demo2.png) |
|-----------------------|-----------------------|
| ![](/doc/demo/demo3.png) | ![](/doc/demo/demo4.png) |




## 功能介紹

- **💰 低成本使用**：可部署至 Cloudflare Workers，降低伺服器成本

- **💻 響應式設計**：採用響應式版面，自動適應電腦及大多數手機瀏覽器

- **📧 郵件寄送**：整合 Resend 寄送郵件，支援群發、內嵌圖片及附件，也可查看寄送狀態

- **🛡️ 管理員功能**：可管理使用者與郵件，並透過 RBAC 權限控制功能及資源使用限制

- **📦 附件收發**：支援收發附件，並使用 R2 物件儲存保存及下載檔案

- **🔔 郵件推播**：收到郵件後，可轉寄至 Telegram 機器人或其他郵件服務

- **📡 開放 API**：支援透過 API 批次建立使用者，並依多種條件查詢郵件

- **🔢 驗證碼辨識**：使用 Workers AI 自動辨識郵件驗證碼

- **📈 資料視覺化**：使用 ECharts 呈現系統資料及使用者郵件成長趨勢

- **🎨 個人化設定**：可自訂網站標題、登入背景及透明度

- **🤖 人機驗證**：整合 Turnstile 人機驗證，防止機器人大量註冊

- **📜 更多功能**：持續開發中……



## 技術架構

- **平台**：[Cloudflare Workers](https://developers.cloudflare.com/workers/)

- **Web 框架**：[Hono](https://hono.dev/)

- **ORM**：[Drizzle](https://orm.drizzle.team/)

- **前端框架**：[Vue 3](https://vuejs.org/)

- **UI 框架**：[Element Plus](https://element-plus.org/)

- **郵件寄送**：[Resend](https://resend.com/)

- **快取**：[Cloudflare KV](https://developers.cloudflare.com/kv/)

- **資料庫**：[Cloudflare D1](https://developers.cloudflare.com/d1/)

- **檔案儲存**：[Cloudflare R2](https://developers.cloudflare.com/r2/)

## 目錄結構

```
cloud-mail
├── mail-worker                    # Worker 後端專案
│   ├── src
│   │   ├── api                    # API 介面層
│   │   ├── const                  # 專案常數
│   │   ├── dao                    # 資料存取層
│   │   ├── email                  # 郵件處理與接收
│   │   ├── entity                 # 資料庫實體
│   │   ├── error                  # 自訂錯誤
│   │   ├── hono                   # Web 框架設定、攔截器及全域錯誤處理
│   │   ├── i18n                   # 多語系
│   │   ├── init                   # 資料庫與快取初始化
│   │   ├── model                  # 回應資料封裝
│   │   ├── security               # 身分與權限驗證
│   │   ├── service                # 業務服務層
│   │   ├── template               # 郵件範本
│   │   ├── utils                  # 工具程式
│   │   └── index.js               # 進入點
│   ├── package.json               # 專案相依套件
│   └── wrangler.toml              # 專案設定
│
├── mail-vue                       # Vue 前端專案
│   ├── src
│   │   ├── axios                  # Axios 設定
│   │   ├── components             # 自訂元件
│   │   ├── echarts                # ECharts 元件匯入
│   │   ├── i18n                   # 多語系
│   │   ├── init                   # 初始化
│   │   ├── layout                 # 主要版面元件
│   │   ├── perm                   # 權限驗證
│   │   ├── request                # API 請求
│   │   ├── router                 # 路由設定
│   │   ├── store                  # 全域狀態管理
│   │   ├── utils                  # 工具程式
│   │   ├── views                  # 頁面元件
│   │   ├── app.vue                # 根元件
│   │   ├── main.js                # JavaScript 進入點
│   │   └── style.css              # 全域 CSS
│   ├── package.json               # 專案相依套件
│   └── env.release                # 專案設定
```

## 贊助

<a href="https://doc.skymail.ink/support.html" >
<img width="170px" src="./doc/images/support.png" alt="">
</a>

## 授權條款

本專案採用 [MIT](LICENSE) 授權條款。


## 交流社群

[Telegram](https://t.me/cloud_mail_tg)
