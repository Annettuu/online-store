<template>
<div>
  <swiper :navigation="true" :slides-per-view="5" :space-between="25" :modules="modules" class="mySwiper">
    <div class="swiper-wrapper">
      <swiper-slide v-for="images in contentSwiper" :key="images">
        <img :src="`/images/${images}`" alt="">
      </swiper-slide>
    </div>
  </swiper>
</div>
</template>

<script>
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
  },
  setup() {
    const contentSwiper = [
      'logo.png',
      'logo.png',
      'img.png',
      'img.png',
      'logo.png',
      'logo.png',
      'img.png',
      'img.png',
      ];
    return {
      modules: [Navigation], contentSwiper
    };
  },
};
</script>

<style lang="scss">
.swiper {
  display: flex;
  width: 1000px;
  height: 300px;
  overflow: hidden;

  & img {
    width: 200px;
    height: 300px;
  }
}
</style>
