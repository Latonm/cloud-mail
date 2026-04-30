import { createI18n } from 'vue-i18n';
import en from './en.js';
import zh from './zh.js';
import zhTW from './zh-TW.js'; // 1. 匯入繁體中文語言檔

const i18n = createI18n({
    legacy: false,
    messages: {
        zh,
        en,
        'zhTW': zhTW // 2. 加入到 messages 資源物件中
    },
});

export default i18n;
