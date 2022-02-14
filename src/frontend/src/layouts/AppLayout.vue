<template>
  <div class="app-layout">
    <AppLayoutHeader />
    <div class="content">
      <Index />
    </div>
  </div>
</template>


<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import Index from "@/views/Index";

export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
    Index,
  },
};
</script>
