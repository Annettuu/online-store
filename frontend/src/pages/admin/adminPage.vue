<template>
  <div class="admin-page">
    <header-admin />
    <admin />
  </div>
</template>

<script>
import admin from '@/pages/admin/components/admin'
import headerAdmin from '@/pages/admin/components/header-admin'

export default {
  name: 'admin-page',
  components: {
    admin,
    headerAdmin
  }
}
</script>

<style lang="scss">

</style>
