<template>
  <main class="content" @dragenter="dragenterCheck">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>
            <BuilderDough :list="Ingredients" @getValueRadio="getValueRadio" />
          </div>
        </div>

        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>
            <BuilderSize :list="Ingredients" @getValueRadio="getValueRadio" />
          </div>
        </div>

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>
            <BuilderIngredients
              :list="Ingredients"
              @getValueRadio="getValueRadio"
              @changeIng="changeIng"
              :checkDragEnter="checkDragEnter"
            />
          </div>
        </div>
        <BuilderPizza
          :pizzaClasses="pizzaClasses"
          :changedIng="changedIng"
          @dragenter="dragenter"
        />
      </div>
     
    </form>
  </main>
</template>

<script>
import Ingredients from "@/static/pizza.json";
import BuilderDough from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSize from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredients from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizza from "@/modules/builder/components/BuilderPizzaView";

export default {
  name: "Index",
  components: {
    BuilderDough,
    BuilderSize,
    BuilderIngredients,
    BuilderPizza,
  },
  data() {
    return {
      Ingredients,
      ingObj: {},
      cartObj: {},
      //sauce: "",
      // dough: "",
      // size: "",
      // saucePrice: 0,
      // doughPrice: 0,
      // sizeMult: 0,
      // ingPrice: 0,
      checkDragEnter: false,
      changedIng: false,
    };
  },
  computed: {
    currentDought() {
      return this.$store.state.Builder.currentPizza.dought;
    },
    currentSauce() {
      return this.$store.state.Builder.currentPizza.sauce;
    },
    currentSize() {
      return this.$store.state.Builder.currentPizza.multiplier;
    },
    pizzaClasses() {
      let classForPizza = "";
      if (this.currentSauce == "tomato" && this.currentDought == "large") {
        classForPizza = "pizza--foundation--big-tomato";
      }
      if (this.currentSauce == "tomato" && this.currentDought == "light") {
        classForPizza = "pizza--foundation--small-tomato";
      }
      if (this.currentSauce == "creamy" && this.currentDought == "large") {
        classForPizza = "pizza--foundation--big-creamy";
      }
      if (this.currentSauce == "creamy" && this.currentDought == "light") {
        classForPizza = "pizza--foundation--small-creamy";
      }

      return classForPizza;
    },
  },
  methods: {
    getValueRadio() {
      if (this.currentDought == "light" || this.currentDought == "large") {
        if (this.currentDought == "light") {
          this.$store.commit("setDoughtDesc", "на тонком тесте");
        } else if (this.currentDought == "large") {
          this.$store.commit("setDoughtDesc", 'на толстом тесте');
        }
      }
      if (this.currentSize == 1 || this.currentSize == 2 || this.currentSize == 3) {
        if (this.currentSize == 1) {
          this.$store.commit("setSizeDesc", "23 см")
        } else if (this.currentSize == 2) {
          this.$store.commit("setSizeDesc", "32 cм")
        } else if (this.currentSize == 3) {
          this.$store.commit("setSizeDesc", "45 см")
        }
      }
      if (this.currentSauce == "creamy" || this.currentSauce == "tomato") {
        if (this.currentSauce == "creamy") {
          this.$store.commit("setSauceDesc", "сливочный")
        } else if (this.currentSauce == "tomato") {
          this.$store.commit("setSauceDesc", "томатный")
        }
      }
    },
    changeIng(object, changedIng) {
      this.changedIng = changedIng;
      let price = 0;
      this.ingObj[object.className] = object.count;
      let ingNames = "";
      for (let i in this.ingObj) {
        const ingredientItem = Ingredients.ingredients.find(
          (item) => item.class == i
        );
        ingNames +=
          ingredientItem.name.charAt(0).toLowerCase() +
          ingredientItem.name.slice(1) +
          ", ";
        let ingredientPrice = ingredientItem.price * this.ingObj[i];
        price += ingredientPrice;
        this.$store.commit("setIngSelector", this.ingObj);
      }
      ingNames = ingNames.substring(0, ingNames.length - 2);
      this.$store.commit("setIngNames", ingNames);
      this.$store.commit("setCurrentPriceIng", price);
    },
    dragenter(check) {
      this.checkDragEnter = check;
    },
    dragenterCheck(event) {
      if (
        event.target.className !== "content__constructor" &&
        !document.querySelector(".content__constructor").contains(event.target)
      ) {
        this.checkDragEnter = false;
      }
    },
  },
};
</script>
