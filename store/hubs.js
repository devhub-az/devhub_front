export const state = () => ({
    hubs: [],
    top_hubs: [],
    pagination: {
        'current_page': 1,
    },
    column: 'rating',
    order: 'desc',
    perPage: 40,
})


export const getters = {
    top_hubs(state) {
        return state.top_hubs
    },
    hubs(state) {
        return state.hubs
    },
    pagination: (state) => {
        return state.pagination
    }
}

export const actions = {
    async getTopHubs({state, commit}) {
        if (state.hubs.length === 0) {
            const data = await this.$axios.$get('/hubs/top')
            commit('ADD_TOP_HUBS', data.data)
        }
    },
    async getHubs({state, commit}){
        const {data} = await this.$axios.get(`/hubs?page=${state.pagination.current_page}&column=${state.column}&order=${state.order}&perPage=${state.perPage}`)
        commit('ADD_HUBS', data.data)
        commit('ADD_PAGINATION', data.meta)
    }
}

export const mutations = {
    ADD_TOP_HUBS(state, top_hubs) {
        state.top_hubs = top_hubs;
    },
    ADD_HUBS(state, hubs){
        state.hubs = hubs
    },
    ADD_PAGINATION(state, meta) {
        state.pagination = meta;
    }
}
