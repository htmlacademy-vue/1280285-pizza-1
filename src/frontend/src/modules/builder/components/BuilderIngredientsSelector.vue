<template>
  <div class="sheet__content ingredients">
    <div class="ingredients__sauce">
      <p>Основной соус:</p>

      <RadioButton
        v-for="sauce of sauceArray"
        :key="sauce.id"
        :className="className"
        :name="sauce.name"
        :checkFirst="sauce == sauceArray[0] ? true : false"
        :value="sauce.value"
        :price="sauce.price"
        @getValueRadio="getValueRadio"
      />
    </div>

    <div class="ingredients__filling">
      <p>Начинка:</p>
      <ul class="ingredients__list">
        <SelectorItem
          v-for="ingredient of ingredientsArray"
          :ingredientId="ingredient.id"
          :key="ingredient.id"
          :name="ingredient.name"
          :price="ingredient.price"
          :className="ingredient.class"
          @changeIng="changeIng"
          :checkDragEnter="checkDragEnter"
        />
      </ul>
    </div>
  </div>
</template>


<script>
import RadioButton from "@/common/components/RadioButton";
import SelectorItem from "@/common/components/SelectorItem";
export default {
  name: "BuilderIngredients",
  components: {
    RadioButton,
    SelectorItem,
  },
  props: ["list", "checkDragEnter"],
  data() {
    return {
      className: "sauce",
    };
  },
  computed: {
    sauceArray() {
      let sauce = this.list.sauces;
      for (let i = 0; i < sauce.length; i++) {
        if (sauce[i].name == "Томатный") {
          sauce[i]["value"] = "tomato";
        } else if (sauce[i].name == "Сливочный") {
          sauce[i]["value"] = "creamy";
        }
      }
      return sauce;
    },
    ingredientsArray() {
      let ingredient = this.list.ingredients;
      for (let i = 0; i < ingredient.length; i++) {
        let str = ingredient[i].image;
        let res = decodeURI(
          str.substring(str.lastIndexOf("/") + 1, str.length)
        );
        let resNew = res.substring(0, res.length - 4);
        ingredient[i]["class"] = resNew;
      }

      return ingredient;
    },
  },
  methods: {
    getValueRadio(value, price, multiplier) {
      this.$emit(
        "getValueRadio",
        value,
        price ? price : "",
        multiplier ? multiplier : ""
      );
      // console.log(value)
    },
    changeIng(value, className, price) {
      this.$emit("changeIng", value, className, price);
    },
  },
};
</script>