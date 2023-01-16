<template>
<div class="productList">
  <swiper
    :navigation="true"
    :slidesPerView="4"
    :space-between="25"
    :modules="modules"
    class="mySwiper"
  >
    <div class="swiper-wrapper">
      <swiper-slide
        v-for="product of CardProduct"
        :key="product.id"
      >
        <card-product
          :name="product.name"
          :price="product.price"
          :img="product.img"
        />
      </swiper-slide>
    </div>
  </swiper>
</div>
</template>

<script>
import cardProduct from "@/components/CardProduct";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/css/navigation";
import { Navigation } from "swiper";


export default {
  name: "productList",
  components: {
    Swiper,
    SwiperSlide,
    cardProduct,
    Navigation
  },
  setup() {
    const CardProduct = [
      {id:1, price: "да", name: "получилось", img: "logo.png",},
      {id:2, price: "это", name: "круто", img: "logo.png",},
      {id:3, price: "3", name: "3", img: "logo.png",},
      {id:4, price: "4", name: "4", img: "logo.png",},
      {id:5, price: "5", name: "5", img: "logo.png",},
    ]
    return {
      modules: [Navigation], CardProduct,
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
}
</style>
