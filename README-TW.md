<p align="center">
    <img src="doc/demo/logo.png" width="80px" />
    <h1 align="center">Cloud Mail</h1>
    <p align="center">一個簡單、響應式，專為在 Cloudflare Workers 上執行而設計的電子郵件服務 🎉</p> 
    <p align="center">
       <a href="/README.md" style="margin-left: 5px">簡體中文</a> | English 
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
        <a href="https://trendshift.io/repositories/14418" target="_blank" >
            <img src="https://trendshift.io/api/badge/repositories/14418" alt="trendshift" >
        </a>
    </p>
</p>

## 說明
只需要一個網域，就能建立多個不同的電子郵件地址，類似主流電子郵件平台。本專案可部署在 Cloudflare Workers 上，以降低伺服器成本並建立你自己的電子郵件服務。

## 專案展示

- [線上展示](https://skymail.ink)<br>
- [部署指南](https://doc.skymail.ink/en/)<br>


| ![](/doc/demo/demo1.png) | ![](/doc/demo/demo2.png) |
|--------------------------|--------------------------|
| ![](/doc/demo/demo3.png) | ![](/doc/demo/demo4.png) |

## 功能特色

- **💰 低成本使用**：無需伺服器——部署到 Cloudflare Workers 即可降低成本。

- **💻 響應式設計**：自動適配桌面瀏覽器與大多數行動裝置瀏覽器。

- **📧 郵件寄送**：整合 Resend，支援批次寄信與附件。

- **🛡️ 管理員功能**：提供使用者與郵件管理控制，並具備基於 RBAC 的存取控制。

- **📦 附件支援**：支援附件收發，並透過 R2 物件儲存進行儲存與下載。

- **🔔 郵件推送**：可將收到的郵件轉發至 Telegram 機器人或其他電子郵件服務商。

- **📡 開放 API**：支援透過 API 批次建立使用者，以及多條件郵件查詢。

- **📈 資料視覺化**：使用 ECharts 視覺化系統資料，包含使用者郵件成長等資訊。

- **🎨 個人化設定**：可自訂網站標題、登入背景與透明度。

- **🤖 CAPTCHA**：整合 Turnstile CAPTCHA，防止自動化註冊。

- **📜 更多功能**：開發中...

## 技術棧

- **平台**：[Cloudflare Workers](https://developers.cloudflare.com/workers/)

- **Web 框架**：[Hono](https://hono.dev/)

- **ORM**：[Drizzle](https://orm.drizzle.team/)

- **前端框架**：[Vue3](https://vuejs.org/)

- **UI 框架**：[Element Plus](https://element-plus.org/)

- **電子郵件服務**：[Resend](https://resend.com/)

- **快取**：[Cloudflare KV](https://developers.cloudflare.com/kv/)

- **資料庫**：[Cloudflare D1](https://developers.cloudflare.com/d1/)

- **檔案儲存**：[Cloudflare R2](https://developers.cloudflare.com/r2/)

## 專案結構

```
cloud-mail
├── mail-worker				    # 後端 worker 專案
│   ├── src                  
│   │   ├── api	 			    # API 層
│   │   ├── const  			    # 專案常數
│   │   ├── dao                 # 資料存取層
│   │   ├── email			    # 郵件處理
│   │   ├── entity			    # 資料庫實體
│   │   ├── error			    # 自訂例外與錯誤處理
│   │   ├── hono			    # Web 框架、中介軟體、錯誤處理
│   │   ├── i18n			    # 國際化 (i18n)
│   │   ├── init			    # 資料庫與快取初始化
│   │   ├── model			    # 回應資料模型
│   │   ├── security			# 認證與授權
│   │   ├── service			    # 業務邏輯層
│   │   ├── template			# 訊息模板
│   │   ├── utils			    # 實用工具函數
│   │   └── index.js			# 進入點 (Entry point)
│   ├── package.json			# 專案依賴
│   └── wrangler.toml			# 專案配置
│
├─ mail-vue				        # 前端 Vue 專案
│   ├── src
│   │   ├── axios 			    # Axios 配置
│   │   ├── components			# 自訂組件
│   │   ├── echarts			    # ECharts 整合
│   │   ├── i18n			    # 國際化 (i18n)
│   │   ├── init			    # 啟動初始化
│   │   ├── layout			    # 主版面佈局組件
│   │   ├── perm			    # 權限與存取控制
│   │   ├── request			    # API 請求層
│   │   ├── router			    # 路由配置
│   │   ├── store			    # 全域狀態管理
│   │   ├── utils			    # 實用工具函數
│   │   ├── views			    # 頁面組件
│   │   ├── app.vue			    # 根組件
│   │   ├── main.js			    # 入口 JS 檔案
│   │   └── style.css			# 全域樣式
│   ├── package.json			# 專案依賴
└── └── env.release				# 環境配置

```

## 支援

<a href="https://doc.skymail.ink/support.html">
<img width="170px" src="./doc/images/support.png" alt="">
</a>

## 授權

本專案採用 [MIT](LICENSE) 授權。

## 交流

[Telegram](https://t.me/cloud_mail_tg)