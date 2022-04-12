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
      return this.$store.getters.getCurrentPizza;
    },
    currentMultiplierPizza() {
      return this.$store.state.Builder.currentPizza.multiplier;
    },
    totalPrice() {
      return (this.currentSaucePrice + this.currentIngPrice + this.currentDoughtPrice) * this.currentMultiplierPizza
    },
    getCartOrders() {
      return this.$store.getters.getCartOrders;
    },
  },
  methods: {
    pushToCart() {
      let totalPrice = (this.currentSaucePrice + this.currentIngPrice + this.currentDoughtPrice) * this.currentMultiplierPizza
      this.$store.commit("setTotalPrice", totalPrice);
      let pizza = this.getCartOrders.find((el) => el.pizzaID == this.currentPizza.pizzaID) ? this.getCartOrders.find((el) => el.pizzaID == this.currentPizza.pizzaID) : null;
      if (pizza !== null && this.currentPizza.pizzaID == pizza.pizzaID){
        this.$store.commit("updateCartObj", this.currentPizza)
      } else {
        this.$store.commit("setPizzaId", Math.random())
        this.$store.commit("pushToCart", this.currentPizza);
      }
      
    },
  },
};
</script>