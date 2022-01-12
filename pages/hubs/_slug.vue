<template>
    <div>
        <div class="bg-white dark:bg-dpaper h-24 relative overflow-hidden">
            <div class="absolute blur-[32px] justify-center items-center flex w-full opacity-50 select-none">
                <img :src="'/images/hubs/' + hub.logo + '.png'" height="48"
                     width="48" class="object-contain scale-[50] select-none">
            </div>
        </div>
        <div
            class="lg:container xl:container relative mb-4 mx-4 sm:mx-0 xs:mx-0 lg:mx-auto xl:mx-auto xs:px-4 space-y-2">
            <header class="relative flex space-x-4 pt-2 w-full items-end">
                <img class="w-32 h-32 -mt-[55%] rounded p-2 bg-wall dark:bg-primary"
                     :src="'/images/hubs/' + hub.logo + '.png'"
                     alt="Hub logo">

                <div class="flex flex-col flex-1 space-y-1">
                    <div class="flex text-3xl font-bold">
                        <span class="xs:text-xl dark:text-gray-300">{{ hub.name }}</span>
                        <div class="ml-auto xs:hidden">
                            <hubs-follow-button></hubs-follow-button>
                        </div>
                    </div>
                    <div class="flex space-x-1 text-base items-center xs:space-x-0">
                        <span>A list of official channels with information on COVID-19.</span>
                    </div>
                </div>
            </header>
            <div class="flex items-center justify-between ml-2 pb-2">
                <div class="flex items-center">
                    <div class="flex space-x-1">
                        <span class="iconify w-auto h-auto text-cerulean-500 dark:text-cerulean-100"
                              data-icon="tabler:users"></span>
                        <span class="font-bold text-gray-600 opacity-70 dark:text-gray-400">
                            {{ hub.hub_followers_count }}
                        </span>
                    </div>
                    <span class="iconify text-gray-600 opacity-70 dark:text-gray-400" data-icon="ci:dot-02-s"></span>
                    <div class="flex space-x-1">
                        <span class="iconify w-auto h-auto text-green-600 dark:text-green-500"
                              data-icon="tabler:trending-up"></span>
                        <span class="font-bold text-gray-600 opacity-70 dark:text-gray-400">{{ hub.rating }}</span>
                    </div>
                </div>
                <hubs-follow-button class="hidden xs:block"></hubs-follow-button>
            </div>
            <articles-all class="pl-2"></articles-all>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            hub: {}
        }
    },
    async fetch() {
        const {data} = await this.getHub()
        this.hub = data
        await this.$store.dispatch('articles/getHubArticles', {
            id: this.hub.id,
            page: '/all'
        })
    },
    methods: {
        async getHub() {
            return this.$axios.get('/hubs/' + this.$route.params.slug);
        }
    }
};
</script>
