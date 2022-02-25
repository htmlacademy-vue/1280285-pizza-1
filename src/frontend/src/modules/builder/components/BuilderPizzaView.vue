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
          <div v-for="(value, className) in ingObj" :key="className">
            <div
              v-if="value !== 0"
              class="pizza__filling"
              :class="`pizza__filling--${className}`"
            ></div>
            <div
              v-if="value >= 2"
              class="pizza__filling"
              :class="`pizza__filling--${className} pizza__filling--second`"
            ></div>
            <div
              v-if="value >= 3"
              class="pizza__filling"
              :class="`pizza__filling--${className} pizza__filling--third`"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <ItemCounter :calcPrice="calcPrice" :pizzaName="pizzaName" :ingObj="ingObj" @pushToCart="pushToCart"/>
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
    };
  },
  props: [
    "ingObj",
    "pizzaClasses",
    "calcPrice",
    "nameIng",
    "dropName",
    "dropVal",
    "dropPrice",
  ],
  methods: {
    pushToCart(finalPrice) {
      this.$emit("pushToCart", finalPrice);
    },
    dragenter(event) {
      if(event.target.className == "content__constructor" || document.querySelector('.content__constructor').contains(event.target)){
        this.checkDragEnter = true;
        this.$emit("dragenter", this.checkDragEnter);
       //console.log('dr', this.checkDragEnter)
      }
        this.checkDragEnter = false;
        
    },
    
  },
};
</script>