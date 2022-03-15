<template>
  <div class="app-layout-default">
    <AppLayoutHeader :finalPriceHeader="finalPriceHeader"></AppLayoutHeader>
    <slot />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";

export default {
  name: "AppLayout",
  props: {
    finalPriceHeader: {
      type: Number,
      required: true,
    }
  },
  components: {
    AppLayoutHeader,
  },
};
</script>