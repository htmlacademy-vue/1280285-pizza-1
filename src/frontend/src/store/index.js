/* eslint-disable */

import Vue from "vue";
import Vuex from "vuex";
import Builder from "@/store/modules/Builder"
import Cart from "@/store/modules/Cart"
import Auth from "@/store/modules/Auth"


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        namespaced: true,
        Builder,
        Cart,
        Auth
    }
});