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
  <i @click="scroll('prev')" id="right" class="button-next">></i>
  <div class="basket container justify-content-center"
       id="box-droppable"
       @drop="drop"
       @dragover="allowDrop">
    <div
      class="card-product-basket"
      v-for="productBasket of basket"
      :key="productBasket.id">
      <img class="card-product-basket-img" :src="require(`@/assets/images/${productBasket.img}`)"/>
    </div>
  </div>
  <div
    v-for="productBasket of basket"
    :key="productBasket.id"
  >
    {{productBasket.name}} - {{productBasket.price}}
  </div>
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
    Navigation
  },
  data() {
    return {
      basket: [
        {id:9, price: "5500$", name: "Пиджак", img: "logo.png",},
      ]
    }
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
    allowDrop(ev) {
      ev.preventDefault();
    },
    drop(ev) {
      ev.preventDefault();
      let data = JSON.parse(ev.dataTransfer.getData("data"));
      this.basket.push(data)
      console.log(data)
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
.card-product-basket-img {
  width: 150px;
  height: 150px;
}
.productList {
  width: 70%;
}
.basket {
  display: flex;
  border: 2px solid $white;
  border-radius: 25px;
  width: 80%;
  height: 40%;
  padding: 180px 50px;
}
 #draggable-container{
   width: 50%;
   min-height: 300px;
   padding: 10px;
   border: 1px solid #aaaaaa;
 }
 #box-droppable {
   display: flex;
   gap: 10px 10px;
   width: 80%;
   height: 332px;
   overflow-y: scroll;
   padding: 10px;
   border: 1px solid #aaaaaa;
   flex-wrap: wrap;
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
/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: transparent $grey;
}
/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 2px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: $grey;
}
</style>
