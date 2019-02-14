import Vue from "vue";
import Vuex from "vuex";
import { getContacts } from "./service/contactService";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: {
      search: "",
      data: [],
      loading: false
    },
    selected: {}
  },
  mutations: {
    async updateContacts(state, resp) {
      if (resp.results) {
        resp.data = resp.results;
      }
      resp.loading = resp.loading ? resp.loading : false;
      state.contacts = { ...state.contacts, ...resp };
    },
    updateSelected(state, obj) {
      state.selected = obj || {};
    }
  },
  actions: {
    async fetchContacts(ctx, filter) {
      ctx.commit("updateContacts", {
        loading: true
      });
      let resp = await getContacts(filter);
      ctx.commit("updateContacts", resp);
    },
    updateSelected(ctx, data) {
      ctx.commit("updateSelected", data);
    }
  },
  getters: {
    contacts(state) {
      return state.contacts;
    },
    selected(state) {
      return state.selected;
    }
  }
});
