<template>
  <div class="sheet__content dough">
    <RadioButton
      v-for="list of list.dough"
      :key="list.id"
      :checkedItem="list.id === currentDoughtSelector"
      :value="list.id === 1 ? 'light' : list.id === 2 ? 'large' : ''"
      :price="list.price"
      :className="list.id === 1 ? 'dough__input dough__input--light' : list.id === 2 ? 'dough__input dough__input--large' : ''"
      :classWrap="classWrap"
      @getValueRadio="getValueRadio"
    >
      <b>{{ list.name }}</b>
      <span>{{ list.description }}</span>
    </RadioButton>

  </div>
  
</template>
<script>
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderDough",
  components: {
    RadioButton,
  },
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      classWrap: "dough",
    };
  },
  methods: {
    getValueRadio(price, multiplier, value) {
      this.$store.commit("setDoughtSelector", value);
      this.$store.commit("setCurrentDougthPrice", price)
      this.$emit("getValueRadio");
    },
  },
  computed: {
    getDought() {
      return this.$store.getters.getDoughtSelector
    },
    currentDoughtSelector() {
      let selector = this.getDought == 'light' ? 1 : this.getDought == 'large' ? 2 : 1
      return selector
    }
  }
};
</script>