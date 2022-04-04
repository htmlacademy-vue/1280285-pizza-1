<template>
  <li class="additional-list__item sheet">
    <p class="additional-list__description">
      <img :src="require(`@/assets/img/${newPath}.svg`)" width="39" height="60" alt="Coca-Cola 0,5 литра" />
      <span>{{ name }}</span>
    </p>

    <div class="additional-list__wrapper">
      <div class="counter additional-list__counter">
        <button type="button" class="counter__button counter__button--minus">
          <span class="visually-hidden">Меньше</span>
        </button>
        <input type="text" name="counter" class="counter__input" value="2" />
        <button
          type="button"
          class="counter__button counter__button--plus counter__button--orange"
        >
          <span class="visually-hidden">Больше</span>
        </button>
      </div>

      <div class="additional-list__price">
        <b>× {{ price }} ₽</b>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "AdditiopnalItems",
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  computed: {
    newPath() {
      let str = this.img;
      let res = decodeURI(
            str.substring(str.lastIndexOf("/") + 1, str.length)
        );
        let resNew = res.substring(0, res.length - 4);
      return resNew
    },
  },
};
</script>