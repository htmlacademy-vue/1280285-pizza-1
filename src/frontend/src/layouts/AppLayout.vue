<template>
  <div class="app-layout">
    <component :is="layout" :finalPriceHeader="finalPriceHeader ? finalPriceHeader : 0">
      <slot />
    </component>
  </div>
</template>


<script>

export default {
  name: "AppLayout",
  props: {
    finalPriceHeader: {
      type: Number,
      required: true,
    },
  },
  computed: {
    layout() {
      const layout = this.$route.meta.layout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>
