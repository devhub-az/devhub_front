import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueMeta from 'vue-meta';
import {Icon} from '@iconify/vue2';
import VueI18n from 'vue-i18n';
import './assets/css/tailwind.css';

Vue.use(VueMeta)
Vue.component('icon', Icon)
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'az',
    fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n: i18n,
    render: (h) => h(App),
}).$mount('#app')
