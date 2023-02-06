<template>
  <div class="purchaseProcessing">
    <div class="purchaseProcessing_list">
      <div
        class="purchaseProcessing_list_item"
        v-for="prod of product"
        :key="prod.id"
      >
        <img
          :src="require(`@/assets/images/${prod.img}`)"
        >
      </div>
    </div>
    <div class="purchaseProcessing_pay">
      <h2>К оплате ____</h2>
      <button class="btn-pay">Оформить заказ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'purchase-processing',
  data() {
    return {
      product: [
        {id:1, price: 5000, name: 'Товар', img: 'img_2.png'},
        {id:2, price: 5000, name: 'Товар', img: 'img_2.png'},
        {id:3, price: 5000, name: 'Товар', img: 'img_2.png'},
        {id:4, price: 5000, name: 'Товар', img: 'img_2.png'},
        {id:5, price: 5000, name: 'Товар', img: 'img_2.png'},
        {id:6, price: 5000, name: 'Товар', img: 'img_2.png'},
        {id:7, price: 5000, name: 'Товар', img: 'img_2.png'},
        {id:8, price: 5000, name: 'Товар', img: 'img_2.png'},
        {id:9, price: 5000, name: 'Товар', img: 'img_2.png'},
        {id:10, price: 5000, name: 'Товар', img: 'img_2.png'},
        {id:11, price: 5000, name: 'Товар', img: 'img_2.png'},
        {id:12, price: 5000, name: 'Товар', img: 'img_2.png'},
        {id:13, price: 5000, name: 'Товар', img: 'img_2.png'},
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

  &_list {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 25px;
    border: 2px solid $white;
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
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  padding: 12px;
  font-size: 20px;
}
</style>
