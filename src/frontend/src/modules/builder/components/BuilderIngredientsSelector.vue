<template>
  <div class="sheet__content ingredients">
    <div class="ingredients__sauce">
      <p>Основной соус:</p>

      <RadioButton
        v-for="list of list.sauces"
        :key="list.id"
        :checkedItem="list.id === currentSauceSelector"
        :className="'radio ingredients__input'"
        :classWrap="classWrap"
        :value="list.id == 1 ? 'tomato' : list.id === 2 ? 'creamy' : ''"
        :price="list.price"
        @getValueRadio="getValueRadio"
      >
        <span>{{ list.name }}</span>
      </RadioButton>
    </div>

    <div class="ingredients__filling">
      <p>Начинка:</p>
      <ul class="ingredients__list">
        <SelectorItem
          v-for="ingredient of ingArray"
          :ingredientId="ingredient.id"
          :key="ingredient.id"
          :name="ingredient.name"
          :price="ingredient.price"
          :className="ingredient.class"
          @changeIng="changeIng"
          :checkDragEnter="checkDragEnter"
          :checkDraggable="true"
        />
      </ul>
    </div>
  </div>
</template>


<script>
import RadioButton from "@/common/components/RadioButton";
import SelectorItem from "@/common/components/SelectorItem";

import { ingObj } from "@/common/helpers";
export default {
  name: "BuilderIngredients",
  components: {
    RadioButton,
    SelectorItem,
  },
  props: {
    list: {
      type: Object,
      required: true,
    },
    checkDragEnter: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      classWrap: "sauce",
      ingObj,
    };
  },
  computed: {
    ingArray() {
      return ingObj(this.list.ingredients);
    },
    getSauceSelector() {
      return this.$store.getters.getSauceSelector
    },
    currentSauceSelector() {
      let selector = this.getSauceSelector == 'tomato' ? 1 : this.getSauceSelector == 'creamy' ? 2 : 1
      return selector
    }

  },
  methods: {
    getValueRadio(price, multiplier, value) {
      this.$store.commit("setCurrentSaucePrice", price)
      this.$store.commit("setSauceSelector", value);
      this.$emit("getValueRadio");
      // console.log(value)
    },
    changeIng(object) {
      // console.log(object)
      this.$emit("changeIng", { ...object });
    },
  },
};
</script>