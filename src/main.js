import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import VTooltip from 'v-tooltip'

import VueHighlightJS from 'vue-highlight.js';

import python from 'highlight.js/lib/languages/python';

import vue from 'vue-highlight.js/lib/languages/vue';

import 'highlight.js/styles/night-owl.css';


Vue.config.productionTip = false

Vue.use(VueHighlightJS, {
    languages: {
        python,
        vue
    }

})
Vue.use(VTooltip)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")
