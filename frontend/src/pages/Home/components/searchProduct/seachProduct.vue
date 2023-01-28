<template>
  <div class="searchProduct">
    <search-bar />
    <product-list />
  </div>
</template>

<script>
import productList from '@/pages/Home/components/searchProduct/components/productList'
import searchBar from '@/pages/Home/components/searchProduct/components/searchBar'

export default {
  name: 'search-product',
  components: {
    productList,
    searchBar
  }
}
</script>

<style lang="scss">
.searchProduct {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

</style>
