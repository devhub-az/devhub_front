<template>
    <header class="bg-white dark:bg-dheader sm:px-4 md:px-4 xs:px-4 trans-none" id="header">
        <div class="flex items-center justify-between h-12 lg:container mx-auto">
            <div class="flex items-center xs:space-x-0">
                <div id="mobile-menu__toggler" class="lg:hidden xl:hidden">
                    <button id="mobile-menu__open"
                            class="items-center pr-2 my-auto block h-full justify-center">
                        <i class="iconify text-2xl text-gray-600 dark:text-gray-300" data-icon="mdi-menu"></i>
                    </button>
                    <button id="mobile-menu__close"
                            class="hidden pr-2 items-center my-auto block h-full justify-center">
                        <i class="iconify text-2xl text-gray-600 dark:text-gray-300" data-icon="mdi-close"></i>
                    </button>
                </div>
                <div class="flex xs:w-max space-x-3 xs:space-x-0 xs:flex items-center">
                    <div id="logo" class="flex items-center justify-center">
                        <NuxtLink :to="localePath('/')">
                            <img src="~/assets/images/DevHub_Chrome_Full_Logo.svg" alt="DevHub Logo"
                                 class="h-8 xs:h-9 hidden dark:block">
                            <img src="~/assets/images/DevHub_Monochrome_Full_Logo.svg" alt="DevHub Logo"
                                 class="h-8 xs:h-9 dark:hidden">
                        </NuxtLink>
                    </div>
                    <ul class="grid relative grid-flow-col font-medium text-sm space-x-3 md:hidden sm:hidden xs:hidden items-center justify-center"
                        id="menu">
                        <li v-for="(item, index) in menu"
                            :key="index">
                            <NuxtLink :to="localePath(item)"
                                      class="hover:border-b-2 trans-none hover:border-cerulean-100 pb-1 font-semibold dark:text-white text-gray-500 hover:text-black dark:text-gray-300"
                                      active-class="dark:text-white border-b-2 border-cerulean-100">
                                {{ $t('devhub.' + item) }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <template v-if="$auth.user">
                <a href="" class="text-gray-700 hover:text-purple-700" @click.prevent="logout">
                    Log Out
                </a>
                <NuxtLink to="/profile" class="text-gray-700 ml-7 border border-gray-300 hover:border-purple-400 hover:text-purple-700 rounded px-4 py-2">
                    Profile
                </NuxtLink>
            </template>
            <template v-else>
                <NuxtLink :to="localePath('/login')"
                   class="lg:hidden xl:hidden md:hidden sm:block xs:block text-2xl text-gray-700 dark:text-gray-100">
                    <i class="iconify" data-icon="mdi-account-outline"></i>
                </NuxtLink>
                <div class="flex items-center space-x-2 xs:hidden sm:hidden">
                    <NuxtLink :to="localePath('/login')"
                              class="btn-outline trans-none text-xs px-4 h-7">
                        {{ $t('devhub.login') }}
                    </NuxtLink>
                    <NuxtLink :to="localePath('/register')"
                              class="btn trans-none text-xs px-4 h-7">
                        {{ $t('devhub.register') }}
                    </NuxtLink>
                </div>
            </template>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data: () => {
        return {
            menu: ["articles", "hubs", "authors", "about"],
        };
    },
    mounted() {
        console.log(this.$router)
    },
    methods: {
        logout() {
            this.$auth.logout();
        }
    },
    computed: {},
}
</script>
