<template>
  <li class="ingredients__item">
    <AppDrag
      :count="count"
      :checkDragEnter="checkDragEnter"
      @dragend="dragend"
      :checkDraggable="checkDraggable"
    >
      <span class="filling" :class="`filling--${className}`">{{ name }}</span>
    </AppDrag>
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
  </li>
</template>

<script>
import { COUNT, MINCOUNT, MAXCOUNT } from "@/common/helpers";
import AppDrag from "@/common/components/AppDrag";
export default {
  name: "SelectorItem",
  components: {
    AppDrag,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    checkDragEnter: {
      type: Boolean,
      required: true,
    },
    checkDraggable: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      minCount: MINCOUNT,
      maxCount: MAXCOUNT,
      count: COUNT,
    };
  },
  watch: {
    count: function (val, oldVal) {
      if (val > this.maxCount) this.count = this.maxCount;
      if (val != oldVal) {
        let objectIng = { className: this.className, count: val };
        this.changeIng(objectIng);
        // console.log(this.changedIng, "+")
      }
    },
  },
  methods: {
    changeIng(object) {
      this.$emit("changeIng", { ...object });
    },
    dragend(count) {
      count > this.maxCount ? (count = this.count) : (this.count = count);
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