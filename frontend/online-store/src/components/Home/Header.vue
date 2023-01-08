<template>
 <div class="hello">
   <nav class="navbar">
     <a class="navbar-brand" href="#">Логотип магазина</a>
       <b-navbar-nav class="buttons">
         <b-button>
           Корзина
         </b-button>
         <b-button>
           Продавцу
         </b-button>
       </b-navbar-nav>
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
.buttons {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

</style>
