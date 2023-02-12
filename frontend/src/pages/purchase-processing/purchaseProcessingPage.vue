<template>
  <div class="purchase-processing-page">
    <header-purchase-processing/>
    <purchaseProcessing/>
  </div>
</template>

<script>
import purchaseProcessing from "@/pages/purchase-processing/components/purchaseProcessing";
import headerPurchaseProcessing from "@/pages/purchase-processing/components/header-purchaseProcessing";

export default {
  name: "purchaseProcessingPage",
  components: {
    purchaseProcessing,
    headerPurchaseProcessing
  }
}
</script>

<style lang="scss">

</style>
