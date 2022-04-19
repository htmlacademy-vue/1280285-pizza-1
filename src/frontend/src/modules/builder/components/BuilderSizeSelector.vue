<template>
  <div class="sheet__content diameter">
    <RadioButton
      v-for="list of list.sizes"
      :key="list.id"
      :checkedItem="list.id === currentSizeSelector"
      :className="list.id === 1 ? 'diameter__input diameter__input--small' : list.id === 2 ? 'diameter__input diameter__input--normal' : list.id === 3 ? 'diameter__input diameter__input--big' : ''"
      :classWrap="classWrap"
      :multiplier="list.multiplier ? list.multiplier : ''"
      :value="list.id === 1 ? 'small' : list.id === 2 ? 'normal' : list.id === 3 ? 'big' : ''"
      @getValueRadio="getValueRadio"
    >
    <span>{{list.name}}</span>
    </RadioButton>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderSize",
  components: {
    RadioButton,
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      classWrap: 'size'
    }
  },
  methods: {
    getValueRadio(price, multiplier) {
      this.$store.commit("setSizeMultiplier", multiplier);
      this.$emit("getValueRadio");
      
    }
  },
  computed: {
    getMultiplier() {
      return this.$store.getters.getMultiplier
    },
    currentSizeSelector() {
      let selector = this.getMultiplier == 1 ?  1 : this.getMultiplier == 2 ?  2 : this.getMultiplier == 3 ? 3 : 1
      return selector
    }
  }
};
</script>