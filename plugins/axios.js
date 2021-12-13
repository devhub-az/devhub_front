export default function ({$axios, $auth, redirect}) {
    $axios.onError(error => {
        console.log(error);
        if (error.response.status === 401) {
            $auth.logout();

            redirect('/login')
        }
    })
}
