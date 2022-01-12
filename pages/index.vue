<template>
    <div class="lg:container xl:container my-4 mx-4 sm:mx-0 xs:mx-0 lg:mx-auto xl:mx-auto xs:px-4">
        <div class="flex space-x-3 xs:space-x-0 xs:block">
            <div class="w-left xs:w-full">
                <div v-if="!$auth.user"
                    class="p-5 mb-4 border dark:border-gray-700 rounded flex justify-between xs:block"
                    style="background: linear-gradient(270deg, #356599, #346497, #336192, #315c8c, #2e5885, #2c537f, #2b507a, #2a4f78);">
                    <div class="xs:mb-2">
                        <div class="text-2xl flex items-center space-x-1 mb-1">
                            <p class="text-white">
                                <span
                                    class="inline-block align-middle text-xs border rounded-3xl border-green-500 px-2 py-0.5 font-medium">
                                    {{ $t('devhub.beta') }}
                                </span>
                                {{ $t('devhub.welcome') }}
                            </p>
                        </div>
                        <p class="text-white">{{ $t('devhub.welcomeText') }}</p>
                    </div>
                    <nuxt-link :to="'register'"
                               class="btn shadow-lg text-white xs:block px-4 font-medium my-auto xs:py-2 xs:text-center xs:w-full xs:m-0">
                        {{ $t('devhub.register') }}
                    </nuxt-link>
                </div>
                <nuxt-child></nuxt-child>
            </div>

            <div class="w-right xs:w-full">
                <hubs-top-rated></hubs-top-rated>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async fetch({store, $cookies}) {
        await store.dispatch('hubs/topRated')
    },
}
</script>
