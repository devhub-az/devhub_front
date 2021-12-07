<template>
    <header class="bg-white dark:bg-gray-800 sm:px-4 md:px-4 xs:px-4 trans-none" id="header">
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
                        <a href="/" class="flex items-center space-x-2">
                            <img src="@/assets/images/DevHub_Chrome_Full_Logo.svg" alt="DevHub Logo"
                                 class="h-8 xs:h-9 hidden dark:block">
                            <img src="@/assets/images/DevHub_Monochrome_Full_Logo.svg" alt="DevHub Logo"
                                 class="h-8 xs:h-9 dark:hidden">
                        </a>
                    </div>
                    <ul class="grid relative grid-flow-col font-medium text-sm space-x-3 md:hidden sm:hidden xs:hidden items-center justify-center"
                        id="menu">
                        <li v-for="(item, index) in items"
                            :key="index">
                            <router-link :to="{ name: item }"
                                         class="hover:border-b-2 trans-none hover:border-cerulean-100 pb-1 font-semibold dark:text-white text-gray-500 hover:text-black dark:text-gray-300"
                                         active-class="dark:text-white border-b-2 border-cerulean-100">
                                {{ item }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <!--    <header class="p-5 text-white bg-blue-400">-->
    <!--        <nav class="container flex items-center justify-between mx-auto">-->
    <!--            <div v-if="authUser" class="flex items-center space-x-5">-->
    <!--                <router-link to="/dashboard">-->
    <!--                    <icon class="w-6 h-6 text-white" icon="mdi-light:home"/>-->
    <!--                    <span class="sr-only">Dashboard</span>-->
    <!--                </router-link>-->
    <!--                <router-link to="/users" v-if="isAdmin">Users</router-link>-->
    <!--            </div>-->
    <!--            <router-link to="/" v-else>-->
    <!--                <icon class="w-6 h-6 text-white" icon="mdi-light:home"/>-->
    <!--            </router-link>-->
    <!--            <div class="inline-flex items-center space-x-5" v-if="authUser">-->
    <!--                <router-link to="/user">{{ authUser.name }}</router-link>-->
    <!--                <Logout />-->
    <!--            </div>-->
    <!--            <router-link-->
    <!--                v-else-->
    <!--                to="/login"-->
    <!--                class="inline-flex items-center space-x-2"-->
    <!--            >-->
    <!--                <span>Login</span>-->
    <!--                <icon class="w-8 h-8 text-white" icon="mdi-light:login"/>-->
    <!--            </router-link>-->
    <!--        </nav>-->
    <!--    </header>-->
</template>

<script>
import {mapGetters} from 'vuex'
import Logout from '@/components/Logout'

export default {
    name: 'Header',
    components: {
        Logout,
    },
    data: () => {
        return {
            items: ["articles", "hubs", "authors", "about"],
        };
    },
    computed: {
        ...mapGetters('auth', ['authUser', 'isAdmin']),
    },
}
</script>
