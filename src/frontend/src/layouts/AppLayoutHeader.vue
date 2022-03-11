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
    <div class="header__user">
       <router-link to="/profile" class="header__login"><span>Войти</span></router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppLayoutHeader",
  props: {
    finalPriceHeader: {
      type: Number,
      required: true
    }
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
</style>