
import i18next from 'i18next';
import zh from './zh.js';
import en from './en.js';
import zhTW from './zhTW.js'; // 1. 匯入繁體中文語言檔
import app from '../hono/hono';

app.use('*', async (c, next) => {
	// 2. 修正 Header 解析方式
	// 瀏覽器的 Accept-Language 通常長這樣："zh-TW,zh;q=0.9,en-US;q=0.8"
	// 這裡改為用逗號分隔取得第一個語言，並去除掉可能附帶的權重 (如 ;q=0.9)
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
	'zhTW': { // 3. 將繁體中文加入資源中
		translation: zhTW,
	},
};

i18next.init({
	fallbackLng: 'zhTW',
// ... existing code ...
