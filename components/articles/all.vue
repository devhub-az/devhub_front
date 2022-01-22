<template>
    <div>
        <div class="space-y-3" v-if="articles.length > 0">
            <div class="w-full rounded border bg-white dark:bg-transparent dark:border-gray-700"
                 v-for="article in articles">
                <div class="px-3.5">
                    <div class="flex items-center align-middle pt-3">
                        <a v-bind:href="'/@' + article.relationships.author.data.username"
                           class="inline-flex no-underline author-popover"
                           :data-id="article.relationships.author.data.id"
                           title="Paylaşmanın müəllifi">
                            <img
                                :src="article.relationships.author.data.avatar || '/images/avatars/default.png'"
                                height="32" width="32"
                                class="w-7 h-7 flex-none image-fit rounded object-cover"
                                alt="Profile image">
                            <p class="text-sm pl-2 m-auto dark:text-gray-300">
                                {{ '@' + article.relationships.author.data.username }}</p>
                        </a>
                        <p class="text-xs my-auto mr-auto pl-2 dark:text-gray-300" v-tooltip="'Oxumaq vaxtı'">
                            {{ article.attributes.created_at }}
                        </p>
                        <vote :item="article" class="vote"/>
                    </div>
                    <a :href="'/article/' + article.attributes.slug"
                       class="my-auto text-2xl xs:text-xl dark:text-gray-300">
                        {{ article.attributes.title }}
                    </a>
                    <!--                    <hubs-tags v-if="article.relationships.hubs.data.length" :data="article.relationships.hubs.data"-->
                    <!--                               :auth_check="auth_check"/>-->
                    <div class="prose prose-headings:dark:text-gray-300 my-2 xs:hidden md:hidden sm:hidden">
                        <div
                            v-for="block in edjsParser.parse(JSON.parse(article.attributes.body)).slice(0,2)"
                            v-html="block.length > 700 ? block.slice(0,600) + '...' : block" class="break-words"></div>
                    </div>
                </div>
                <div
                    class="grid lg:grid-cols-main rounded-b border-t dark:border-gray-700 py-3 px-3.5 mt-2">
                    <div class="flex xs:justify-between items-center md:justify-between sm:justify-between space-x-10">
                        <div class="flex items-center">
                            <span class="iconify text-gray-500 dark:text-gray-300" data-icon="tabler:eye"/>
                            <p class="ml-1 text-gray-500 dark:text-gray-300 text-sm">{{ article.attributes.views }}</p>
                        </div>
                        <a :href="'/article/' + article.attributes.slug + '#comments'" class="flex items-center">
                            <span class="iconify text-gray-500 dark:text-gray-300" data-icon="tabler:message"/>
                            <p class="ml-1 text-gray-500 dark:text-gray-300 text-sm">
                                {{ article.relationships.comments.data.length }}
                            </p>
                        </a>
                        <span class="iconify text-gray-500 dark:text-gray-300" data-icon="tabler:device-floppy"
                              data-inline="false"></span>
                        <!--                        <favorite :article="article" :auth_check="auth_check"/>-->
                        <div class=" flex items-center cursor-pointer" @click="copy(article.id)">
                            <span class="iconify text-gray-500 dark:text-gray-300" data-icon="tabler:share"
                                  data-inline="false"></span>
                        </div>
                    </div>
                    <div class="progress my-auto h-1 balloon xs:hidden md:hidden sm:hidden"
                         :aria-label="$t('devhub.votes') + ' ' + article.attributes.votes + ': ↑' + article.attributes.upvotes + ' ' + $t('devhub.and') + ' ↓' + article.attributes.downvotes"
                         data-balloon-pos="up">
                        <div class="my-auto bg-gray-300 dark:bg-gray-600 w-full rounded h-1 relative"
                             :class="{ 'default' : article.attributes.votes === 0}">
                            <div class="absolute h-1 bg-green-600 rounded-l"
                                 :style="'width:' + [article.attributes.votes !== 0 ? 100 * article.attributes.upvotes / article.attributes.votes : '0'] +'%'">
                            </div>
                            <div class="absolute h-1 bg-red-600 rounded-r right-0"
                                 :style="'width:' + [article.attributes.votes !== 0 ? 100 * article.attributes.downvotes / article.attributes.votes : '0'] +'%'">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="5"
                        @paginate="getPosts()"/>
        </div>
        <div v-else-if="articles.length === 0"
             class="bg-white dark:bg-dpaper rounded border dark:border-divider py-10">
            <div class="w-2/3 mx-auto space-y-4 xs:w-full xs:px-4">
                <div class="font-bold space-x-1 flex justify-center items-center text-center text-2xl pb-2">
                    <span class="iconify dark:text-gray-300" data-icon="tabler:square-x"
                          data-inline="false"></span>
                    <p class="dark:text-gray-300">{{ $t('devhub.articles404') }}</p>
                </div>
                <p class="font-light text-center dark:text-gray-400">
                    {{ $t('devhub.articles404Text') }}
                </p>
                <a href="/article/create" class="btn text-white block w-max mx-auto xs:hidden">
                    {{ $t('devhub.write') }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import pagination from "../plugins/pagination";
import {mapGetters} from "vuex";
import Vote from "components/plugins/vote";

const edjsHTML = require('editorjs-html');
const edjsParser = edjsHTML({code: codeParser, image: imageParser, embed: emdebParser});

function codeParser(block) {
    return `<code>` + block.data.code + `</code>`
}

function imageParser(block) {
    return `<img src="` + block.data.url + `" alt="` + block.data.caption + `">`
}

function emdebParser(block) {
    return '<iframe class="w-full h-80" src="' + block.data.embed + '"></iframe>';
}

export default {
    components: {
        Vote,
        pagination,
    },
    data() {
        return {
            edjsParser: edjsHTML(),
        }
    },
    computed: {
        ...mapGetters('articles', ['articles', 'pagination']),
    },
}
</script>
