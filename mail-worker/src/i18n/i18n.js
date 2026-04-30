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
	'zhTW': {
		translation: zhTW,
	},
};

i18next.init({
	fallbackLng: 'zhTW',
	resources,
});

export const t = (key, values) => i18next.t(key, values)

export default i18next;
