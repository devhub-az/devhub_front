<template>
    <main class="lg:container xl:container my-4 mx-4 sm:mx-0 xs:mx-0 lg:mx-auto xl:mx-auto xs:px-4">
        <div class="text-center flex flex-col justify-center items-center space-y-2 m-auto h-96">
            <h1 class="text-8xl font-medium dark:text-gray-300" v-if="error.statusCode === 404">404</h1>
            <h1 class="text-8xl font-medium dark:text-gray-300" v-else>500</h1>
            <h2 class="text-2xl font-medium dark:text-gray-300">Страница не найдена</h2>
            <p v-if="error.statusCode === 404" class="font-light dark:text-gray-400 w-2/3">Страница устарела, была удалена или не существовала вовсе</p>
            <p v-else class="font-light dark:text-gray-400 w-2/3">{{ $t('error.dev_will_solve') }}</p>
            <nuxt-link class="btn h-7 flex w-max mx-auto xs:hidden" :to="localePath('/')">-->
                {{ $t('devhub.back_to_home') }}
            </nuxt-link>
        </div>
    </main>
</template>

<script>
export default {
    layout: "default",
    props: ['error'],
    scrollToTop: true,
    head() {
        return {
            title: this.errorTitle
        }
    },
    computed: {
        notFound() {
            return this.error.statusCode === 404;
        },
        errorTitle() {
            if (this.notFound)
                return this.$t('error.page_not_found');
            return this.$t('error.server_error');
        }
    }
}
</script>
