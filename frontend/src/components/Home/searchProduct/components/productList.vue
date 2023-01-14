<template>
<div class="productList">
  <swiper :navigation="true" :slides-per-view="5" :space-between="25" :modules="modules" class="mySwiper">
    <div class="swiper-wrapper">
      <swiper-slide v-for="images in contentSwiper" :key="images">
        <img :src="`${images}`" alt="">
      </swiper-slide>
    </div>
  </swiper>
</div>
</template>

<script>
import cardProduct from "@/components/CardProduct";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import { Navigation } from "swiper";


export default {
  name: "productList",
  components: {
    Swiper,
    SwiperSlide,
    Navigation,
    cardProduct,
  },
  setup() {
    const contentSwiper = [
      'img_2.png',
      ];
    return {
      modules: [Navigation], contentSwiper
    };
  },
};
</script>

<style lang="scss">
.productList {
  padding: 40px 0;
}
.swiper {
  display: flex;
  width: 1300px;
  height: 300px;
  overflow: hidden;

  & img {
    width: 250px;
    height: 300px;
  }
}
</style>
