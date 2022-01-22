export const state = () => ({
    hubs: [],
    top_rated: [],
    top_followed: [],
    pagination: {
        'current_page': 1,
    },
    column: 'rating',
    order: 'desc',
    perPage: 40,
})


export const getters = {
    top_rated(state) {
        return state.top_rated
    },
    top_followed(state) {
        return state.top_followed
    },
    hubs(state) {
        return state.hubs
    },
    pagination: (state) => {
        return state.pagination
    }
}

export const actions = {
    async topRated({commit}) {
        const data = await this.$axios.$get('/hubs/top_rated')
        commit('ADD_TOP_RATED', data.data)
    },
    async topFollowed({commit}) {
        const data = await this.$axios.$get('/hubs/top_followed')
        commit('ADD_TOP_FOLLOWED', data.data)
    },
    async getHubs({state, commit}) {
        const {data} = await this.$axios.get(`/hubs?page=${state.pagination.current_page}&column=${state.column}&order=${state.order}&perPage=${state.perPage}`)
        commit('ADD_HUBS', data.data)
        commit('ADD_PAGINATION', data.meta)
    },
    async follow({store, commit, dispatch}, id) {
        if (this.$auth.user) {
            await this.$axios.$post('/hubs/follow/' + id)
                .then(() => {
                    commit('follow', id)
                    dispatch('topFollowed');
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            this.$toast.error(this.app.i18n.t('error.not_registered'))
        }
    },
    async searchHub({state, commit}, search) {
        const {data} = await this.$axios.get('/search_hub?q=' + search);
        commit('ADD_HUBS', data.data)
        commit('ADD_PAGINATION', data.meta)
    },
}

export const mutations = {
    ADD_TOP_RATED(state, top_rated) {
        state.top_rated = top_rated;
    },
    ADD_TOP_FOLLOWED(state, top_followed) {
        state.top_followed = top_followed;
    },
    ADD_HUBS(state, hubs) {
        state.hubs = hubs
    },
    ADD_PAGINATION(state, meta) {
        state.pagination = meta;
    },
    follow(state, id) {
        let index = state.hubs.findIndex(x => x.id === id)
        this._vm.$set(state.hubs[index].attributes, 'follower_check', !state.hubs[index].attributes.follower_check)
    }
}
