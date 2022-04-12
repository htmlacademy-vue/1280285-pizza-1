<template>
  <div class="popup">
    <a href="" @click="updateBuilder" class="close">
      <span class="visually-hidden">Закрыть попап</span>
    </a>
    <div class="popup__title">
      <h2 class="title">Спасибо за заказ</h2>
    </div>
    <p>Мы начали готовить Ваш заказ, скоро привезём его вам ;)</p>
    <div class="popup__button">
      <a href="#" class="button" @click="updateBuilder">Отлично, я жду!</a>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Popup",
  methods: {
    updateBuilder() {
      this.$store.commit("setPizzaObj", this.getTemplatePizza);
      this.$router.push({
        path: "/",
      });
    },
  },
  computed: {
    ...mapGetters(["getTemplatePizza"]),
  },
};
</script>

