import "babel-polyfill";

import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App";
import router from "./router";

import axios from "axios";

const { console } = window;

Vue.use(Vuetify);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    render: h => h(App),
    mounted() {
        console.log("MOUNTED");

        console.log("GETTING_DATA...");
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            console.log("DATA_COUNT", res.data.length);
        });
    },
});
