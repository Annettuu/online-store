<template>
  <div class="home">
   <HelloWorld/>
  </div>

</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import  'bootstrap/dist/css/bootstrap.css';
@import  'bootstrap-vue/dist/bootstrap-vue.css';


</style>
