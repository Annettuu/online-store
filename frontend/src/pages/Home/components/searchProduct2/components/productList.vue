<template>
  <div class="productList">
    <swiper
      class="mySwiper2"
      :slides-per-view="4"
      :space-between="15"
      :modules="modules"
      :allow-touch-move="false"
      :direction="'horizontal'"
    >
      <template #wrapper-end>
        <swiper-slide
          v-for="product of products"
          :key="product.id"
        >
          <card-product
            :card-product="product"
            @drag="onDragging($event, product)"
          />
        </swiper-slide>
      </template>
    </swiper>
    <div
      id="left"
      class="swiper-button-prev"
      @click="scroll('prev')"
    />
    <div
      id="right"
      class="swiper-button-next"
      @click="scroll('next')"
    />
  </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import cardProduct from '@/components/CardProduct'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/scss'
import 'swiper/css/navigation'


export default {
  name: 'product-list-2',
  components: {
    Swiper,
    SwiperSlide,
    cardProduct
  },
  setup() {
    function onDragging(ev, item){
      ev.dataTransfer.setData('data', JSON.stringify(item))
    }
    let products = [
      {id:1, price: 5000, name: 'Товар', img: 'img_2.png'},
      {id:2, price: 5000, name: 'Товар', img: 'img_2.png'},
      {id:3, price: 5000, name: 'Товар', img: 'img_2.png'},
      {id:4, price: 5000, name: 'Товар', img: 'img_2.png'},
      {id:5, price: 5000, name: 'Товар', img: 'img_2.png'},
      {id:6, price: 5000, name: 'Товар', img: 'img_2.png'},
      {id:7, price: 5000, name: 'Товар', img: 'img_2.png'},
      {id:8, price: 5000, name: 'Товар', img: 'img_2.png'},
      {id:9, price: 5000, name: 'Товар', img: 'img_2.png'},
      {id:10, price: 5000, name: 'Товар', img: 'img_2.png'}
    ]
    function scroll(direction) {
      const swiper = document.querySelector('.mySwiper2').swiper

      if (direction === 'next') {
        swiper.slideNext()
      } else {
        swiper.slidePrev()
      }
    }

    return {
      modules: [Scrollbar, Navigation, Pagination, A11y], products,  Swiper, SwiperSlide, onDragging, scroll
    }
  }
}
</script>


<style lang="scss">
@import '@/assets/styles/scss/main-color.scss';

.productList {
  padding: 40px 0;
  width: 100%;
  height: 100%;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  display: flex;

  & img {
    display: block;
    height: 100%;
    object-fit: contain;
  }
}
.productList {
  width: 90%;
  position: relative;
}
.swiper-button-prev, .swiper-button-next {
  cursor: pointer;
  color: black;
  z-index: 5;
}
</style>
