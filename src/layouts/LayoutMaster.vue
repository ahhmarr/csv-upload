<template>
  <div class="container">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "layoutMaster",
  components: {}
};
</script>
<style scoped lang="scss">
.container {
  justify-items: center;
  font-family: "proxima-nova-soft", sans-serif;
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: "content";
  grid-row-gap: 1vh;
  height: 95vh;
  padding-top: 2vh;
  width: 100vw;
}
</style>