<template>
    <div class="relative ml-2">
        <button @click="show = !show" type="button" aria-haspopup="listbox" aria-expanded="true"
                class="flex items-center focus:outline-none p-0 bg-none">
            <img :src="user.avatar || '/images/avatars/default.png'"
                 class="w-7 h-7 flex-none image-fit rounded object-cover"
                 alt="Profile image">
        </button>
        <transition name="fade">
            <div v-on-clickaway="hideDropdown" v-if="show" class="mt-2 absolute right-0 origin-top-right z-50">
                <div
                    class="w-52 text-sm text-left border border-gray-300 bg-white dark:bg-dpaper dark:border-zinc-800 rounded shadow-lg">
                    <div class="flex items-center p-3">
                        <img :src="user.avatar || '/images/avatars/default.png'"
                             class="w-7 h-7 flex-none image-fit rounded object-cover"
                             alt="Profile image">
                        <div class="ml-2">
                            <nuxt-link :to="'/authors/' + user.username"
                               class="font-semibold text-gray-900 dark:text-gray-300 leading-none">
                                {{ user.name ? user.name : '@' + user.username }}</nuxt-link>
                        </div>
                    </div>
                    <div class="bg-gray-300 dark:bg-zinc-800 h-[1px]"></div>
                    <div class="dark:border-zinc-800 border-gray-200 py-1">
                        <a href="#"
                           class="block text-gray-700 dark:text-gray-300 px-4 py-2 leading-tight hover:bg-gray-200 dark:hover:bg-gray-700">
                            Paylaşmalarım
                        </a>
                        <a href="#"
                           class="block text-gray-700 dark:text-gray-300 px-4 py-2 leading-tight hover:bg-gray-200 dark:hover:bg-gray-700">
                            Seçilmişlərım
                        </a>
                    </div>
                    <div class="bg-gray-300 dark:bg-zinc-800 h-[1px]"></div>
                    <div class="dark:border-zinc-800 border-gray-200 py-1">
                        <a :href="'/settings'"
                           class="block text-gray-700 dark:text-gray-300 px-4 py-2 leading-tight hover:bg-gray-200 dark:hover:bg-gray-700">Parametrlər</a>
                    </div>
                    <div class="bg-gray-300 dark:bg-zinc-800 h-[1px]"></div>
                    <div class="dark:border-zinc-800 border-gray-200 py-1">
                        <button @click="logout"
                                class="block w-full text-gray-700 dark:text-gray-300 px-4 py-2 text-left leading-tight hover:bg-gray-200 dark:hover:bg-gray-700">
                            Çıxmaq
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {mixin as clickaway} from 'vue-clickaway'

export default {
    mixins: [clickaway],
    data() {
        return {
            user: this.$auth.user,
            show: false,
        }
    },
    methods: {
        hideDropdown() {
            this.show = false
        },
        async logout() {
            await this.$axios.$post('/auth/logout')
                .then(() => {
                    this.$auth.logout();
                });
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
    opacity: 0;
}
</style>
