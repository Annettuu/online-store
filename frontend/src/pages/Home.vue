<template>
  <div class="home">
    <Header/>
    <search-product/>
    <basket/>
    <search-product/>
  </div>

</template>

<script>
import Header from '@/components/Home/Header.vue'
import searchProduct from '@/components/Home/searchProduct/index.vue'
import basket from "@/components/Home/basket";


export default {
  name: 'HomeView',
  components: {
    Header,
    searchProduct,
    basket
  }
}
</script>

<style lang="scss">
@import  'bootstrap/dist/css/bootstrap.css';
@import  'bootstrap-vue/dist/bootstrap-vue.css';
@import  '@/assets/styles/scss/custom.css';
@import  '@/assets/styles/scss/main-color.scss';

.home {
  background: $green;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>
