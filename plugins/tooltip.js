import Vue from "vue"
import {VTooltip, VPopover, VClosePopover} from "v-tooltip"

Vue.directive("tooltip", VTooltip, {
    defaultHtml: false,
});
Vue.directive("close-popover", VClosePopover)
Vue.component("v-popover", VPopover)
