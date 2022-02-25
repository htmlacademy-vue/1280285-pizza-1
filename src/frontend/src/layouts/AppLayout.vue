<template>
  <div class="app-layout">
    <AppLayoutHeader :finalPriceHeader="finalPriceHeader"/>
    <div class="content">
      <Index @pushToCart="pushToCart"/>
    </div>
  </div>
</template>


<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import Index from "@/views/Index";

export default {
  name: "AppLayout",
  data() {
    return {
      finalPriceHeader: 0
    }
  },
  components: {
    AppLayoutHeader,
    Index,
  },
  methods: {
    pushToCart(finalPrice) {
      this.finalPriceHeader = finalPrice
    }
  }
};
</script>
