<template>
  <div :class="`${className}__wrapper`">
    <label
      v-if="className == 'dough'"
      :class="`${className}__input ${className}__input--${size}`"
    >
      <input
        ref="input"
        type="radio"
        name="dought"
        :value="size"
        class="visually-hidden"
        :checked="checkFirst"
        @change="getValueRadio"
      />
      <b>{{ name }}</b>
      <span>{{ desc }}</span>
    </label>
    <label
      v-else-if="className == 'diameter'"
      :class="`${className}__input ${className}__input--${size}`"
    >
      <input
        type="radio"
        ref="input"
        name="diameter"
        :value="size"
        :checked="checkFirst"
        class="visually-hidden"
        @change="getValueRadio"
      />
      <span>{{ name }}</span>
    </label>
    <label v-else-if="className == 'sauce'" class="radio ingredients__input">
      <input
        ref="input"
        type="radio"
        name="sauce"
        :value="value"
        :checked="checkFirst"
        @change="getValueRadio"
      />
      <span>{{ name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: ["name", "desc", "size", "className", "checkFirst", "value", "price", "multiplier"],
  methods: {
    getValueRadio(event) {
      this.$emit("getValueRadio", event.target.value, this.price ? this.price : '', this.multiplier ? this.multiplier : '');
    },
  },
  mounted() {
    let input = this.$refs.input;
    let check = "";
    if (input.checked) {
      check = input.value;
      this.$emit("getValueRadio", check, this.price, this.multiplier);
    }
  },
};
</script>
<style>
.dough__wrapper {
  display: flex;
  width: 50%;
}
.diameter__wrapper {
  display: flex;
  align-items: center;
}
.diameter__wrapper:nth-child(3n) .diameter__input {
  margin-right: 0;
}
.diameter__wrapper .diameter__input {
  margin-right: 25px;
}
.sauce__wrapper {
  display: flex;
  align-items: center;
}
</style>