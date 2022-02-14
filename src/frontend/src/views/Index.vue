<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
              <label
                v-for="dough of doughArray"
                :key="dough.id"
                class="dough__input"
                :class="`dough__input--${dough.size}`"
              >
                <input
                  type="radio"
                  name="dought"
                  value="light"
                  class="visually-hidden"
                  checked
                />
                <b>{{ dough.name }}</b>
                <span>{{ dough.description }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>

            <div class="sheet__content diameter">
              <label
                v-for="size of sizeArray"
                :key="size.id"
                class="diameter__input"
                :class="`diameter__input--${size.slug}`"
              >
                <input
                  type="radio"
                  name="diameter"
                  value="small"
                  class="visually-hidden"
                />
                <span>{{ size.name }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>

            <div class="sheet__content ingredients">
              <div class="ingredients__sauce">
                <p>Основной соус:</p>

                <label
                  v-for="sauce of sauceArray"
                  :key="sauce.id"
                  class="radio ingredients__input"
                >
                  <input type="radio" name="sauce" value="tomato" checked />
                  <span>{{ sauce.name }}</span>
                </label>
              </div>

              <div class="ingredients__filling">
                <p>Начинка:</p>

                <ul class="ingredients__list">
                  <li
                    v-for="ingredient of ingredientsArray"
                    :key="ingredient.id"
                    class="ingredients__item"
                  >
                    <span
                      class="filling"
                      :class="`filling--${ingredient.class}`"
                      >{{ ingredient.name }}</span
                    >

                    <div class="counter counter--orange ingredients__counter">
                      <button
                        type="button"
                        class="counter__button counter__button--minus"
                        disabled
                      >
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input
                        type="text"
                        name="counter"
                        class="counter__input"
                        value="0"
                      />
                      <button
                        type="button"
                        class="counter__button counter__button--plus"
                      >
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" class="button" disabled>Готовьте!</button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import Ingredients from "@/static/pizza.json";
export default {
  name: "Index",
  data() {
    return {
      Ingredients,
    };
  },
  computed: {
    doughArray() {
      let dough = this.Ingredients.dough;
      for (let i = 0; i < dough.length; i++) {
        if (dough[i].name == "Тонкое") {
          dough[i]["size"] = "light";
        } else if (dough[i].name == "Толстое") {
          dough[i]["size"] = "large";
        }
      }
      return dough;
    },
    sizeArray() {
      let size = this.Ingredients.sizes;
      for (let i = 0; i < size.length; i++) {
        if (size[i].name == "23 см") {
          size[i]["slug"] = "small";
        } else if (size[i].name == "32 см") {
          size[i]["slug"] = "normal";
        } else if (size[i].name == "45 см") {
          size[i]["slug"] = "big";
        }
      }
      return size;
    },
    sauceArray() {
      let sauce = this.Ingredients.sauces;
      for (let i = 0; i < sauce.length; i++) {
        if (sauce[i].name == "Томатный") {
          sauce[i]["value"] = "tomato";
        } else if (sauce[i].name == "Сливолчный") {
          sauce[i]["value"] = "creamy";
        }
      }
      return sauce;
    },
    ingredientsArray() {
      let ingredient = this.Ingredients.ingredients;
      for (let i = 0; i < ingredient.length; i++) {
        let str = ingredient[i].image;
        let res = decodeURI(
          str.substring(str.lastIndexOf("/") + 1, str.length)
        );
        let resNew = res.substring(0, res.length - 4);
        ingredient[i]["class"] = resNew;
      }
      return ingredient;
    },
  },
};
</script>
