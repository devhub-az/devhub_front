import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import {Icon} from '@iconify/vue2';
import './assets/css/tailwind.css'

Vue.use(VueMeta)
Vue.component('icon',Icon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
