export default function ({$axios, $auth, redirect, app}) {
    $axios.onRequest(() => {
        $axios.setHeader('Accept-Language', app.i18n.locale)
    })
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status);
        if (code === 404 || code === 500) {
            app.$toast.error(error.response.data.message);
        } else if (code === 401) {
            app.$toast.error(app.i18n.t('error.not_registered'))
            $auth.logout();
            redirect('/login')
        } else if (![433].includes(code)) {
            app.$toast.error(error.response.data.message);
        }
    })
}
