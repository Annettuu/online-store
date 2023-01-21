<template>
<div class="productList">
  <swiper
    :slidesPerView="4"
    :modules="modules"
    :horizontal="true"
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
  <div @click="scroll('next')" class="button-prev" id="left"><</div>
  <div @click="scroll('prev')" id="right" class="button-next">></div>
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
      if (direction === 'prev') {
        document.querySelector('.swiper').scrollTo({
          left: 360,
          behavior: 'smooth'
        })
      } else {
        document.querySelector('.swiper').scrollTo({
          left: -360,
          behavior: 'smooth'
        })
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

.button-next, .button-prev {
  background: rgba(255, 255, 255, 0.6);
  height: 45px;
  width: 45px;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  color: black;
  font-family: system-ui;
  font-size: 25px;
  top: 50%;
  font-weight: 400;
  z-index: 5;
  transform: translateY(-50%);
}
#left {
  left:3%;
}
#right {
  right:3%;
}
</style>
