<template>
    <ul class="pagination">
        <li key="prev" :class="['prev', firstPageSelected() ? 'disabled' : '']">
            <button @click="prevPage()">
                <i class="iconify" data-icon="mdi-chevron-double-left"></i>
            </button>
        </li>
        <template v-for="page in pages">
            <li :key="page.index" v-if="page.breakView" :class="['pointer-events-none']">
                <button>...</button>
            </li>
            <li :key="page.index" v-else-if="page.disabled" :class="[page.selected ? 'active' : '', 'disabled']">
                <button>{{ page.content }}</button>
            </li>
            <li :key="page.index" v-else :class="[page.selected ? 'active' : '']" >
                <button @click="handlePageSelected(page.index + 1)">{{ page.content }}</button>
            </li>
        </template>
        <li key="next" :class="['next', lastPageSelected() ? 'disabled' : '']">
            <button @click="nextPage()">
                <i class="iconify" data-icon="mdi-chevron-double-right"></i>
            </button>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        value: {
            type: Number
        },
        pageCount: {
            type: Number,
            required: true
        },
        forcePage: {
            type: Number
        },
        pageRange: {
            type: Number,
            default: 4
        },
        marginPages: {
            type: Number,
            default: 1
        }
    },
    beforeUpdate() {
        if (this.forcePage === undefined) return
        if (this.forcePage !== this.selected) {
            this.selected = this.forcePage
        }
    },
    computed: {
        selected: {
            get: function() {
                return this.value || this.innerValue
            },
            set: function(newValue) {
                this.innerValue = newValue
            }
        },
        pages: function () {
            let items = {}
            if (this.pageCount <= this.pageRange) {
                for (let index = 0; index < this.pageCount; index++) {
                    items[index] = {
                        index: index,
                        content: index + 1,
                        selected: index === (this.selected - 1)
                    }
                }
            } else {
                const halfPageRange = Math.floor(this.pageRange / 2)
                let setPageItem = index => {
                    items[index] = {
                        index: index,
                        content: index + 1,
                        selected: index === (this.selected - 1)
                    }
                }
                let setBreakView = index => {
                    items[index] = {
                        disabled: true,
                        breakView: true
                    }
                }
                // 1st - loop thru low end of margin pages
                for (let i = 0; i < this.marginPages; i++) {
                    setPageItem(i);
                }
                // 2nd - loop thru selected range
                let selectedRangeLow = 0;
                if (this.selected - halfPageRange > 0) {
                    selectedRangeLow = this.selected - 1 - halfPageRange;
                }
                let selectedRangeHigh = selectedRangeLow + this.pageRange - 1;
                if (selectedRangeHigh >= this.pageCount) {
                    selectedRangeHigh = this.pageCount - 1;
                    selectedRangeLow = selectedRangeHigh - this.pageRange + 1;
                }
                for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= this.pageCount - 1; i++) {
                    setPageItem(i);
                }
                // Check if there is breakView in the left of selected range
                if (selectedRangeLow > this.marginPages) {
                    setBreakView(selectedRangeLow - 1)
                }
                // Check if there is breakView in the right of selected range
                if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
                    setBreakView(selectedRangeHigh + 1)
                }
                // 3rd - loop thru high end of margin pages
                for (let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--) {
                    setPageItem(i);
                }
            }
            return items
        }
    },
    data() {
        return {
            innerValue: 1,
        }
    },
    methods: {
        handlePageSelected(selected) {
            if (this.selected === selected) return
            this.innerValue = selected
            this.$emit('input', selected)
            this.$emit('change-page', selected)
        },
        prevPage() {
            if (this.selected <= 1) return
            this.handlePageSelected(this.selected - 1)
        },
        nextPage() {
            if (this.selected >= this.pageCount) return
            this.handlePageSelected(this.selected + 1)
        },
        firstPageSelected() {
            return this.selected === 1
        },
        lastPageSelected() {
            return (this.selected === this.pageCount) || (this.pageCount === 0)
        },
        selectFirstPage() {
            if (this.selected <= 1) return
            this.handlePageSelected(1)
        },
        selectLastPage() {
            if (this.selected >= this.pageCount) return
            this.handlePageSelected(this.pageCount)
        }
    }
}
</script>

<!--<template>-->
<!--    <nav class="relative z-0 inline-flex xs:mx-auto xs:flex xs:justify-center" role="navigation"-->
<!--         aria-label="pagination">-->
<!--        <a v-if="pagination.current_page >= 4"-->
<!--           class="-ml-px relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white dark:bg-transparent dark:border-gray-700 dark:text-gray-400-->
<!--        text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none-->
<!--        focus:border-blue_def-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out-->
<!--        duration-150 rounded-l-md cursor-pointer"-->
<!--           @click.prevent="changePage(1)">-->
<!--            <i class="iconify" data-icon="mdi-chevron-double-left"></i>-->
<!--        </a>-->
<!--        <a :class="isCurrentPage(page) ? 'text-cerulean-600 dark:text-cerulean-100 hover:text-cerulean-600' : 'text-gray-500 dark:text-gray-400 dark:hover:text-gray-400 hover:text-gray-700'"-->
<!--           @click.prevent="changePage(page)"-->
<!--           class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white dark:bg-transparent dark:border-gray-700 text-sm leading-5-->
<!--           font-medium focus:z-10 focus:outline-none focus:border-blue_def-300-->
<!--           focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 cursor-pointer"-->
<!--           v-for="page in pages">{{ page }}</a>-->
<!--        <a v-if="pagination.last_page - pagination.current_page >= 3"-->
<!--           class="-ml-px relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white dark:bg-transparent dark:border-gray-700 dark:text-gray-400-->
<!--        text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none-->
<!--        focus:border-blue_def-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out-->
<!--        duration-150 rounded-r-md cursor-pointer"-->
<!--           @click.prevent="changePage(pagination.last_page)">-->
<!--            <i class="iconify" data-icon="mdi-chevron-double-right"></i>-->
<!--        </a>-->
<!--    </nav>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--    props: ['pagination', 'offset'],-->
<!--    methods: {-->
<!--        isCurrentPage(page) {-->
<!--            return this.pagination.current_page === page;-->
<!--        },-->
<!--        changePage(page) {-->
<!--            if (page > this.pagination.last_page) {-->
<!--                page = this.pagination.last_page;-->
<!--            }-->
<!--            this.pagination.current_page = page;-->
<!--            this.$emit('paginate');-->
<!--            window.scrollTo(0, 0);-->
<!--        }-->
<!--    },-->
<!--    computed: {-->
<!--        pages() {-->
<!--            let pages = [];-->
<!--            let from = this.pagination.current_page - Math.floor(this.offset / 2);-->
<!--            if (from < 1) {-->
<!--                from = 1;-->
<!--            }-->
<!--            let to = from + this.offset - 1;-->
<!--            if (to > this.pagination.last_page) {-->
<!--                to = this.pagination.last_page;-->
<!--            }-->
<!--            while (from <= to) {-->
<!--                pages.push(from);-->
<!--                from++;-->
<!--            }-->
<!--            return pages;-->
<!--        }-->
<!--    }-->
<!--}-->
<!--</script>-->
