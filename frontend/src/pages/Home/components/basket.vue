<template>
  <div class="basket">
    <div
      class="basket-drop"
      @drop="drop"
      @dragover="allowDrop"
      @mouseleave="mouseleave"
    >
      <div
        v-for="productBasket of basket"
        :key="productBasket.id"
        class="basket-cardProduct"
        @mouseover="mouseover"
      >
        <img
          class="basket-cardProduct-img"
          :src="require(`@/assets/images/${productBasket.img}`)"
          :class="{ active: activeId === productBasket.id}"
        >
      </div>
      <div class="basket-cardProduct-panelDescription">
        <div
          v-for="productBasket of basket"
          :key="productBasket.id"
          class="basket-cardProduct-description"
          @mouseover="activeId = productBasket.id"
          :class="{ active: activeId === productBasket.id}"
        >
          <h6>
            {{ productBasket.name }} - {{ productBasket.price }}
          </h6>
          <button
            class="basket-cardProduct-btn"
            @click="addProd"
          >
            <img
              class="basket-cardProduct-btn-img"
              src="@/assets/svg/addProd.svg"
            >
          </button>
          <button
            class="basket-cardProduct-btn"
            @click="removeProd(productBasket.id)"
          >
            <img
              class="basket-cardProduct-btn-img"
              src="@/assets/svg/remove.svg"
            >
          </button>
        </div>
      </div>
    </div>
    <h5
      class="sum"
    >
      Итого: {{ sum }} ₽
    </h5>
  </div>
</template>

<script>
export default {
  name: 'basket',
  data() {
    return {
      basket: [],
      sum: 0,
      activeId: -1
    }
  },
  methods: {
    sumTo(price) {
      this.sum = this.sum + price
    },
    allowDrop(ev) {
      ev.preventDefault()
    },
    drop(ev) {
      ev.preventDefault()
      let data = JSON.parse(ev.dataTransfer.getData('data'))
      this.basket.push(data)
      this.sumTo(data.price)
    },
    mouseover() {
      let changeDisp = document.querySelector('.basket-cardProduct-panelDescription')
      changeDisp.style.display = 'flex'
    },
    mouseleave() {
      let change = document.querySelector('.basket-cardProduct-panelDescription')
      change.style.display = 'none'
    },
    highlight(bool) {
      this.isActive = bool;
    },
    addProd() {

    },
    removeProd() {

    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/scss/main-color.scss';

.basket {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  border-radius: 5px;
  position: relative;
}
.basket-cardProduct-panelDescription {
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: absolute;
  overflow: hidden;
  overflow-y: scroll;
  bottom: 55px;
  max-height: 105px;
  z-index: 10;
}
h6 {
  color: $black;
}
.basket-cardProduct-description {
  display: flex;
  justify-content: center;
  background: $white;
  width: 100%;
  border: 1px solid $black;
  align-items: center;
}
.basket-cardProduct-panelTotalPrice {
  display: flex;
  position: absolute;
  align-items: center;
  background: $white;
  bottom: 0px;
  right: 0px;
  width: 10%;
}
.basket-cardProduct-btn {
  background: transparent;
  border: none;
  margin-bottom: 5px;
}
.basket-cardProduct-btn-img {
  width: 15px;
  height: 15px;
}
.basket-cardProduct-img {
  width: 125px;
  height: 175px;
}
.basket-drop {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px 10px;
  width: 100%;
  height: 600px;
  overflow-y: scroll;
  padding: 10px;
  border: 1px solid #aaaaaa;
  flex-wrap: wrap;
}
.sum {
  margin-top: 21px;
  border-bottom: 1px solid black;
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
.active {
  filter: brightness(70%);
}
</style>
