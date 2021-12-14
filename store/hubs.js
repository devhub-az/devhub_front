export const state = () => ({
    hubs: [],
})


export const getters = {
    hubs(state) {
        return state.hubs
    }
}

export const actions = {
    async getTopHubs({state, commit}) {
        if (state.hubs.length === 0) {
            const data = await this.$axios.$get('/hubs/top')
            commit('ADD_TOP_HUBS', data.data)
        }
    }
}

export const mutations = {
    ADD_TOP_HUBS(state, hubs) {
        state.hubs = hubs;
    }
}
