<template class="lg:container xl:container my-4 mx-4 sm:mx-0 xs:mx-0 lg:mx-auto xl:mx-auto xs:px-4">
    <div class="lg:container xl:container my-4 mx-4 sm:mx-0 xs:mx-0 lg:mx-auto xl:mx-auto xs:px-4">
        <div class="flex space-x-3 xs:space-x-0 xs:block">
            <div class="w-left xs:w-full">
                <articles></articles>
            </div>

            <div class="w-right xs:w-full">

            </div>

        </div>
    </div>
</template>

<script>
import articles from "components/articles/all"

export default {
    components: {
        articles
    },
    async asyncData({store}) {
        await store.dispatch('articles/getArticles')
    }
}
</script>
