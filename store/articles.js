export const state = () => ({
    articles: [],
    pagination: {
        'current_page': 1,
    }
})


export const getters = {
    data(state) {
        return state.data
    }
}

export const actions = {
    async getArticles({commit}) {
        const {data} = await this.$axios.get('/articles')
        commit('ADD_ARTICLE', data.data)
        commit('ADD_PAGINATION', data.meta)
    }
}

export const mutations = {
    ADD_ARTICLE(state, articles) {
        state.articles = articles;
    },

    ADD_PAGINATION(state, meta) {
        state.pagination = meta;
    }
}
