<template>
<div class="productList">
  <i @click="scroll('next')" class="button-prev" id="left"><</i>
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
      <card-product
        :name="product.name"
        :price="product.price"
        :img="product.img"
        draggable="true"
        @dragstart="drag"
      />
    </swiper-slide>
  </swiper>
  <i @click="scroll('prev')" id="right" class="button-next">></i>
  <div class="basket container justify-content-center" id="box-droppable" @drop="drop" @dragover="allowDrop">
    переместите элемент
  </div>
</div>
</template>

<script>
import cardProduct from "@/components/CardProduct";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { ref } from 'vue'


export default {
  name: "productList",
  components: {
    Swiper,
    SwiperSlide,
    cardProduct,
    Navigation
  },
  methods : {
    allowDrop(ev) {
     ev.preventDefault();
    },
    scroll(direction) {
      if (direction === 'prev') {
        document.querySelector('.swiper').scrollTo({
          left: 300,
          behavior: 'smooth'
        })
      } else {
        document.querySelector('.swiper').scrollTo({
          left: -300,
          behavior: 'smooth'
        })
      }
    },
    drag(ev) {
      ev.dataTransfer.setData('text', ev.target.id)
      console.log(ev.target.id)
    },
    drop(ev) {
      ev.preventDefault();
      let id = ev.dataTransfer.getData('text');
      console.log(id);
      ev.target.appendChild(document.getElementById(id));

    }
  },
  setup() {
    const CardProduct = [
      {id:1, price: "да", name: "получилось", img: "logo.png",},
      {id:2, price: "это", name: "круто", img: "logo.png",},
      {id:3, price: "3", name: "3", img: "logo.png",},
      {id:4, price: "4", name: "4", img: "logo.png",},
      {id:5, price: "5", name: "5", img: "logo.png",},
    ]
    const basket = []
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
  width: 70%;
}
.basket {
  display: flex;
  border: 2px solid $white;
  border-radius: 25px;
  width: 800px;
  height: 400px;
  padding: 180px 50px;
}
 #draggable-container{
   width: 50%;
   min-height: 300px;
   padding: 10px;
   border: 1px solid #aaaaaa;
 }
 #box-droppable {
   width: 50%;
   min-height: 300px;
   height: 70px;
   padding: 10px;
   border: 1px solid #aaaaaa;
 }
i {
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
  top: 36%;
  font-weight: 400;
  z-index: 5;
  transform: translateY(-50%);
}
#left {
  left:18.5%;
}
#right {
  right:18%;
}
</style>
