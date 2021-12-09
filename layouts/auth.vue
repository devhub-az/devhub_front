<template>
    <main :class="{'dark': isDark}">
        <div class="flex bg-wall dark:bg-dwall font-sans flex-col min-h-screen">
            <div class="xs:pt-20 text-center absolute top-1/2 left-1/2 -mr-1/2"
                 style="transform: translate(-50%, -50%)">
                <NuxtLink :to="localePath('/')"
                          class="text-black font-bold hover:text-gray-200 md:text-2xl m-auto">
                    <img src="~/assets/images/DevHub_Chrome_Full_Logo.svg" alt="DevHub Logo" width="188"
                         height="36"
                         class="mb-10 mx-auto hidden dark:block">
                    <img src="~/assets/images/DevHub_Monochrome_Full_Logo.svg" alt="DevHub Logo" width="188"
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

console.log('oooooooooo.                         ooooo   ooooo              .o8      \n' +
    '`888\'   `Y8b                        `888\'   `888\'             "888      \n' +
    ' 888      888  .ooooo.  oooo    ooo  888     888  oooo  oooo   888oooo.     Using DevHub at work? Work for Devhub.\n' +
    ' 888      888 d88\' `88b  `88.  .8\'   888ooooo888  `888  `888   d88\' `88b     https://github.com/hose1021/DevHub\n' +
    ' 888      888 888ooo888   `88..8\'    888     888   888   888   888   888\n' +
    ' 888     d88\' 888    .o    `888\'     888     888   888   888   888   888            Made with ❤ by Hose\n' +
    'o888bood8P\'   `Y8bod8P\'     `8\'     o888o   o888o  `V88V"V8P\'  `Y8bod8P\'')
</script>

