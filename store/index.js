export const actions = {
    nuxtServerInit({dispatch}) {
        if (this.$cookies.get('theme') === 'dark') {
            dispatch('theme/changeTheme', 'dark')
        }
    },
    async firstTime({commit}, firstTime) {
        console.log(this.state.firstTime)
        commit('mutate', {
            key: 'firstTime',
            value: firstTime
        })
        console.log(this.state.firstTime)
    }
}

export const mutations = {
    mutate(state, payload) {
        state[payload.key] = payload.value;
    }
}
