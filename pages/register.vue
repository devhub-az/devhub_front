<template>
    <form autocomplete="off" @submit.prevent="register" enctype="multipart/form-data" method="post"
          class="xs:max-w-xs w-96 text-left">
        <div class="pb-2">
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
            <div class="dark:bg-red-700 text-center border dark:border-divider rounded mb-2 py-2 dark:text-gray-300" v-if="error">
                {{ error_text }}
            </div>
            <div class="relative mb-2">
                <input aria-invalid="true" autocomplete="off" id="username" name="username"
                       placeholder="richard" title="İstifadəçi adı"
                       type="text" inputmode="text"
                       class="input"
                       autocapitalize="none"
                       spellcheck="false"
                       v-model="username">
                <span class="iconify absolute translate-y-1/2 text-gray-400 top-0 p-2 pr-4 cursor-pointer right-0"
                      data-icon="mdi:information-outline" data-inline="false"
                      title="İstifadəçi adı 3-15 simvoldan ibaret olmalidir"></span>
            </div>
            <div class="relative mb-2">
                <input aria-invalid="true" autocomplete="off" id="email" name="email"
                       placeholder="richard.hendricks@piedpiper.com"
                       type="text" inputmode="text" title="Elektron poçt"
                       class="input"
                       autocorrect="off" autocapitalize="none"
                       spellcheck="false"
                       v-model="email">
            </div>
            <div class="relative mb-2">
                <input aria-invalid="true" autocomplete="current-password" id="password" name="password"
                       placeholder="••••••••"
                       :type="type" inputmode="text"
                       class="input"
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
            <div class="relative mb-2">
                <input aria-invalid="true" autocomplete="current-password" id="password_confirmation"
                       name="password_confirmation"
                       placeholder="Şifrə təsdiqlə"
                       :type="typeConfirm" inputmode="text"
                       class="input"
                       aria-label="Şifrəni təsdiqlə" autocapitalize="none"
                       spellcheck="false"
                       v-model="password_confirmation">
                <i class="mdi absolute text-gray-400 top-2.5 right-4 cursor-pointer"
                   :class="typeConfirm === 'password' ? 'mdi-eye-off' : 'mdi-eye'"
                   @click="typeConfirmChange()"></i>
            </div>
        </div>
        <div class="w-full">
            <div :class="!loading ? 'hidden' : ''"
                 class="border-cerulean-600 flex items-center content-center text-white rounded bg-cerulean-600 hover:opacity-90 h-9">
                <i class="iconify mx-auto block animate-spin" data-icon="tabler:refresh"/>
            </div>
            <button v-if="!loading" type="submit"
                    class="btn text-white w-full mx-auto block">
                {{ $t('devhub.register') }}
            </button>
        </div>
        <div
            class="mt-4 bg-white border text-center dark:bg-transparent dark:text-gray-300 dark:border-dividerDark rounded py-4 text-sm">
            {{ $t('devhub.areRegistered') }}
            <nuxt-link :to="localePath('login')" class="text-cerulean-500 dark:font-semibold dark:text-cerulean-300 text-sm">{{ $t('devhub.login') }}</nuxt-link>
        </div>
    </form>
</template>

<script>
import axios from "axios"

export default {
    layout: 'auth',
    middleware: 'auth',
    auth: 'guest',
    head() {
        return {
            title: this.$t('auth.title'),
        }
    },
    data() {
        return {
            username: null,
            email: null,
            password: null,
            password_confirmation: null,
            type: 'password',
            typeConfirm: 'password',
            error: false,
            checking: false,
            loading: false,
            success: false,
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
        typeConfirmChange() {
            switch (this.typeConfirm) {
                case 'password':
                    this.typeConfirm = 'text'
                    break
                case 'text':
                    this.typeConfirm = 'password'
                    break
            }
        },
        async register() {
            this.loading = true
            try {
                await this.$axios.post('auth/register', {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })

                await this.$auth.loginWith('cookie', {
                    data: {
                        email: this.email,
                        password: this.password
                    },
                })

                await this.$router.push('/')
            } catch (error) {
                this.loading= false
                this.error = true
                this.error_text = error.response.data.message
            }
        },
    }
}
</script>
