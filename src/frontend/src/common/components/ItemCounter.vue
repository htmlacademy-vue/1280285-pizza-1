<template>
  <div class="content__result">
    <p>Итого: {{ totalPrice }} ₽</p>
    <button
      type="button"
      class="button"
      :disabled="checkStatus"
      @click="pushToCart"
    >
      Готовьте!
    </button>
  </div>
</template>
<script>
export default {
  name: "ItemCounter",
  props: ["checkStatus"],
  computed: {
    currentDoughtPrice() {
      return this.$store.state.Builder.currentPizza.doughtPrice;
    },
    currentSaucePrice() {
      return this.$store.state.Builder.currentPizza.saucePrice;
    },
    currentIngPrice() {
      return this.$store.state.Builder.currentPizza.ingPrice;
    },
    currentPizza() {
      return this.$store.state.Builder.currentPizza;
    },
    currentMultiplierPizza() {
      return this.$store.state.Builder.currentPizza.multiplier;
    },
    totalPrice() {
      return (this.currentSaucePrice + this.currentIngPrice + this.currentDoughtPrice) * this.currentMultiplierPizza
    }
  },
  methods: {
    pushToCart() {
      let totalPrice = (this.currentSaucePrice + this.currentIngPrice + this.currentDoughtPrice) * this.currentMultiplierPizza
      this.$store.commit("setTotalPrice", totalPrice);
      this.$store.commit("pushToCart", this.currentPizza);
      
    },
  },
};
</script>