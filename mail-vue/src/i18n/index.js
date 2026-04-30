import { createI18n } from 'vue-i18n';
import en from './en.js';
import zh from './zh.js';
import zhTW from './zhTW.js'; // 1. 匯入繁體中文語言檔 (變數名稱沒有連字號)

const i18n = createI18n({
    legacy: false,
    messages: {
        zh,
        en,
        'zh-TW': zhTW // 2. 這裡的 Key 必須加上連字號，改成 'zh-TW'
    },
});

export default i18n;
