<template>
  <div class="home">
    <div class="listProduct">
      <search-product />
      <search-product />
    </div>
    <basket />
  </div>
</template>

<script>
import headerHome from '@/pages/Home/components/header-home'
import searchProduct from '@/pages/Home/components/searchProduct/seachProduct.vue'
import basket from '@/pages/Home/components/basket'


export default {
  name: 'home-view',
  components: {
    headerHome,
    searchProduct,
    basket
  }
}
</script>

<style lang="scss">
@import  'bootstrap/dist/css/bootstrap.css';
@import  'bootstrap-vue/dist/bootstrap-vue.css';
@import '@/assets/styles/scss/custom.css';
@import '@/assets/styles/scss/main-color.scss';

.home {
  background: $green;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 20px;
}
.listProduct {
  display: flex;
  width: 75%;
  flex-direction: column;
}
</style>
