<template>
    <div class="lg:container xl:container my-4 mx-4 sm:mx-0 xs:mx-0 lg:mx-auto xl:mx-auto xs:px-4">
        <div class="bg-white dark:bg-dpaper dark:border-gray-700 rounded border py-10">
            <div class="w-full mx-auto space-y-4 xs:w-full xs:px-4">
                <div class="font-medium text-center text-2xl">
                    <h1 v-if="error.statusCode === 404">404</h1>
                    <h1 v-else>{{ $t('error.dev_will_solve') }}</h1>
                </div>
                <nuxt-link class="btn h-7 flex w-max mx-auto xs:hidden" :to="localePath('/')">
                    {{ $t('devhub.back_to_home') }}
                </nuxt-link>
            </div>
        </div>
    </div>
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
