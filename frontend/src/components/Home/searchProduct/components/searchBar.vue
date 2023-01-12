<template>
  <div class="container searchBar">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск">
      <b-button>Поиск</b-button>
      <b-button>Фильтр</b-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "searchBar"
}
</script>

<style lang="scss">
.searchBar {
  margin-top: 50px;
}
.d-flex {
  gap: 5px;
}
</style>
