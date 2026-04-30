import { createI18n } from 'vue-i18n';
import en from './en.js';
import zhTW from './zhTW.js'; // 匯入繁體中文語言檔

const i18n = createI18n({
    legacy: false,
    locale: 'zh-TW', // 設定預設顯示語言為繁體中文
    fallbackLocale: 'zh-TW', // 設定當找不到對應語言時的後備語言
    messages: {
        en,
        'zh-TW': zhTW // 繁體中文
    },
});

export default i18n;
