<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>
    </div>
    <div class="header__cart">
      <router-link to="/cart">{{ finalPriceHeader }} ₽</router-link>
    </div>

    <div class="header__user" v-if="isAuthorized == false">
      <router-link to="/profile" class="header__login"
        ><span>Войти</span></router-link
      >
    </div>
    <div class="header__user" v-else>
      <a href="/profile">
        <picture>
          <source
            type="image/webp"
            srcset="@/assets/img/users/user5.webp 1x, img/users/user5@2x.webp 2x"
          />
          <img
            src="@/assets/img/users/user5.jpg"
            srcset="@/assets/img/users/user5@2x.jpg"
            alt="Василий Ложкин"
            width="32"
            height="32"
          />
        </picture>
        <span>Василий Ложкин</span>
      </a>
      <a href="/" class="header__logout"><span>Выйти</span></a>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppLayoutHeader",
  props: {
    finalPriceHeader: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isAuthorized() {
      return false;
    },
  },
};
</script>

<style>
.header__login::after {
  content: "";
  background: url(../assets/img/login.svg) no-repeat center;
  background-size: auto 50%;
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: middle;
}
.header__logout::before {
  content: "";
  background: url(../assets/img/login.svg) no-repeat center;
  background-size: auto 50%;
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: middle;
}
.header__user {
  display: flex;
  align-items: center;
}
</style>