export const state = () => ({
    theme: '',
})

export const actions = {
    async changeTheme({commit}, theme) {
        this.$cookies.set('theme', theme);
        commit('mutate', {
            key: 'theme',
            value: theme
        })
    }
}

export const mutations = {
    mutate(state, payload) {
        state[payload.key] = payload.value;
    }
}
