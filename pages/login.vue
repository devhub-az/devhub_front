<template>
    <form autocomplete="off" @submit.prevent="login" method="post" class="xs:max-w-xs w-96">
        <a href="/login/github"
           class="group btn-outline trans-none border-0 w-full pl-4 dark:text-black dark:hover:bg-zinc-700 hover:bg-zinc-300">
            <div class="flex mx-auto items-center space-x-2">
                    <span class="iconify text-base text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-100" data-icon="simple-icons:github"
                          data-inline="true"></span>
                <span class="dark:text-gray-300 trans-none font-semibold dark:group-hover:text-gray-100">
                    {{ $t("devhub.github") }}
                </span>
            </div>
        </a>
        <div class="my-4 items-center flex">
            <div class="mr-3 flex-grow border-t border-dividerDark" aria-hidden="true"></div>
            <div class="text-sm dark:text-gray-300">{{ $t('devhub.or') }}</div>
            <div class="ml-3 flex-grow border-t border-dividerDark" aria-hidden="true"></div>
        </div>
        <div class="dark:bg-red-700 border dark:border-divider rounded mb-2 py-2 dark:text-gray-300" v-if="error">
            {{ error_text }}
        </div>
        <div class="pb-2 space-y-4">
            <input aria-invalid="true" autocomplete="off" id="email" name="email"
                   placeholder="richard.hendricks@piedpiper.com"
                   type="text" inputmode="text"
                   class="input bg-white border-gray-200 text-black dark:text-white placeholder-gray-500 caret-white"
                   autocorrect="off" autocapitalize="none"
                   spellcheck="false"
                   v-model="email">
            <div class="relative">
                <input aria-invalid="true" autocomplete="current-password" id="password" name="password"
                       placeholder="••••••••"
                       :type="type" inputmode="password"
                       class="input bg-white border-gray-200 text-black dark:text-white placeholder-gray-500 caret-white"
                       autocapitalize="none"
                       spellcheck="false"
                       v-model="password">
                <div @click="typeChange()" :class="type === 'password' ? '' : 'hidden'">
                    <span class="iconify absolute text-gray-400 top-2.5 right-4 cursor-pointer"
                          data-icon="mdi:eye-off"></span>
                </div>
                <div :class="type !== 'password' ? '' : 'hidden'" @click="typeChange()">
                    <span class="iconify absolute text-gray-400 top-2.5 right-4 cursor-pointer"
                          data-icon="mdi:eye"></span>
                </div>
            </div>
            <div class="w-full">
                <div :class="!loading ? 'hidden' : ''"
                     class="border-cerulean-600 flex items-center content-center text-white rounded bg-cerulean-600 hover:opacity-90 h-9">
                    <i class="iconify mx-auto block animate-spin" data-icon="tabler:refresh"/>
                </div>
                <button v-if="!loading" type="submit"
                        class="btn text-white w-full mx-auto block">
                    {{ $t('devhub.login') }}
                </button>
            </div>
        </div>
        <div class="mt-4">
            <a class="block text-center w-max mx-auto text-cerulean-500 dark:font-semibold dark:text-cerulean-300 text-sm"
               href="/forgot-password">
                {{ $t('devhub.forgotPassword') }}
            </a>
            <div
                class="mt-4 bg-white border text-center dark:bg-transparent dark:text-gray-300 dark:border-dividerDark rounded py-4 text-sm">
                {{ $t('devhub.notRegistered') }}
                <nuxt-link :to="localePath('register')"
                   class="text-cerulean-500 dark:font-semibold dark:text-cerulean-300 text-sm">
                    {{ $t('devhub.register') }}
                </nuxt-link>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    layout: 'auth',
    head() {
        return {
            title: this.$t('auth.title'),
        }
    },
    data() {
        return {
            email: null,
            password: null,
            type: 'password',
            error: false,
            loading: false,
            error_text: ''
        }
    },
    methods: {
        typeChange() {
            switch (this.type) {
                case 'password':
                    this.type = 'text'
                    break
                case 'text':
                    this.type = 'password'
                    break
            }
        },
        login() {
            this.loading = true
            this.$auth.loginWith('local', {
                data: {
                    email: this.email,
                    password: this.password
                },
            }).then(() => {
                this.loading = false
                this.$router.push('/')
            })
                .catch(error => {
                    this.loading= false
                    this.error = true
                    this.error_text = error.response.data.message
                })
        },
    }
}
</script>
