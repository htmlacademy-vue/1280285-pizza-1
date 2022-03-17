<template>
  <div id="app">
    <AppLayout :finalPriceHeader="finalPriceHeader">
      <router-view @pushToCart="pushToCart"></router-view>
    </AppLayout>
  </div>
</template>

<script>
/*eslint-disable */
import AppLayout from "@/layouts/AppLayout";

export default {
  name: "App",
  components: {
    AppLayout,
  },
  data() {
    return {
      finalPriceHeader: 0,
    };
  },
  methods: {
    pushToCart(finalPrice) {
      this.finalPriceHeader = finalPrice;
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
