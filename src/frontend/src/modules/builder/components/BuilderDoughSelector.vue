<template>
  <div class="sheet__content dough">
    <RadioButton
      v-for="list of listArray"
      :key="list.id"
      :name="list.name"
      :desc="list.description"
      :size="list.size"
      :price="list.price"
      :className="className"
      
      :checkFirst="list == listArray[0] ? true : false"
      @getValueRadio="getValueRadio"
    />
  </div>
</template>
<script>
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderDough",
  components: {
    RadioButton,
  },
  props: ["list"],
  data() {
    return {
      className: "dough",
    };
  },
  computed: {
    listArray() {
      let list = this.list.dough;
      for (let i = 0; i < list.length; i++) {
        if (list[i].name == "Тонкое") {
          list[i]["size"] = "light";
        } else if (list[i].name == "Толстое") {
          list[i]["size"] = "large";
        }
      }
      return list;
    },
  },
  methods: {
    getValueRadio(value, price, multiplier) {
      this.$emit("getValueRadio", value, price ? price : '', multiplier ? multiplier : '');
    }
  }
};
</script>