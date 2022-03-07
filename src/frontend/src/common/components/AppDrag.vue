<template>
  <div :draggable="checkDraggable" @dragend="dragend">
    <slot></slot>
  </div>
</template>

<script>
import { COUNT } from "@/common/helpers";
export default {
  data() {
    return {
      count: COUNT,
    };
  },
  props: {
    checkDragEnter: {
      type: Boolean,
      required: true,
    },
    checkDraggable: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    dragend() {
      if (this.checkDragEnter) {
        this.count++;
        this.$emit("dragend", this.count);
      }
    },
  },
};
</script>