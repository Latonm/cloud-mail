import { createI18n } from 'vue-i18n';
import en from './en.js';
import zh from './zh.js';
import zhTW from './zhTW.js'; 

// 1. 自動偵測使用者的瀏覽器語言
const getBrowserLang = () => {
    // 取得瀏覽器語言 (例如 'zh-TW', 'zh-CN', 'en-US')
    let lang = navigator.language || navigator.userLanguage;
    
    // 如果是台灣或香港，優先使用繁體中文
    if (lang === 'zh-TW' || lang === 'zh-HK') return 'zh-TW';
    // 其他中文環境使用簡體中文
    if (lang.toLowerCase().includes('zh')) return 'zh';
    
    return 'zh-TW'; // 預設回退語言
};

// 2. 嘗試讀取瀏覽器是否已經有記憶的語言偏好
// (您的系統可能有存成 'lang' 或 'language' 等 Key)
const savedLang = localStorage.getItem('lang') || localStorage.getItem('language');

const i18n = createI18n({
    legacy: false,
    // 3. 設定優先順序：瀏覽器舊記憶 > 自動偵測 > 強制預設 'zh-TW'
    locale: savedLang || getBrowserLang() || 'zh-TW', 
    fallbackLocale: 'zh-TW',
    messages: {
        zh,            // 簡體中文
        en,            // 英文
        'zh-TW': zhTW  // 繁體中文
    },
});

export default i18n;
