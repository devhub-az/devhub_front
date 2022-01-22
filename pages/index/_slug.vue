<template>
    <div>
        <div class="flex pb-2 rounded sm:text-center xs:text-center" v-if="$route.path === '/' || $route.path === '/week' || $route.path === '/month' ">
            <nuxt-link exact to="/"
                       class="border xs:w-full px-3 rounded-l xs:rounded-l-none hover:border-cerulean-700 dark:hover:border-cerulean-200 dark:text-gray-300 dark:bg-gray-800 bg-afooter dark:border-gray-700"
                       rel="nofollow" title="Günün ən yaxşı paylaşmaları" active-class="border-cerulean-700 bg-cerulean-100 text-white dark:text-cerulean-200 dark:bg-cerulean-900 dark:border-cerulean-200">
                {{ $t('devhub.day') }}
            </nuxt-link>
            <nuxt-link to="/week"
                       class="border xs:w-full px-3 xs:rounded-l-none hover:border-cerulean-700 dark:hover:border-cerulean-200 dark:text-gray-300 dark:bg-gray-800 bg-afooter dark:border-gray-700"
                       rel="nofollow" title="Həftənin ən yaxşı paylaşmaları" active-class="border-cerulean-700 bg-cerulean-100 text-white dark:text-cerulean-200 dark:bg-cerulean-900 dark:border-cerulean-200">
                {{ $t('devhub.week') }}
            </nuxt-link>
            <nuxt-link to="/month"
                       class="border xs:w-full px-3 rounded-r xs:rounded-l-none hover:border-cerulean-700 dark:hover:border-cerulean-200 dark:text-gray-300 dark:bg-gray-800 bg-afooter dark:border-gray-700"
                       rel="nofollow" title="Ayın ən yaxşı paylaşmaları" active-class="border-cerulean-700 bg-cerulean-100 text-white dark:text-cerulean-200 dark:bg-cerulean-900 dark:border-cerulean-200">
                {{ $t('devhub.month') }}
            </nuxt-link>
        </div>
        <articles-all></articles-all>
    </div>
</template>

<script>
export default {
    async validate({route, store}) {
        if (route.path === '/') {
            await store.dispatch('articles/getArticles', {
                page: '/filter/day'
            })
            return true
        } else if (route.path === '/week'){
            await store.dispatch('articles/getArticles', {
                page: '/filter/week'
            })
            return true
        } else if (route.path === '/month'){
            await store.dispatch('articles/getArticles', {
                page: '/filter/month'
            })
            return true
        }
        return false
    }
}
</script>
