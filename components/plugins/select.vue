<template>
    <div class="mt-1 relative">
        <button type="button" aria-haspopup="listbox" aria-expanded="true"
                @click="show = !show"
                class="relative w-full bg-white border dark:bg-input dark:border-gray-700 border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-100 transition-colors pl-3 pr-7 h-7 text-left focus:outline-none focus:ring-0 dark:focus:border-gray-700 sm:text-sm">
            <span class="flex items-center">
                <span :class="selected.name === availableLocales[0].name ? '' : 'hidden'">
                    <span class="iconify transition-none dark:text-gray-300"
                          :data-icon="availableLocales[0].icon" data-inline="false"></span>
                </span>
                <span :class="selected.name === availableLocales[1].name ? '' : 'hidden'">
                    <span class="iconify transition-none dark:text-gray-300"
                          :data-icon="availableLocales[1].icon" data-inline="false"></span>
                </span>
                <span :class="selected.name === availableLocales[2].name ? '' : 'hidden'">
                    <span class="iconify transition-none dark:text-gray-300"
                          :data-icon="availableLocales[2].icon" data-inline="false"></span>
                </span>
                <span class="ml-2 block truncate text-black dark:text-gray-300 text-sm">
                    {{ selected.name }}
                </span>
            </span>
            <span class="ml-1 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <span class="iconify transition-none dark:text-gray-300" data-icon="heroicons-outline:chevron-down"
                      data-inline="false"></span>
            </span>
        </button>
        <transition name="fade">
            <div v-on-clickaway="hideDropdown" v-if="show" :class="side === 'bottom' ? 'bottom-8' : 'top-6'"
                 class="absolute mt-2 min-w-min w-full right-0 rounded-md border bg-white dark:bg-input dark:border-gray-700 border-gray-300 shadow-lg z-20">
                <ul class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <li id="listbox-item-0" role="option"
                        class="text-gray-900 cursor-default select-none relative">
                        <NuxtLink :key="locale.code" :to="switchLocalePath(locale.code)"
                                   v-for="locale in availableLocales">
                            <div @click="hide(locale)"
                                 class="flex flex items-center cursor-pointer px-3 hover:bg-gray-300 group">
                                <span class="iconify transition-none"
                                      :class="locale.icon === 'bx:bxs-hot' ? 'text-cerulean-400' : 'dark:group-hover:text-black dark:text-gray-300'"
                                      :data-icon="locale.icon" data-inline="false"></span>
                                <span class="ml-1 block truncate dark:text-gray-300 dark:group-hover:text-black text-sm">
                                    {{ locale.name }}
                                </span>
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import {mixin as clickaway} from 'vue-clickaway'

export default {
    mixins: [clickaway],
    props: {
        side: {type: String, required: false},
    },
    data: function () {
        return {
            selected: this.$i18n.localeProperties,
            show: false,
        }
    },
    computed: {
        availableLocales() {
            return this.$i18n.locales
        }
    },
    methods: {
        hideDropdown() {
            this.show = false
        },
        hide(locale) {
            this.selected = locale
            this.show = false
        }
    }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
    opacity: 0;
}
</style>
