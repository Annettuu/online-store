<template>
  <div class="basket container justify-content-center">
    <h4 class="">Переместите товар в корзину...</h4>
  </div>
</template>

<script>
export default {
  name: "basket"
}
</script>

<style lang="scss">
@import '@/assets/styles/scss/main-color.scss';

.basket {
  display: flex;
  border: 2px solid $white;
  border-radius: 25px;
  width: 800px;
  height: 400px;
  padding: 180px 50px;
}
</style>
