<template>
    <header class="bg-white dark:bg-primary sm:px-4 md:px-4 xs:px-4 trans-none" id="header">
        <div class="flex items-center justify-between h-12 lg:container mx-auto">
            <div class="flex items-center xs:space-x-0">
                <div class="flex xs:w-max space-x-3 xs:space-x-0 xs:flex items-center">
                    <div id="logo" class="flex items-center justify-center">
                        <NuxtLink :to="localePath('/')">
                            <img src="/images/DevHub_Chrome_Full_Logo.svg" alt="DevHub Logo"
                                 class="h-8 w-[120px] xs:h-9 hidden dark:block">
                            <img src="/images/DevHub_Monochrome_Full_Logo.svg" alt="DevHub Logo"
                                 class="h-8 w-[120px] xs:h-9 dark:hidden">
                        </NuxtLink>
                    </div>
                    <ul class="relative flex items-center font-medium text-sm space-x-3 md:hidden sm:hidden xs:hidden items-center justify-center"
                        v-if="!hide">
                        <li>
                            <NuxtLink exact :to="localePath('/')"
                                      class="text-sm hover:border-b-2 trans-none hover:border-cerulean-100 pb-1 font-semibold dark:text-white text-gray-500 hover:text-black dark:text-gray-300"
                                      active-class="dark:text-white border-b-2 border-cerulean-100">
                                {{ $t('devhub.articles') }}
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localePath('hubs')"
                                      class="text-sm hover:border-b-2 trans-none hover:border-cerulean-100 pb-1 font-semibold dark:text-white text-gray-500 hover:text-black dark:text-gray-300"
                                      active-class="dark:text-white border-b-2 border-cerulean-100">
                                {{ $t('devhub.hubs') }}
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localePath('authors')"
                                      class="text-sm hover:border-b-2 trans-none hover:border-cerulean-100 pb-1 font-semibold dark:text-white text-gray-500 hover:text-black dark:text-gray-300"
                                      active-class="dark:text-white border-b-2 border-cerulean-100">
                                {{ $t('devhub.authors') }}
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localePath('about')"
                                      class="text-sm hover:border-b-2 trans-none hover:border-cerulean-100 pb-1 font-semibold dark:text-white text-gray-500 hover:text-black dark:text-gray-300"
                                      active-class="dark:text-white border-b-2 border-cerulean-100">
                                {{ $t('devhub.about') }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex-1 absolute relative w-full items-center">
                <div class="w-full ml-auto">
                    <span @click="search" v-if="!hide"
                          class="absolute translate-x-1/2 -translate-y-1/2 right-0 top-0 ml-auto dark:text-gray-300 mr-2 cursor-pointer">
                        <i class="iconify" data-icon="tabler:search"></i>
                    </span>
                    <input type="text"
                           class="relative input w-full rounded h-7 border mx-2 text-sm"
                           autocomplete="off"
                           name="search"
                           maxlength="48"
                           ref="search"
                           minlength="3" :class="{hide: 'flex'}" :placeholder="$t('devhub.searchAll')"
                           required="required" v-if="hide" autofocus @keydown.esc="hide = false">
                    <span @click="search" :class="!hide ? 'hidden' : ''"
                          class="text-gray-100 cursor-pointer px-2 py-0.5 text-xs absolute right-0 top-1 rounded bg-gray-400 dark:text-gray-300 dark:bg-gray-600">
                        ESC
                    </span>
                </div>
            </div>
            <template v-if="$auth.loggedIn">
                <dropdown></dropdown>
            </template>
            <template v-else>
                <div class="flex items-center space-x-2 xs:hidden sm:hidden">
                    <NuxtLink exact no-prefetch :to="localePath('/login')"
                              class="group btn-outline trans-none border-0 w-full justify-center mx-auto px-4 ml-4 h-7 dark:text-black dark:hover:bg-zinc-700 hover:bg-zinc-300">
                        <span class="dark:text-gray-300 trans-none font-semibold dark:group-hover:text-gray-100">
                            {{ $t('devhub.login') }}
                        </span>
                    </NuxtLink>
                    <NuxtLink exact no-prefetch :to="localePath('/register')"
                              class="btn text-white trans-none w-full mx-auto justify-center text-xs px-4 h-7 ">
                            {{ $t('devhub.register') }}
                    </NuxtLink>
                </div>
            </template>
        </div>
    </header>
</template>

<script>
import Dropdown from "~/components/plugins/dropdown"

export default {
    name: 'Header',
    components: {
        Dropdown
    },
    data: () => {
        return {
            hide: false
        };
    },
    methods: {
        search() {
            this.hide = !this.hide
            if (this.hide)
                this.$nextTick(() => {
                    this.$refs.search.focus()
                })
        },
        logout() {
            this.$auth.logout();
        }
    },
}
</script>
