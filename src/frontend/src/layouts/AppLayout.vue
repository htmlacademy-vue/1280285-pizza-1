<template>
  <div class="app-layout">
    <!-- <AppLayoutHeader :finalPriceHeader="finalPriceHeader"/>
    <div class="content">
      <Index @pushToCart="pushToCart"/>
    </div> -->
    <AppLayoutHeader :finalPriceHeader="finalPriceHeader"></AppLayoutHeader>
    <slot />
  </div>
</template>


<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
//import Index from "@/views/Index";

export default {
  name: "AppLayout",
  // data() {
  //   return {
  //     finalPriceHeader: 0,
  //   };
  // },
  props: {
    finalPriceHeader: {
      type: Number,
      required: true,
    }
  },
  components: {
    AppLayoutHeader,
    // Index,
  },
  // methods: {
  //   pushToCart(finalPrice) {
  //     this.finalPriceHeader = finalPrice;
  //   },
  // },
  // computed: {
  //   layout() {
  //     const layout = this.$route.meta.layout;
  //     return () => import(`@/layouts/${layout}.vue`);
  //   },
  // },
};
</script>
