<template>
  <form action="test.html" method="post" class="layout-form">
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>

        <div v-if="getCartOrders.length == 0" class="sheet cart__empty">
          <p>В корзине нет ни одного товара</p>
        </div>

        <ul v-if="getCartOrders.length != 0" class="cart-list sheet">
          <li
            v-for="(order, index) in getCartOrders"
            :key="index"
            class="cart-list__item"
          >
            <div class="product cart-list__product">
              <img
                src="@/assets/img/product.svg"
                class="product__img"
                width="56"
                height="56"
                alt="Капричоза"
              />
              <div class="product__text">
                <h2>{{ order.namePizza }}</h2>
                <ul>
                  <li>{{ order.sizeDesc }}, {{ order.doughtDesc }}</li>
                  <li>Соус: {{ order.sauceDesc }}</li>
                  <li>Начинка: {{ order.nameIng }}</li>
                </ul>
              </div>
            </div>

            <div class="counter cart-list__counter">
              <button
                type="button"
                class="counter__button counter__button--minus"
              >
                <span class="visually-hidden">Меньше</span>
              </button>
              <input
                type="text"
                name="counter"
                class="counter__input"
                value="1"
              />
              <button
                type="button"
                class="
                  counter__button counter__button--plus counter__button--orange
                "
              >
                <span class="visually-hidden">Больше</span>
              </button>
            </div>

            <div class="cart-list__price">
              <b>{{ order.totalPrice }} ₽</b>
            </div>

            <div class="cart-list__button">
              <button
                type="button"
                class="cart-list__edit"
                @ckick="changeOrder(index)"
              >
                Изменить
              </button>
            </div>
          </li>
        </ul>
        <div class="cart__additional">
          <ul class="additional-list">
            <AdditiopnalItems
              v-for="additionalItem of AdditionalList"
              :key="additionalItem.id"
              :name="additionalItem.name"
              :price="additionalItem.price"
              :img="additionalItem.image"
            />
          </ul>
        </div>

        <div class="cart__form">
          <div class="cart-form">
            <label class="cart-form__select">
              <span class="cart-form__label">Получение заказа:</span>

              <select name="test" class="select">
                <option value="1">Заберу сам</option>
                <option value="2">Новый адрес</option>
                <option value="3">Дом</option>
              </select>
            </label>

            <label class="input input--big-label">
              <span>Контактный телефон:</span>
              <input type="text" name="tel" placeholder="+7 999-999-99-99" />
            </label>

            <div class="cart-form__address">
              <span class="cart-form__label">Новый адрес:</span>

              <div class="cart-form__input">
                <label class="input">
                  <span>Улица*</span>
                  <input type="text" name="street" />
                </label>
              </div>

              <div class="cart-form__input cart-form__input--small">
                <label class="input">
                  <span>Дом*</span>
                  <input type="text" name="house" />
                </label>
              </div>

              <div class="cart-form__input cart-form__input--small">
                <label class="input">
                  <span>Квартира</span>
                  <input type="text" name="apartment" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section class="footer">
      <div class="footer__more">
        <router-link to="/" class="button button--border button--arrow"
          >Хочу еще одну
        </router-link>
      </div>
      <p class="footer__text">
        Перейти к конструктору<br />чтоб собрать ещё одну пиццу
      </p>
      <div class="footer__price">
        <b>Итого: 2 228 ₽</b>
      </div>

      <div class="footer__submit">
        <button type="submit" class="button">Оформить заказ</button>
      </div>
    </section>
  </form>
</template>

<script>
import AdditiopnalItems from "@/modules/cart/AdditionalItems";
import AdditionalList from "@/static/misc.json";
export default {
  components: {
    AdditiopnalItems,
  },
  data() {
    return {
      AdditionalList,
    };
  },
  computed: {
    getCartOrders() {
      return this.$store.getters.getCartOrders;
    },
  },
  methods: {
    changeOrder(index) {
      console.log(index)
      this.$store.commit("setEditingPizza", this.getCartOrders[index])
      this.$router.push({
        path: "/"
      })
    }
  }
};
</script>