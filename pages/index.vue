<template class="lg:container xl:container my-4 mx-4 sm:mx-0 xs:mx-0 lg:mx-auto xl:mx-auto xs:px-4">
    <div class="lg:container xl:container my-4 mx-4 sm:mx-0 xs:mx-0 lg:mx-auto xl:mx-auto xs:px-4" id="app">
        <div class="flex space-x-3 xs:space-x-0 xs:block">
            <ul v-for="user in users" :key="user.id">
                <li>{{ user }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from "vuex";

export default {
    computed: mapState(['users']),
    async fetch({store}) {
        if (store.state.users.length === 0)
            await store.dispatch('getUsers')
    },
    methods: {
        ...mapActions(["getUsers"])
    }
}
</script>
