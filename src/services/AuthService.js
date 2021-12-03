import axios from 'axios'
import store from '@/store'

export const authClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    withCredentials: true, // required to handle the CSRF token
    timeout: 1000,
    headers: {Accept: 'application/json'}
})

/*
 * Add a response interceptor
 */
authClient.interceptors.response.use(
    (response) => {
        return response
    },
    function (error) {
        if (
            error.response &&
            [401, 419].includes(error.response.status) &&
            store.getters['auth/authUser'] &&
            !store.getters['auth/guest']
        ) {
            store.dispatch('auth/logout')
        }
        return Promise.reject(error)
    }
)

export default {
    async login(payload) {
        let data = authClient.post('api/auth/login', payload)
        localStorage.setItem('token', data.token)
        return data.user;
    },
    logout() {
        return authClient.post('/api/auth/logout')
    },
    async forgotPassword(payload) {
        await authClient.get('/sanctum/csrf-cookie')
        return authClient.post('/api/auth/forgot-password', payload)
    },
    getAuthUser() {
        return authClient.get('api/auth/me')
    },
    async resetPassword(payload) {
        await authClient.get('/sanctum/csrf-cookie')
        return authClient.post('/api/auth/reset-password', payload)
    },
    updatePassword(payload) {
        return authClient.put('/api/auth/user/password', payload)
    },
    async registerUser(payload) {
        const token = authClient.post('/api/auth/register', payload)
    },
    sendVerification(payload) {
        return authClient.post('/api/auth/email/verification-notification', payload)
    },
    updateUser(payload) {
        return authClient.put('/api/auth/user/profile-information', payload)
    },
}
