<template>
  <search-contacts
    id="searchField"
    v-model="query"
    :data="contacts.data"
    :serializer="x=>x.name"
    @hit="updateSelected"
    placeholder="Search"
  ></search-contacts>
</template>
<script>
import Card from "@/components/Card.vue";
import searchContacts from "vue-bootstrap-typeahead-mod";
import debounce from "lodash.debounce";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImportSearch",
  components: {
    Card,
    searchContacts
  },
  methods: {
    _updateIndex() {
      [...document.querySelectorAll(".list-group-item")].map((e, index) => {
        e.id = `result-${index++}`;
      });
    },
    ...mapActions(["fetchContacts"]),
    ...mapActions(["updateSelected"])
  },
  watch: {
    query(val) {
      this._updateIndex();
      let name = this.selected && this.selected.name;
      if (!val) {
        this.updateSelected({});
      }
      if (!val || val === name) {
        return;
      }
      let ctx = this;
      debounce(function() {
        ctx.fetchContacts({
          query: `${val.toLowerCase()}`,
          limit: 20
        });
      }, 500)();
    }
  },
  data() {
    return {
      selected: null,
      query: null,
      loading: false,
      model: null,
      items: []
    };
  },
  computed: {
    ...mapGetters(["contacts"])
  }
};
</script>
<style lang="scss">
#searchField {
  .form-control {
    border-radius: 5px;
    text-transform: capitalize;
    border-color: transparent;
    cursor: pointer;
    width: 100%;
    height: 15vh;
    font-size: 2rem;
    padding: 10px;
    outline: none;
    &::placeholder {
      color: $base;
      font-style: italic;
    }
  }
  .vbt-autcomplete-list {
    font-size: 2rem;
    background-color: $content;
    margin-top: 10px;
    border-radius: 5px;
    &:empty {
      display: none;
    }
    .vbst-item {
      text-decoration: none;
      display: block;
      padding: 15px;
      color: $accent;
      &:hover,
      &:focus {
        outline: none;
        background-color: $accent;
        color: $content;
      }
    }
  }
}
</style>

