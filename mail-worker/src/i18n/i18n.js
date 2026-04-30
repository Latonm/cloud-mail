import i18next from 'i18next';
import zh from './zh.js';
import en from './en.js';
import zhTW from './zhTW.js';
import app from '../hono/hono';

app.use('*', async (c, next) => {
	const headerLang = c.req.header('accept-language');
	const lang = headerLang ? headerLang.split(',')[0].split(';')[0] : 'zh';
	
	i18next.init({
		lng: lang,
	});
	return await next()
})

const resources = {
	en: {
		translation: en
	},
	zh: {
		translation: zh,
	},
	'zh-TW': { // 語言代碼的 Key 必須要有連字號，瀏覽器才認得
		translation: zhTW, // 這裡的值才是剛才匯入且沒有連字號的變數名稱
	},
};

i18next.init({
	fallbackLng: 'zh-TW', // 後備語言代碼也必須要有連字號
	resources,
});

export const t = (key, values) => i18next.t(key, values)

export default i18next;
