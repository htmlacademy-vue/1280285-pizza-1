<template>
  <div class="app-layout-default">
    <AppLayoutHeader></AppLayoutHeader>
    <slot />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";

export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
  },
};
</script>