export const actions = {
    nuxtServerInit({dispatch}) {
        if (this.$cookies.get('theme') === 'dark') {
            dispatch('theme/changeTheme', 'dark')
        }
    },
}
