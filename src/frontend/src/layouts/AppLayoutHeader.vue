<template>
  <header class="header">
    <div class="header__logo">
      <a href="index.html" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </a>
    </div>
    <div class="header__cart">
      <a href="cart.html">{{ finalPriceHeader }} ₽</a>
    </div>
    <div class="header__user">
      <a href="#" class="header__login"><span>Войти</span></a>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppLayoutHeader",
  props: ["finalPriceHeader"],
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