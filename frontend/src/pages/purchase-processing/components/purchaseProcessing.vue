<template>
  <div class="purchaseProcessing">
    <div class="purchaseProcessing_list">
      <div
        v-for="prod of product"
        :key="prod.id"
        class="purchaseProcessing_list_item"
      >
        <img
          :src="require(`@/assets/images/${prod.img}`)"
        >
      </div>
    </div>
    <div class="purchaseProcessing_pay">
      <h2>К оплате ____</h2>
      <button class="btn-pay">
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'purchase-processing',
  data() {
    return {
      product: [
        {id:7, price: 5000, name: 'Товар', quantity: 2, img: 'product_number_9.jpg'},
        {id:8, price: 5000, name: 'Товар', quantity: 2, img: 'product_number_10.jpg'},
        {id:9, price: 5000, name: 'Товар', quantity: 3, img: 'product_number_11.jpg'},
        {id:10, price: 5000, name: 'Товар', quantity: 5, img: 'product_number_12.jpg'},
        {id:11, price: 5000, name: 'Товар', quantity: 1, img: 'product_number_13.jpg'},
        {id:1, price: 5000, name: 'Товар', quantity: 4, img: 'product_number_9.jpg'},
        {id:2, price: 5000, name: 'Товар', quantity: 2, img: 'product_number_10.jpg'},
        {id:3, price: 5000, name: 'Товар', quantity: 6, img: 'product_number_11.jpg'},
        {id:4, price: 5000, name: 'Товар', quantity: 0, img: 'product_number_12.jpg'},
        {id:5, price: 5000, name: 'Товар', quantity: 3, img: 'product_number_13.jpg'}
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/scss/main-color.scss';

.purchaseProcessing {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 170px 30px;

  &_list {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 25px;
    border: 2px solid $black;
    padding: 25px;

    &_item {

    }
  }

  &_pay {
    width: 40%;
  }
}
img {
  width: 150px;
}
.btn-pay {
  background: transparent;
  color: $black;
  border: 1px solid $black;
  border-radius: 10px;
  padding: 12px;
  font-size: 20px;
}
</style>
