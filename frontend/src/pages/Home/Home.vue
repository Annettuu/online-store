<template>
  <div class="home">
    <header-home />
    <div class="home_container">
      <div class="home_container_listProduct">
        <search-product />
        <search-product2 />
      </div>
      <basket />
    </div>
  </div>
</template>

<script>
import headerHome from '@/pages/Home/components/header-home'
import searchProduct from '@/pages/Home/components/searchProduct/seachProduct.vue'
import searchProduct2 from '@/pages/Home/components/searchProduct2/seachProduct.vue'
import basket from '@/pages/Home/components/basket'


export default {
  name: 'home-view',
  components: {
    headerHome,
    searchProduct,
    searchProduct2,
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 20px;

  &_container {
    display: flex;
    width: 100%;
    align-items: center;

    &_listProduct {
      display: flex;
      width: 75%;
      flex-direction: column;
    }

  }
}
</style>
