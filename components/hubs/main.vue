<template>
    <div>
<!--        <div class="flex pb-1 justify-between items-center">-->
<!--            <div class="flex items-center space-x-1 font-medium">-->
<!--                <span class="iconify text-gray-700 dark:text-gray-400" data-icon="mdi:tag-multiple-outline"-->
<!--                      data-inline="false"></span>-->
<!--                <p class="transition-none text-gray-700 cursor-default dark:text-gray-400"-->
<!--                   title="Hablar müəyyən mövzularda nəşrlərin yerləşdirildiyi bölmələrdir.">{{ $t('devhub.hubs') }}</p>-->
<!--            </div>-->
<!--            <div-->
<!--                class="ml-auto px-2 w-max space-x-3 overflow-hidden flex items-center justify-between dark:border-gray-700 xs:w-max xs:space-x-4">-->
<!--                <div class="flex items-center cursor-pointer font-medium text-gray-700 dark:text-gray-400"-->
<!--                     v-for="column in columns"-->
<!--                     :key="column.type"-->
<!--                     @click="sortByColumn(column.type)">-->
<!--                    <p class="transition-none xs:text-base">{{ column.name }}</p>-->
<!--                    <div :class="order === 'desc' && column.type === sortedColumn ? 'block' : 'hidden'">-->
<!--                        <span class="iconify font-light dark:text-gray-300"-->
<!--                              data-icon="tabler:arrow-up"></span>-->
<!--                    </div>-->
<!--                    <div :class="order === 'asc' && column.type === sortedColumn ? 'block' : 'hidden'">-->
<!--                        <span class="iconify font-light dark:text-gray-300"-->
<!--                              data-icon="tabler:arrow-down"></span>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <div class="pb-2 relative">
            <input type="text" placeholder="Hab tapmaq" v-model="search"
                   class="input rounded-none"
                   @keyup.enter="$store.dispatch('hubs/searchHub',search)">
            <span class="iconify absolute right-0 top-1 cursor-pointer dark:text-gray-400 mx-4 my-1"
                  data-icon="tabler:search" @click="$store.dispatch('hubs/searchHub',search)"></span>
        </div>
        <div v-for="(hub,index) in hubs" :key="index"
             class="flex justify-between border mb-2 p-2 bg-white dark:bg-dpaper dark:border-divider xs:block xs:space-x-0 xs:space-y-2">
            <div class="flex space-x-3">
                <img v-if="hub.logo" class="w-16 h-16 rounded p-1 dark:bg-dwall"
                     :src="'/images/hubs/' + hub.logo + '.png'"
                     alt="Hub logo">
                <nuxt-link :to="'/hubs/' + hub.slug" class="w-10/12">
                    <div class="h-16 overflow-y-hidden mb-2">
                        <div class="space-x-4 font-semibold dark:text-gray-300 text-sm">
                            {{ hub.name }}
                        </div>
                        <p class="text-sm w-full font-light pb-2 dark:text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus beatae cumque dolorum
                            ea esse exercitationem fuga labore minus molestiae, nam nesciunt quae quasi quos recusandae
                            repudiandae tempore totam, voluptatem.
                        </p>
                    </div>
                    <div class="flex items-center text-xs">
                        <div class="flex items-center">
                            <span class="iconify text-cerulean-500 dark:text-cerulean-100"
                                  data-icon="tabler:users"
                                  data-inline="false"></span>
                            <p class="ml-1 text-sm dark:text-gray-300">
                                <span class="xs:hidden">{{ $t('devhub.followers') }}</span>
                                {{ hub.hub_followers_count }}
                            </p>
                        </div>
                        <div class="flex items-center mx-2">
                            <span class="iconify text-green-600 dark:text-green-500" data-icon="tabler:trending-up"
                                  data-inline="false"></span>
                            <p class="ml-1 text-sm"
                               :class="hub.rating > 0 ? 'text-green-600 dark:text-green-500' : 'dark:text-gray-300'">
                                <span class="xs:hidden">{{ $t('devhub.rating') }}</span>
                                {{ hub.rating }}
                            </p>
                        </div>
                        <div class="flex items-center">
                            <i class="iconify dark:text-gray-300" data-icon="tabler:mist"></i>
                            <p class="ml-1 text-sm dark:text-gray-300">
                                <span class="xs:hidden">{{ $t('devhub.articles') }}</span>
                                {{ hub.articles_count }}
                            </p>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <hubs-follow-button :id="hub.id" :index="index" :follower_check="hub.follower_check"
                                v-on:follow-status-updated="hub.follower_check = $event"
                                class="xs:w-full w-max my-auto px-6 text-center"
                                :classes="'xs:h-auto py-[3px] xs:py-1'"/>
        </div>
        <pagination
            v-if="pagination && pagination.last_page > 1"
            :page-count="pagination.last_page"
            :value="pagination.current_page"
            @change-page="changePage"
        />
    </div>
</template>

<script>
import pagination from "../plugins/pagination";
import {mapGetters, mapActions} from "vuex";

export default {
    name: "index",
    components: {
        pagination,
    },
    data: function () {
        return {
            error: false,
            loading: false,
            search: ''
        }
    },
    computed: {
        ...mapGetters('hubs', ['hubs', 'pagination']),
    },
    methods: {
        ...mapActions(['hubs/getHubs']),
        changePage(page) {
            this.$router.push({query: {...this.$route.query, page}}, () => {
                this.$emit('change-page', page);
            });
        },
    }
}
</script>

<style scoped>

</style>
