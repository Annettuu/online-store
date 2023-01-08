<template>
  <div class="home">
    <Header/>
    <search-bar/>
    <product-list/>
  </div>

</template>

<script>
import Header from '@/components/Home/Header.vue'
import SearchBar from "@/components/Home/searchBar";
import ProductList from "@/components/Home/productList";

export default {
  name: 'HomeView',
  components: {
    ProductList,
    SearchBar,
    Header
  }
}
</script>

<style lang="scss">
@import  'bootstrap/dist/css/bootstrap.css';
@import  'bootstrap-vue/dist/bootstrap-vue.css';
@import  '@/assets/styles/scss/custom.css';

.home {
  background: #173f35;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>
