<template>
  <li class="ingredients__item">
    <span
      draggable="true"
      @dragend="checkDragEnter ? count++ : 0"
      class="filling"
      :class="`filling--${className}`"
      >{{ name }}</span
    >

    <div class="counter counter--orange ingredients__counter">
      <button
        type="button"
        class="counter__button counter__button--minus"
        @click="count--"
        :disabled="count === 0"
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
        class="counter__button counter__button--plus"
        :disabled="count === 3"
        @click="count++"
      >
        <span class="visually-hidden">Больше</span>
      </button>
    </div>
    {{COUNT}}
  </li>
</template>

<script>
import { COUNT, MINCOUNT, MAXCOUNT } from "@/common/helpers";

export default {
  name: "SelectorItem",
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: true
    },
    checkDragEnter: {
      type: Boolean,
      required: true
    },
  },
  data() {
    return {
      minCount: MINCOUNT,
      maxCount: MAXCOUNT,
      count: COUNT,
      changedIng: false,
    };
  },
  watch: {
    count: function (val, oldVal) {
      if (val > this.maxCount) this.count = this.maxCount;
      if (val != oldVal) {
        this.$emit("changeIng",  { className: this.className, count: val }, this.changedIng);
        // console.log(this.changedIng, "+")
      }
    },
  },
};
</script>

<style scoped>
.drag {
  position: absolute;
  z-index: 99999;
}
.ingredients__item {
  cursor: grab;
}
</style>