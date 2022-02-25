<template>
  <div class="sheet__content diameter">
    <RadioButton
      v-for="list of listArray"
      :key="list.id"
      :name="list.name"
      :className="className"
      :multiplier="list.multiplier"
      :size="list.size"
      :checkFirst="list == listArray[0] ? true : false"
      @getValueRadio="getValueRadio"
    />
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderSize",
  components: {
    RadioButton,
  },
  props: ["list"],
  data() {
    return {
      className: "diameter",
    };
  },
  computed: {
    listArray() {
      let list = this.list.sizes;
      for (let i = 0; i < list.length; i++) {
        if (list[i].name == "23 см") {
          list[i]["size"] = "small";
        } else if (list[i].name == "32 см") {
          list[i]["size"] = "normal";
        } else if (list[i].name == "45 см") {
          list[i]["size"] = "big";
        }
      }
      return list;
    },
  },
  methods: {
    getValueRadio(value, price, multiplier) {
      this.$emit("getValueRadio", value, price ? price : '', multiplier ? multiplier : '')
    }
  }
};
</script>