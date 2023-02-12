<template>
  <div class="header-purchaseProcessing">
    <router-link :to="{ name: 'home'}"><h5>На главную</h5></router-link>
  </div>
</template>

<script>
export default {
  name: "header-purchaseProcessing"
}
</script>

<style lang="scss">
@import '@/assets/styles/scss/main-color.scss';

.header-purchaseProcessing {
  display: flex;
  margin-top: 20px;
  margin-left: 35px;
}
.router-link-active {
  color: transparent;

  &:hover {
    color: $black;
  }
}

</style>
