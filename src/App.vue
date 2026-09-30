<template>
  <el-config-provider :locale="elementLocale">
    <router-view />
  </el-config-provider>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { computed, watch } from "vue";
import {useSettingStore} from "@/store/setting.js";
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import zhTw from 'element-plus/es/locale/lang/zh-tw';
import('@/icons/index.js')

const settingStore = useSettingStore()
const { locale } = useI18n()
const elementLocale = computed(() => settingStore.lang === 'zh-tw' ? zhTw : settingStore.lang === 'zh' ? zhCn : undefined)
locale.value = settingStore.lang
watch(() => settingStore.lang, () => locale.value = settingStore.lang)
</script>
