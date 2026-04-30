import { createI18n } from 'vue-i18n';
import en from './en.js';
import zh from './zh.js';
import zhTW from './zhTW.js'; // 1. 匯入繁體中文語言檔

const i18n = createI18n({
    legacy: false,
    locale: 'zh-TW', // 新增：設定預設顯示語言為繁體中文
    fallbackLocale: 'zh-TW', // 新增：設定當找不到對應語言時的後備語言
    messages: {
        zh,
        en,
        'zh-TW': zhTW // 2. 這裡的 Key 必須加上連字號，改成 'zh-TW'
    },
});

export default i18n;
