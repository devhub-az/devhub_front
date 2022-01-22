export const state = () => ({
    authors: [],
    pagination: {
        'current_page': 1,
    }
})


export const getters = {
    authors: (state) => {
        return state.authors
    },
    pagination: (state) => {
        return state.pagination
    }
}

export const actions = {
    async getArticles({commit}, payload) {
        const {data} = await this.$axios.get('/authors' + payload.page || '/')
        commit('ADD_USERS', data.data)
        commit('ADD_PAGINATION', data.meta)
    }
}

export const mutations = {
    ADD_USERS(state, authors) {
        state.authors = authors;
    },

    ADD_PAGINATION(state, meta) {
        state.pagination = meta;
    }
}
