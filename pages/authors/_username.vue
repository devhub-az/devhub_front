<template>
    <div class="lg:container xl:container my-4 mx-4 sm:mx-0 xs:mx-0 lg:mx-auto xl:mx-auto xs:my-0">
        <div class="border relative dark:border-gray-700 xs:border-none xs:shadow-none mb-2 bg-white dark:bg-dpaper rounded">
            <div class="relative bg-cover bg-center relative overflow-hidden p-4">
                <div class="absolute blur-[184px] justify-center items-center flex w-full opacity-30 select-none">
                    <img :src="author.avatar || '/images/avatars/default.png'" height="48"
                         width="48" class="object-cover scale-[15] select-none -z-10">
                </div>
                <div class="flex justify-between items-center z-10">
                    <div class="flex items-start space-x-4">
                        <img :src="author.avatar || '/images/avatars/default.png'"
                             class="rounded xs:h-16 xs:w-16 w-16 h-16 object-cover"
                             alt="Profile image">
                        <div class="space-y-1">
                            <div class="flex items-end space-x-2">
                                <div v-if="author.name"
                                     class="text-2xl text-shadow dark:text-gray-300 xs:text-base flex items-center">
                                    {{ author.name }}
                                </div>
                                <div v-if="author.surname"
                                     class="text-2xl text-shadow dark:text-gray-300 xs:text-base flex items-center">
                                    {{ author.surname }}
                                </div>
                                <div
                                    class="text-cerulean-100 text-xl text-shadow dark:text-cerulean-100 xs:text-base flex items-center">
                                    {{ '@' + author.username }}
                                </div>
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim molestias
                                numquam.
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex space-x-2 xs:justify-between">
                            <span class="btn">Follow</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center space-x-2 mt-2" v-if="author.github || author.website || author.twitter">
                <div class="flex items-center space-x-2">
                    <a target="_blank" class="text-xl" title="Github"
                       :href="'https://github.com/' + author.github" v-if="author.github">
                        <span class="iconify dark:text-gray-400 dark:hover:text-gray-300"
                              data-icon="ant-design:github-filled"
                              data-inline="false"></span>
                    </a>
                </div>
                <div class="flex items-center space-x-2">
                    <a target="_blank" class="text-xl" title="Вебсайт"
                       :href="author.website" v-if="author.website">
                        <span class="iconify dark:text-gray-400 dark:hover:text-gray-300"
                              data-icon="akar-icons:link-chain"
                              data-inline="false"></span>
                    </a>
                </div>
                <div class="flex items-center space-x-2">
                    <a target="_blank" class="text-xl" title="Твиттер"
                       :href="'https://twitter.com/' + author.twitter" v-if="author.twitter">
                        <span class="iconify dark:text-gray-400 dark:hover:text-gray-300"
                              data-icon="akar-icons:twitter-fill"
                              data-inline="false"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            author: {}
        }
    },
    async fetch() {
        const {data} = await this.getAuthor()
        this.author = data
        // await this.$store.dispatch('articles/getHubArticles', {
        //     id: this.author.id,
        //     page: '/all'
        // })
    },
    methods: {
        async getAuthor() {
            return this.$axios.get('authors/' + this.$route.params.username);
        }
    }
};
</script>
