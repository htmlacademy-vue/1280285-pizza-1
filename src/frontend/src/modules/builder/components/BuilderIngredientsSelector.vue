<template>
  <div class="sheet__content ingredients">
    <div class="ingredients__sauce">
      <p>Основной соус:</p>
      <RadioButton
        v-for="list of list.sauces"
        :key="list.id"
        :checkedItem="list.id === 1"
        :className="'radio ingredients__input'"
        :classWrap="classWrap"
        :value="list.id === 1 ? 'tomato' : list.id === 2 ? 'creamy' : ''"
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
  // computed: {
  //   ingredientsArray() {
  //     let ingredient = this.list.ingredients;
  //     for (let i = 0; i < ingredient.length; i++) {
  //       let str = ingredient[i].image;
  //       let res = decodeURI(
  //         str.substring(str.lastIndexOf("/") + 1, str.length)
  //       );
  //       let resNew = res.substring(0, res.length - 4);
  //       ingredient[i]["class"] = resNew;
  //     }

  //     return ingredient;
  //   },
  // },
  computed: {
    ingArray() {
      return ingObj(this.list.ingredients);
    },
  },
  methods: {
    getValueRadio(price, multiplier, value) {
      this.$emit(
        "getValueRadio",
        price ? price : "",
        multiplier ? multiplier : "",
        value ? value : ""
      );
      // console.log(value)
    },
    changeIng(object) {
      console.log(object)
      this.$emit("changeIng", { ...object });
    },
  },
};
</script>