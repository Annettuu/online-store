<template>
  <div class="header-admin">
    <router-link :to="{ name: 'home'}">
      <h5>На главную</h5>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'header-admin'
}
</script>

<style lang="scss">
@import '@/assets/styles/scss/main-color.scss';

.header-admin {
  display: flex;
  width: 100%;
  padding: 30px 30px;
}
.router-link-active {
  color: transparent;

  &:hover {
    color: $black;
  }
}

</style>
