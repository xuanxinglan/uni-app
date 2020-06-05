import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from './langs/zh-CN'
import en from './langs/en'

Vue.use(VueI18n)

const messages = {
    en,
    zhCN
}

const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'zhCN',
	messages
})

export default i18n
