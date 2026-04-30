import i18next from 'i18next';
import en from './en.js';
import zhTW from './zhTW.js';
import app from '../hono/hono';

app.use('*', async (c, next) => {
	const headerLang = c.req.header('accept-language');
	// 將預設語言從 'zh' 改為 'zh-TW'
	const lang = headerLang ? headerLang.split(',')[0].split(';')[0] : 'zh-TW';
	
	i18next.init({
		lng: lang,
	});
	return await next()
})

const resources = {
	en: {
		translation: en
	},
	'zh-TW': {
		translation: zhTW,
	},
};

i18next.init({
	fallbackLng: 'zh-TW',
	resources,
});

export const t = (key, values) => i18next.t(key, values)

export default i18next;
