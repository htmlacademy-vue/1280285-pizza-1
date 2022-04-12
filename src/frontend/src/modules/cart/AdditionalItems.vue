<template>
  <li class="additional-list__item sheet">
    <p class="additional-list__description">
      <img
        :src="require(`@/assets/img/${newPath}.svg`)"
        width="39"
        height="60"
        alt="Coca-Cola 0,5 литра"
      />
      <span>{{ name }}</span>
    </p>

    <div class="additional-list__wrapper">
      <div class="counter additional-list__counter">
        <button
          type="button"
          class="counter__button counter__button--minus"
          @click="count--"
          :disabled="count === minCount"
        >
          <span class="visually-hidden">Меньше</span>
        </button>
        <input
          type="text"
          name="counter"
          class="counter__input"
          v-model="count"
        />
        <button
          type="button"
          class="counter__button counter__button--plus counter__button--orange"
          :disabled="count === maxCount"
          @click="count++"
        >
          <span class="visually-hidden">Больше</span>
        </button>
      </div>
      <div class="additional-list__price">
        <b>× {{ price }} ₽</b>
      </div>
    </div>
  </li>
</template>

<script>
import { MINCOUNT, MAXCOUNT } from "@/common/helpers";
export default {
  name: "AdditiopnalItems",
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      minCount: MINCOUNT,
      maxCount: MAXCOUNT,
      count: 0,
    };
  },
  computed: {
    newPath() {
      let str = this.img;
      let res = decodeURI(str.substring(str.lastIndexOf("/") + 1, str.length));
      let resNew = res.substring(0, res.length - 4);
      return resNew;
    },
    
  },
  watch: {
    count: function (val, oldVal) {
      if (val > this.maxCount) this.count = this.maxCount;
      if (val != oldVal) {
        
        let additionalObj = {name: this.name, count: val}
        this.changeAdditionalItem(additionalObj)
        return additionalObj;
      }
    },
  },
  methods: {
    changeAdditionalItem(object) {
      
      this.$emit("changeAdditionalItem", {...object})
    },
  }
};
</script>