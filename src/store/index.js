import Vue from 'vue'
import Vuex from 'vuex'

import * as auth from '@/store/modules/Auth'
import * as user from '@/store/modules/User'
import * as message from '@/store/modules/Message'
import * as lang from '@/store/modules/Lang'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,

    modules: {
        auth,
        user,
        message,
        lang,
    },
})
