<template>
    <main :class="{'dark': isDark}">
        <div class="flex bg-wall font-sans flex-col min-h-screen overflow-x-hidden dark:bg-dwall">
            <Header/>
            <Nuxt/>
            <Footer/>
        </div>
    </main>
</template>

<script>
import Header from "components/include/Header"
import Footer from "components/include/Footer"
import {Icon} from '@iconify/vue2';

export default {
    components: {
        Header,
        Footer,
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

