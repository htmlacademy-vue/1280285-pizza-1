<template>
  <div class="content__result">
    <p>Итого: {{ calcPrice }} ₽</p>
    <button type="button" class="button" :disabled="checkButton" @click="pushToCart">
      Готовьте!
    </button>
  </div>
</template>
<script>
export default {
  name: "ItemCounter",
  props: ["calcPrice", "pizzaName", "ingObj"],
  computed: {
    checkButton() {
      let checkArray = [];
      for (let key in this.ingObj) {
        checkArray.push(this.ingObj[key] == 0);
      }
      let emptyIngredients = checkArray.every(el => el == true);
      let fullInf = (Object.keys(this.ingObj).length == 0 || emptyIngredients) || this.pizzaName == "";
      return fullInf;
      
    },
  },
  methods: {
    pushToCart() {
      let finalPrice = this.calcPrice;
      this.$emit("pushToCart", finalPrice);
    }
  }
};
</script>