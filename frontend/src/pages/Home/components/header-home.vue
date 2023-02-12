<template>
  <div class="header">
    <nav class="navbar">
      <a
        class="navbar-brand"
      >
        <img src="@/assets/images/OnlineShop_free-file.png">
      </a>
      <a
        class="navbar-basket"
      >
        <router-link :to="{ name: 'purchaseProcessing'}"><h5>Купить товары</h5></router-link>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header-home'
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/scss/main-color.scss';
.header {
  width: 100%;
}
a {
  color: transparent;

  &:hover {
    color: $black;
  }
}
.navbar-basket {
  color: $black;
  margin-right: 20px;
}
</style>
