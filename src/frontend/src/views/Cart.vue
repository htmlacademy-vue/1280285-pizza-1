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
                @click="order.count--"
                type="button"
                class="counter__button counter__button--minus"
                :disabled="order.count == 0"
              >
                <span class="visually-hidden">Меньше</span>
              </button>
              <input
                type="text"
                name="counter"
                class="counter__input"
                v-model="order.count"
              />
              <button
                type="button"
                @click="order.count++"
                :disabled="order.count == 3"
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
                @click="changeOrder(order)"
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
              @changeAdditionalItem="changeAdditionalItem"
            />
          </ul>
        </div>

        <div class="cart__form">
          <div class="cart-form">
            <label class="cart-form__select">
              <span class="cart-form__label">Получение заказа:</span>

              <select name="test" class="select" v-model="adress.takeOrder">
                <option>Заберу сам</option>
                <option>Новый адрес</option>
                <option v-if="isAuthorizedUser">Дом</option>
              </select>
            </label>

            <label class="input input--big-label">
              <span>Контактный телефон:</span>
              <input
                type="text"
                name="tel"
                placeholder="+7 999-999-99-99"
                v-model="adress.phone"
              />
            </label>

            <div class="cart-form__address">
              <span class="cart-form__label">Новый адрес:</span>

              <div class="cart-form__input">
                <label class="input">
                  <span>Улица*</span>
                  <input type="text" name="street" v-model="adress.street" />
                </label>
              </div>

              <div class="cart-form__input cart-form__input--small">
                <label class="input">
                  <span>Дом*</span>
                  <input type="text" name="house" v-model="adress.house" />
                </label>
              </div>

              <div class="cart-form__input cart-form__input--small">
                <label class="input">
                  <span>Квартира</span>
                  <input type="text" name="apartment" v-model="adress.apartment" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section class="footer">
      <div class="footer__more">
        <a
          @click.prevent="morePizza"
          class="button button--border button--arrow"
        >
          Хочу еще одну
        </a>
      </div>
      <p class="footer__text">
        Перейти к конструктору<br />чтоб собрать ещё одну пиццу
      </p>
      <div class="footer__price">
        <b>Итого: {{ cartPrice }} ₽</b>
      </div>

      <div class="footer__submit">
        <button
          type="submit"
          class="button"
          :disabled="getCartOrders.length == 0"
          @click="confirmOrder"
        >
          Оформить заказ
        </button>
      </div>
    </section>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import AdditiopnalItems from "@/modules/cart/AdditionalItems";
import AdditionalList from "@/static/misc.json";
export default {
  components: {
    AdditiopnalItems,
  },
  data() {
    return {
      AdditionalList,
      AdditionalObj: {},
      adress: {
        house: "",
        apartment: "",
        street: "",
        phone: "",
        takeOrder: "",
        
      },
      checkStatus: false
    };
  },
  computed: {
    ...mapGetters([
      "getCartOrders",
      "getAdditionalItem",
      "getAdditionalPrice",
      "getAdditionalPrice",
      "getCurrentPizza",
      "getTemplatePizza",
      "getCountPizza",
      "getOrderAdress",
      "getOrderHouse",
      "getOrderFlat",
      "getOrderTake",
      "getPhoneNumber",
      "isAuthorizedUser",
    ]),
    // getCartOrders() {
    //   return this.$store.getters.getCartOrders;
    // },
    // getAdditionalItem() {
    //   return this.$store.getters.getAdditionalItem;
    // },
    // getAdditionalPrice() {
    //   return this.$store.getters.getAdditionalPrice;
    // },
    // getCurrentPizza() {
    //   return this.$store.getters.getCurrentPizza;
    // },
    // getTemplatePizza() {
    //   return this.$store.getters.getTemplatePizza;
    // },
    // getCountPizza() {
    //   return this.$store.getters.getCountPizza;
    // },
    
    cartPrice() {
      let totalPrice = 0;
      let count = 0;
      let array = this.getCartOrders;
      array.forEach((element) => {
        totalPrice += element.totalPrice;
        count += element.count;
      });
      return count * totalPrice + this.getAdditionalPrice;
    },
  },
  methods: {
    changeOrder(order) {
      this.$store.commit("setPizzaObj", order);
      this.$router.push({
        path: "/",
      });
    },
    confirmOrder() {
      this.$router.push({
        path: "/popup"
      })
    },
    morePizza() {
      this.$store.commit("setPizzaObj", this.getTemplatePizza);
      this.$router.push({
        path: "/",
      });
    },
    checkAdressOrder() {
      let check = Object.keys(this.adress).length == 0
      return check
    },
    changeAdditionalItem(object) {
      this.AdditionalObj[object.name] = object.count;

      let priceAdditional = 0;
      for (let i in this.AdditionalObj) {
        let additionalItem = AdditionalList.find((item) => item.name == i);

        let additionalPrice = additionalItem.price * this.AdditionalObj[i];
        priceAdditional += additionalPrice;
        this.$store.commit("setAdditionalPrice", priceAdditional);
        this.$store.commit("updateAdditionalObj", this.AdditionalObj);
      }
    },
  },
  
};
</script>
