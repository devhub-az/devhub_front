export const state = () => ({
    users: []
})


export const getters = {}

export const actions = {
    nuxtServerInit({dispatch}) {
        if (this.$cookies.get('theme') === 'dark') {
            dispatch('theme/changeTheme', 'dark')
        }
    },
    async getUsers({commit}) {
        const { data } = await this.$axios.get('/articles')
        commit('addUsers', data)
    }
}

export const mutations = {
    addUsers(state, users) {
        state.users = users;
    },
}
