<template>
  <div :class="`${classWrap}__wrapper`">
    <label
      :class="className"
    >
      <input
        type="radio"
        ref="input"
        :value="value"
        :name="classWrap"
        class="visually-hidden"
        @change="getValueRadio"
        :checked="checkedItem"
      />
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    
    className: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false
    },
    price: {
      type: Number,
      required: false
    },
    multiplier: {
      type: Number,
      required: false
    },
    classWrap: {
      type: String,
      required: true
    },
    checkedItem: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    getValueRadio() {
      this.$emit("getValueRadio", this.price ? this.price : '', this.multiplier ? this.multiplier : '', this.value ? this.value : '');
    },
  },
  mounted() {
    let input = this.$refs.input;
    let check = "";
    if (input.checked) {
      check = input.value;
      this.$emit("getValueRadio", this.price ? this.price : '' , this.multiplier ? this.multiplier : '', check);
    }
  },
};
</script>
<style>
.dough__wrapper {
  display: flex;
  width: 50%;
}
.size__wrapper {
  display: flex;
  align-items: center;
}
.size__wrapper:nth-child(3n) .diameter__input {
  margin-right: 0;
}
.size__wrapper .diameter__input {
  margin-right: 25px;
}
.sauce__wrapper {
  display: flex;
  align-items: center;
}
</style>