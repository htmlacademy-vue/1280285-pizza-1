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
          <div v-for="(countItems, className) in currentIng" :key="countItems.id">
            
            <div
              v-for="countItem of countItems"
              :key="countItem.id"
              class="pizza__filling"
              :class="checkClasses(countItem, className)"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <ItemCounter
      :checkStatus="checkStatus"
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
    };
  },
  props: {
    pizzaClasses: {
      type: String,
      required: true,
    },
  },
  computed: {
    currentIng() {
      return this.$store.state.Builder.currentPizza.ing;
    },
    currentIngPrice() {
      return this.$store.state.Builder.currentPizza.ingPrice;
    },
    getNamePizza() {
      return this.$store.getters.getNamePizza;
    }
  },
  methods: {
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
      for (let key in this.currentIng) {
        checkArray.push(this.currentIng[key] == 0);
      }
      let emptyIngredients = checkArray.every((el) => el == true);
      this.checkStatus =
        Object.keys(this.currentIng).length == 0 ||
        emptyIngredients ||
        this.pizzaName == "";
    },
    checkClasses(value, nameIng) {
      let className = "";
      if (value >= 1) {
        className = `pizza__filling--${nameIng}`;
      }
      if (value == 2) {
        className = `pizza__filling--${nameIng} pizza__filling--second`;
      }
      if (value == 3) {
        className = `pizza__filling--${nameIng} pizza__filling--third`;
      }
      return className;
    },
  },
  watch: {
    pizzaName: function () {
      this.checkValues();
      this.$store.commit("setCurrentName", this.pizzaName);
      
    },
    currentIngPrice: function () {
      this.checkValues();
    },
  },
  mounted() {
    this.pizzaName = this.getNamePizza
  }
};
</script>