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
          :ingObj="ingObj"
          :pizzaClasses="pizzaClasses"
          :calcPrice="calcPrice"
          @pushToCart="pushToCart"
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
      pizzaObj: {},
      sauce: "",
      dough: "",
      size: "",
      saucePrice: 0,
      doughPrice: 0,
      sizeMult: 0,
      ingPrice: 0,
      checkDragEnter: false
    };
  },
  computed: {
    pizzaClasses() {
      let classForPizza = "";
      if (this.sauce == "tomato" && this.dough == "large") {
        classForPizza = "pizza--foundation--big-tomato";
      }
      if (this.sauce == "tomato" && this.dough == "light") {
        classForPizza = "pizza--foundation--small-tomato";
      }
      if (this.sauce == "creamy" && this.dough == "large") {
        classForPizza = "pizza--foundation--big-creamy";
      }
      if (this.sauce == "creamy" && this.dough == "light") {
        classForPizza = "pizza--foundation--small-creamy";
      }

      return classForPizza;
    },
    calcPrice() {
      let fullPrice =
        (this.ingPrice + this.saucePrice + this.doughPrice) * this.sizeMult;
      return fullPrice;
    },
  },
  methods: {
    getValueRadio(value, price, multiplier) {
      console.log(price, multiplier);
      if (value == "light" || value == "large") {
        this.dough = value;
        this.doughPrice = price;
      } else if (value == "small" || value == "normal" || value == "big") {
        this.size = value;
        this.sizeMult = multiplier;
      } else if (value == "creamy" || value == "tomato") {
        this.sauce = value;
        this.saucePrice = price;
      }
    },
    changeIng(value, className, price) {
      //console.log(value, className, price)
      this.ingPrice = price;
      this.ingObj[className] = value;
      this.ingObj = { ...this.ingObj };
    },
    pushToCart(finalPrice) {
      this.$emit("pushToCart", finalPrice);
    },
    dragenter(check) {
      this.checkDragEnter = check
    },
    dragenterCheck(event){
      if(event.target.className !== "content__constructor" && !document.querySelector('.content__constructor').contains(event.target)){
        this.checkDragEnter = false;       
        //console.log('dragenter', this.checkDragEnter, event.target.className)
      }
    }
  },
};
</script>
