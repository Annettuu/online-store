<template>
<div class="productList">
  <swiper
    :slidesPerView="4"
    :modules="modules"
    :allow-touch-move="false"
  >
    <swiper-slide
      v-for="product of CardProduct"
      :key="product.id"
    >
      <div class="" draggable="true" @dragstart="onDragging($event, product)" :id="product" >
        <card-product
          :name="product.name"
          :price="product.price"
          :img="product.img"
          :id="product.id"
        />
      </div>
    </swiper-slide>
  </swiper>
  <div @click="scroll('prev')" class="swiper-button-prev" id="left"></div>
  <div @click="scroll('next')" id="right" class="swiper-button-next"></div>
</div>
</template>

<script>
import cardProduct from "@/components/CardProduct";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import basket from "@/pages/Home/components/basket";


export default {
  name: "productList",
  components: {
    Swiper,
    SwiperSlide,
    cardProduct,
    Navigation,
    basket
  },
  methods : {
    scroll(direction) {
      if (direction === 'next') {
        const swiper = document.querySelector('.swiper');
        swiper.slideNext()
      } else {
        const swiper = document.querySelector('.swiper');
        swiper.slidePrev()
      }
    },
    onDragging(ev, item){
      console.log(item)
      ev.dataTransfer.setData("data", JSON.stringify(item));
    },
  },
  setup() {
    const CardProduct = [
      {id:1, price: 5000, name: "Товар", img: "logo.png",},
      {id:2, price: 5000, name: "Товар", img: "logo.png",},
      {id:3, price: 5000, name: "Товар", img: "logo.png",},
      {id:4, price: 5000, name: "Товар", img: "logo.png",},
      {id:5, price: 5000, name: "Товар", img: "logo.png",},
    ]
    return {
      modules: [Navigation], CardProduct,
    };
  },
};
</script>


<style lang="scss">
@import '@/assets/styles/scss/main-color.scss';
.productList {
  padding: 40px 0;
}
.swiper {
  display: flex;
  width: 90%;
  position: relative;

  & .swiper-slide {
    width: 305px;
    padding: 10px;
  }
}
.productList {
  width: 90%;
  position: relative;
}
 #draggable-container{
   width: 50%;
   min-height: 300px;
   padding: 10px;
   border: 1px solid #aaaaaa;
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
