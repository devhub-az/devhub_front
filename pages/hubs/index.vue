<template class="lg:container xl:container my-4 mx-4 sm:mx-0 xs:mx-0 lg:mx-auto xl:mx-auto xs:px-4">
    <div class="lg:container xl:container my-4 mx-4 sm:mx-0 xs:mx-0 lg:mx-auto xl:mx-auto xs:px-4">
        <div class="flex space-x-3 xs:space-x-0 xs:block">
            <div class="w-left xs:w-full">
                <lazy-hubs-main></lazy-hubs-main>
            </div>

            <div class="w-right sticky top-2 xs:w-full">
                <hubs-top-rated></hubs-top-rated>
                <hubs-top-followed></hubs-top-followed>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async fetch({store}) {
        await store.dispatch('hubs/getHubs')
    },
    async mounted() {
        await this.$store.dispatch('hubs/topRated')
        await this.$store.dispatch('hubs/topFollowed')
    }
}
</script>
