<template>
  <card id="import-view" v-if="selected.name">
    <div class="map"></div>
    <div class="content">
      <div>
        <span class="name">{{selected.name}},</span>
        <span class="age">{{selected.age}}</span>
      </div>
      <div>
        <span class="team">{{selected.team}}</span>
      </div>
      <div>
        <span class="address">{{selected.address}}</span>
      </div>
      <div>
        <span class="created">{{selected.createdAt | dateFormat}}</span>
      </div>
    </div>
  </card>
</template>
<script>
import Card from "@/components/Card.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImportView",
  filters: {
    dateFormat(str) {
      let date = new Date(str);
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }
  },
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  components: {
    Card
  },
  computed: {
    ...mapGetters(["selected"])
  }
};
</script>
<style lang="scss" scoped>
#import-view {
  padding: 0px;
  display: grid;
  grid-template-rows: 65% auto;
  .content {
    padding: 3px;
    div {
      padding: 5px;
    }
  }
  .name {
    font-size: 34px;
    text-transform: capitalize;
    color: $accent;
  }
  .age {
    font-size: 30px;
    color: darken($base, 30%);
  }
  .team {
    font-size: 20px;
    text-transform: capitalize;
  }
  .address {
    font-size: 20px;
    color: $accent;
  }
  .created {
    color: darken($base, 30%);
  }
  .map {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-image: url("https://cdn-images-1.medium.com/max/1600/0*R8YnMoScMd_jiO93.png");
  }
}
</style>
