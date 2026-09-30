import {useUserStore} from "@/store/user.js";
import {useSettingStore} from "@/store/setting.js";
import {useAccountStore} from "@/store/account.js";
import {loginUserInfo} from "@/request/my.js";
import {permsToRouter} from "@/perm/perm.js";
import router from "@/router";
import {websiteConfig} from "@/request/setting.js";
import i18n from "@/i18n/index.js";

export async function init() {
    document.title = '\u200B'

    const settingStore = useSettingStore();
    const userStore = useUserStore();
    const accountStore = useAccountStore();

    const token = localStorage.getItem('token');
    const languageMigrationKey = 'cloud-mail-language-default-v1'
    if (!localStorage.getItem(languageMigrationKey)) {
        // Existing installs used Simplified Chinese as the implicit default.
        // Convert that old default once, while keeping future explicit choices intact.
        if (settingStore.lang === 'zh' || !settingStore.lang) {
            settingStore.lang = 'zh-tw'
        }
        localStorage.setItem(languageMigrationKey, '1')
    } else if (!settingStore.lang) {
        settingStore.lang = 'zh-tw'
    }

    i18n.global.locale.value = settingStore.lang
    document.documentElement.lang = settingStore.lang === 'zh-tw' ? 'zh-TW' : settingStore.lang === 'zh' ? 'zh-CN' : 'en'

    let setting = null;

    if (token) {
        const userPromise = loginUserInfo().catch(e => {
            console.error(e);
            return null;
        });

        const [s, user] = await Promise.all([websiteConfig(), userPromise]);
        setting = s;
        settingStore.settings = setting;
        settingStore.domainList = setting.domainList;
        document.title = setting.title;

        if (user) {
            accountStore.currentAccountId = user.account.accountId;
            accountStore.currentAccount = user.account;
            userStore.user = user;

            const routers = permsToRouter(user.permKeys);
            routers.forEach(routerData => {
                router.addRoute('layout', routerData);
            });
        }

    } else {
        setting = await websiteConfig();
        settingStore.settings = setting;
        settingStore.domainList = setting.domainList;
        document.title = setting.title;
    }
}
