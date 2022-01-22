<template>
    <main :class="{'dark': isDark}">
        <div class="flex bg-wall antialiased font-sans flex-col min-h-screen overflow-x-hidden dark:bg-primary dark:text-gray-400">
            <Header/>
            <Nuxt/>
            <Footer/>
        </div>
    </main>
</template>

<script>
import Header from "components/include/Header"
import Footer from "components/include/Footer"

export default {
    components: {
        Header,
        Footer
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

