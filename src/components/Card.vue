<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.card {
  box-shadow: 0px 0px 8px #ccc;
  background-color: $content;
  padding: 10px;
  border-radius: 6px;
}
</style>
<script>
export default {
  name: "Card"
};
</script>


