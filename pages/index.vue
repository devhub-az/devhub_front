<template class="lg:container xl:container my-4 mx-4 sm:mx-0 xs:mx-0 lg:mx-auto xl:mx-auto xs:px-4">
    <div class="lg:container xl:container my-4 mx-4 sm:mx-0 xs:mx-0 lg:mx-auto xl:mx-auto xs:px-4" id="app">
        <div class="flex space-x-3 xs:space-x-0 xs:block">
            <articles></articles>
        </div>
    </div>
</template>

<script>
import articles from "~/components/articles/all";

export default {
    components: {
        articles
    }
}
</script>
