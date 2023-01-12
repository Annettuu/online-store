<template>
 <div class="hello">
   <nav class="navbar">
     <a class="navbar-brand" href="#">Логотип магазина</a>
   </nav>
 </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.hello {
  width: 100%;
}
</style>
