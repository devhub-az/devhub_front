// here is "import locale from "./locale";" in store.js file //
const CHANGE_LOCALE = "CHANGE_LOCALE";

export default {
    state: {
        locale: localStorage.getItem('locale') || 'en'
    },
    mutations: {
        [CHANGE_LOCALE](state, language) {
            state.locale = language;
        },
    },
    actions: {
        changeLocale({ commit }, language) {
            return new Promise((resolve, reject) => {
                localStorage.setItem('locale', language);
                commit(CHANGE_LOCALE);
                resolve('Success');
            });
        }
    },
    getters: {

    }
}
