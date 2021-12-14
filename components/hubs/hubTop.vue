<template>
    <div>
        <p class="font-medium text-base text-gray-700 mb-1 dark:text-gray-400">
            {{ $t('devhub.watchedHubs') }}
        </p>
        <div class="mb-5 rounded dark:bg-dpaper border dark:border-gray-700 py-3">
            <div class="flex flex-col rounded bg-white dark:bg-transparent text-black py-2 px-5 space-y-2"
                 v-for="hub in hubs">
                <!--                <nuxt-link :to="{{ '/hubs/' . $hub->slug }}">-->
                <div class="flex items-center space-x-2">
                    <img :src="'/images/hubs/' + hub.attributes.logo + '.png'" alt="Hub logo" width="48"
                         class="w-12 h-12 rounded">
                    <span class="inline-block font-semibold dark:text-gray-300 leading-5">
                         {{ hub.attributes.name }}
                    </span>
                </div>
                <div
                    class="flex ml-14 space-x-1 items-center text-xs dark:text-gray-300">
                    <span class="iconify" data-icon="tabler:users" data-inline="false"></span>
                    <p>{{ $t('devhub.followers') }}: {{ hub.attributes.hub_followers_count }}</p>
                </div>
                <!--                </nuxt-link>-->
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from "vuex";

export default {
    name: "hubTop",
    computed: {
        ...mapGetters('hubs', ['hubs']),
    },
    methods: {
        ...mapActions(["hubs/getTopHubs"]),
    },
}
</script>
