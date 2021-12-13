<template>
    <main :class="{'dark': isDark}">
        <div class="flex bg-wall dark:bg-dwall font-sans flex-col min-h-screen">
            <div class="xs:pt-20 text-center absolute top-1/2 left-1/2 -mr-1/2"
                 style="transform: translate(-50%, -50%)">
                <NuxtLink :to="localePath('/')"
                          class="text-black font-bold hover:text-gray-200 md:text-2xl m-auto">
                    <img src="/images/DevHub_Chrome_Full_Logo.svg" alt="DevHub Logo" width="188"
                         height="36"
                         class="mb-10 mx-auto hidden dark:block">
                    <img src="/images/DevHub_Monochrome_Full_Logo.svg" alt="DevHub Logo" width="188"
                         height="36"
                         class="mb-10 mx-auto dark:hidden">
                </NuxtLink>
                <Nuxt/>
            </div>
        </div>
    </main>
</template>

<script>
import {Icon} from '@iconify/vue2';

export default {
    components: {
        Icon
    },
    head() {
        return {
            title: this.$t('devhub.homePage'),
        }
    },
    computed: {
        isDark() {
            return this.$store.state['theme'].theme === 'dark';
        }
    }
}
</script>

