<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        v-model="pizzaName"
      />
    </label>
    <div class="content__constructor" @dragenter="dragenter">
      <div class="pizza" :class="pizzaClasses">
        <div class="pizza__wrapper">
            <div
              v-for="(value, className) in ingObj" :key="className"
              class="pizza__filling"
              :class="checkClasses(value, className)"
            ></div>
        </div>
      </div>
    </div>
    <ItemCounter
      :calcPrice="calcPrice"
      :pizzaName="pizzaName"
      :ingObj="ingObj"
      :checkStatus="checkStatus"
      @pushToCart="pushToCart"
    />
  </div>
</template>

<script>
import ItemCounter from "@/common/components/ItemCounter";
export default {
  name: "BuilderPizza",
  components: {
    ItemCounter,
  },
  data() {
    return {
      pizzaName: "",
      checkDragEnter: false,
      checkStatus: true,
      // changedIng: this.ingObj
    };
  },
  props: {
    ingObj: {
      type: Object,
      required: true,
    },
    pizzaClasses: {
      type: String,
      required: true,
    },
    calcPrice: {
      type: Number,
      required: true,
    },
  },
  methods: {
    pushToCart(finalPrice) {
      this.$emit("pushToCart", finalPrice);
    },
    dragenter(event) {
      if (
        event.target.className == "content__constructor" ||
        document.querySelector(".content__constructor").contains(event.target)
      ) {
        this.checkDragEnter = true;
        this.$emit("dragenter", this.checkDragEnter);
      }
      this.checkDragEnter = false;
    },
    checkValues() {
      let checkArray = [];
      for (let key in this.ingObj) {
        checkArray.push(this.ingObj[key] == 0);
      }
      let emptyIngredients = checkArray.every((el) => el == true);
      this.checkStatus =
        Object.keys(this.ingObj).length == 0 ||
        emptyIngredients ||
        this.pizzaName == "";
    },
    checkClasses(value, nameIng) {
      let className = "";
      if (value !== 0) {
        className = `pizza__filling--${nameIng}`;
      }
      if (value >= 2) {
        className = `pizza__filling--${nameIng} pizza__filling--second`;
      }
      if (value >= 3) {
        className = `pizza__filling--${nameIng} pizza__filling--third`;
      }
      return className;
    },
  },
  watch: {
    pizzaName: function () {
      this.checkValues();
    },
    calcPrice: function () {
      this.checkValues();
    },
  },
};
</script>