<template>
  <div class="productList">
    <swiper
      class="mySwiper"
      :slides-per-view="3"
      :space-between="15"
      :navigation="true"
      :modules="modules"
      :allow-touch-move="false"
      :direction="'horizontal'"
    >
      <swiper-slide
        v-for="product of cardProduct"
        :key="product.id"
      >
        <card-product
          :card-product="product"
          @drag="onDragging($event, product)"
        />
      </swiper-slide>
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
import cardProduct from '@/components/CardProduct'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/scss'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'


export default {
  name: 'product-list',
  components: {
    Swiper,
    SwiperSlide,
    cardProduct,
    Navigation
  },
  setup() {
    function onDragging(ev, item){
      console.debug(JSON.stringify(item))
      ev.dataTransfer.setData('data', JSON.stringify(item))
    }
    const cardProduct = [
      {id:1, price: 5000, name: 'Товар', img: 'logo.png'},
      {id:2, price: 5000, name: 'Товар', img: 'logo.png'},
      {id:3, price: 5000, name: 'Товар', img: 'logo.png'},
      {id:4, price: 5000, name: 'Товар', img: 'logo.png'},
      {id:5, price: 5000, name: 'Товар', img: 'logo.png'}
    ]
    function scroll(direction) {
      const swiper = document.querySelector('.swiper').swiper

      if (direction === 'next') {
        swiper.slideNext()
      } else {
        swiper.slidePrev()
      }
    }

    return {
      modules: [Navigation], cardProduct,  Swiper, SwiperSlide, onDragging, scroll
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
  display: flex;
}
.swiper-slide {
  width: 25% !important;

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
#left {
  left:3%;
}
#right {
  right:3%;
}
</style>
