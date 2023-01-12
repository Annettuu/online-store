<template>
  <div class="searchProduct">
    <search-bar/>
    <product-list/>
  </div>


</template>

<script>
import productList from "@/components/Home/searchProduct/components/productList";
import searchBar from "@/components/Home/searchProduct/components/searchBar";

export default {
  name: "searchProduct",
  components: {
    productList,
    searchBar,
  }
}
</script>

<style lang="scss">
.searchProduct {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

</style>
