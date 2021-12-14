export const state = () => ({
    articles: [],
    pagination: {
        'current_page': 1,
    }
})


export const getters = {
    articles: (state) => {
        return state.articles
    },
    pagination: (state) => {
        return state.pagination
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
