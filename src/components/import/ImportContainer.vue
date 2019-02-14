<template>
  <div class="import-container">
    <import-form/>
    <import-search/>
    <import-view/>
  </div>
</template>
<script>
import ImportForm from "./ImportForm.vue";
import ImportSearch from "./ImportSearch.vue";
import ImportView from "./ImportView.vue";
export default {
  name: "ImportContainer",
  components: {
    ImportForm,
    ImportSearch,
    ImportView
  }
};
</script>
<style lang="scss" scoped>
.import-container {
  display: grid;
  grid-template-areas:
    "form"
    "list";
  grid-template-rows: 15vh 15vh auto;
  grid-row-gap: 5vh;
}
</style>

