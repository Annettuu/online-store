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
      >
        <img
          class="basket-cardProduct-img"
          :src="require(`@/assets/images/${productBasket.img}`)"
          @mouseover="mouseover"
        >
      </div>
      <div class="basket-cardProduct-panelDescription">
        <div
          v-for="productBasket of basket"
          :key="productBasket.id"
          class="basket-cardProduct-description"
        >
          <h6>{{ productBasket.name }} - {{ productBasket.price }}$</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basket',
  data() {
    return {
      basket: []
    }
  },
  methods: {
    allowDrop(ev) {
      ev.preventDefault()
    },
    drop(ev) {
      ev.preventDefault()
      let data = JSON.parse(ev.dataTransfer.getData('data'))
      this.basket.push(data)
    },
    mouseover() {
      let changeDisp = document.querySelector('.basket-cardProduct-panelDescription')
      changeDisp.style.display = changeDisp.style.display = 'flex'
    },
    mouseleave() {
      let change = document.querySelector('.basket-cardProduct-panelDescription')
      change.style.display = change.style.display = 'none'
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
  bottom: 0px;
  max-height: 80px;
  z-index: 10;
}
h6 {
  color: $black;
}
.basket-cardProduct-description {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $white;
  width: 100%;
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
.basket-cardProduct-img {
  width: 150px;
  height: 150px;
}
.basket-drop {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px 10px;
  width: 100%;
  height: 700px;
  overflow-y: scroll;
  padding: 10px;
  border: 1px solid #aaaaaa;
  flex-wrap: wrap;
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
