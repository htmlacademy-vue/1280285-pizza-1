<template>
  <div id="app">
    <AppLayout>
      <router-view></router-view>
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
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
