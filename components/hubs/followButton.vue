<template>
    <div>
        <span @click="follow(id)" v-if="!follower_check && !loading"
              :class="'w-max xs:w-full btn ' + classes">
            <span class="text-sm mx-auto font-medium transition-none">{{ $t('devhub.follow') }}</span>
        </span>
        <span @click="follow(id)" v-if="follower_check && !loading"
              :class="'w-max xs:w-full btn-outline ' + classes">
            <span class="font-medium mx-auto transition-none">{{ $t('devhub.follower') }}</span>
        </span>
        <div :class="!loading ? 'hidden' : '' + classes"
             class="w-max xs:w-full btn-outline text-sm font-medium mx-auto text-gray-600 dark:text-gray-300 transition-none">
            <i class="iconify mx-auto block animate-spin" data-icon="tabler:refresh"/>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id', 'follower_check', 'index', 'classes'],
    data: function () {
        return {
            loading: false,
        }
    },
    methods: {
        async follow(id) {
            this.loading = true;
            await this.$store.dispatch('hubs/follow', id)
            this.loading = false;
        }
    }
}
</script>
