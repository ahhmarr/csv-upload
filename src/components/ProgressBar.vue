<template>
  <div
    id="progress"
    :data-progress="progress"
    :style="`${progress<=0 || progress>=100?'visibility:hidden;opacity:0':'visibility:visible;opacity:1'}`"
  >
    <div id="progress-container">
      <div id="percentage">{{progress}} %</div>
      <div id="progress-loader" :style="`width:${progress}%;`"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#progress {
  visibility: visible;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: visibility 0.1s linear, opacity 0.9s linear;
  #progress-container {
    background-color: lighten($color: $accent, $amount: 85);
    border-radius: 15px;
    width: 100%;
  }
  #progress-loader {
    &::before {
      content: "\200B";
    }
    background-color: $accent;
    width: 70%;
    border-radius: 15px;
  }
  #percentage {
    position: absolute;
    left: 50%;
    color: $base;
  }
}
</style>
<script>
export default {
  name: "ProgressBar",
  props: ["progress"]
};
</script>


