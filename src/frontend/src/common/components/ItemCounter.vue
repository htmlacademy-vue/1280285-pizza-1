<template>
  <div class="content__result">
    <p>Итого: {{ calcPrice }} ₽</p>
    <button type="button" class="button" :disabled="checkStatus" @click="pushToCart">
      Готовьте!
    </button>
  </div>
  
</template>
<script>
export default {
  name: "ItemCounter",
  props: ["calcPrice", "pizzaName", "ingObj", "checkStatus"],
  methods: {
    pushToCart() {
      let finalPrice = this.calcPrice;
      this.$emit("pushToCart", finalPrice);
    }
  },
  
};
</script>