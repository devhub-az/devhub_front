export default function ({$axios, $auth, redirect, app}) {
    $axios.onRequest(() => {
        $axios.setHeader('Accept-Language', app.i18n.locale)
    })
    $axios.onError(error => {
        if (error.response.status === 401) {
            $auth.logout();
            redirect('/login')
        }
    })
}
