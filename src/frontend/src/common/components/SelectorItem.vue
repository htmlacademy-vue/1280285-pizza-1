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
        :disabled="count == minCount ? true : false"
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
        :disabled="count == maxCount ? true : false"
        @click="count++"
      >
        <span class="visually-hidden">Больше</span>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: "SelectorItem",
  props: ["name", "className", "ingredientId", "checkDragEnter"],
  data() {
    return {
      maxCount: 3,
      count: 0,
      minCount: 0,
    };
  },
  watch: {
    count: function (val, oldVal) {
      if (val > this.maxCount) this.count = this.maxCount;
      if (val !== oldVal) {
        this.$emit("changeIng",  { className: this.className, count: val });
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