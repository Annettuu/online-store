<template>
  <div class="admin">
    <h2>Регистрация товара</h2>
    <div class="admin_container">
      <div class="admin_container_data _top">
        <h5>Название товара:</h5>
        <input
          type="text"
          required
          v-model="prod.vName"
        >
      </div>
      <div class="admin_container_data">
        <h5>Идентификатор:</h5>
        <h5>{{prod.lastId}}</h5>
      </div>
      <div class="admin_container_data">
        <h5>Цена:</h5>
        <input
          type="number"
          required
          v-model="prod.vPrice"
        >
        ₽
      </div>
      <div class="admin_container_data">
        <h5>Описание:</h5>
        <textarea
          name="description"
          v-model="prod.vDescription"
          id="description"
        ></textarea>
      </div>
      <div class="admin_container_data">
        <h5>Категория:</h5>
        <fieldset>
          <div class="listCategor">
            <div>
              <input
                type="radio"
                name="preference"
                v-model="prod.vCategory"
                id="category"
                value="Пиджак"
                checked
              >
              <label>
                Пиджак
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="preference"
                v-model="prod.vCategory"
                id="category"
                value="Блузка"
              >
              <label>
                Блузка
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="preference"
                v-model="prod.vCategory"
                id="category"
                value="Брюки"
              >
              <label>
                Брюки
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="preference"
                v-model="prod.vCategory"
                id="category"
                value="Готовый образ"
              >
              <label>
                Готовый образ
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="preference"
                v-model="prod.vCategory"
                id="category"
                value="Платье"
              >
              <label>
                Платье
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="admin_container_data">
        <h5>Изображение:</h5>
        <input
          type="file"
          ref="file"
          @change="showFile()"
          accept="image/*,image/jpeg">
      </div>
      <img src="" id="image" style="max-width: 100px; display: none;"/>
    </div>
    <button
      class="admin_addBtn"
      @click="addProduct"
    >
      Добавить товар
    </button>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data() {
    return {
      newProduct: {},
      prod: {
        lastId: 1,
        vName:'',
        vPrice: 0,
        vCategory: '',
        vDescription: '',
        vImg: '',
      }
    }
  },
  methods: {
    showFile() {
      let image = document.getElementById("image");
      image.src = URL.createObjectURL(this.$refs.file.files[0]);
      image.style.display = "block";
      this.prod.vImg = image.src;
    },
    addProduct() {
      if (this.prod.vName !== '' && this.prod.vPrice !== '' && this.prod.vCategory !== '' &&
        this.prod.vDescription !== '' && this.prod.vImg !== '') {
          this.newProduct = {
            id: this.prod.lastId,
            name: this.prod.vName,
            price: Number(this.prod.vPrice),
            img: this.prod.vImg,
            descr: this.prod.vDescription,
            category: this.prod.vCategory
          }
        this.prod.lastId++
        let item = this.newProduct
        console.log(JSON.stringify(item))
        localStorage.setItem('newProduct', JSON.stringify(item));
        localStorage.setItem('lastId', JSON.stringify(this.prod.lastId));
        this.prod.vName = ''
        this.prod.vPrice = ''
        this.prod.vCategory = ''
        this.prod.vDescription = ''
        this.prod.vImg = ''
        let image = document.getElementById("image");
        image.style.display = "none";
      } else {
        console.log('Вы ввели не все данные!')
      }
    }
  },
  mounted() {
    if (localStorage.getItem('newProduct')) {
      this.newProduct = localStorage.getItem('newProduct');
    }
    if (localStorage.getItem('lastId')) {
      this.prod.lastId = localStorage.getItem('lastId');
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/scss/main-color.scss';

.admin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 80px;

  &_container {
    display: flex;
    flex-direction: column;
    width: 600px;

    &_data {
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: 2px solid $green;
      padding: 13px 10px;

      &._top {
        border-top: 2px solid $green;
      }
    }
  }
  &_addBtn {
    margin-top: 40px;
    background: transparent;
    color: $black;
    font-size: 20px;
    border: 2px solid $black;
    border-radius: 20px;
    padding: 15px;

    &:hover {
      border: 2px solid $green;
      color: $green$green;
    }
  }
}
h2 {
  height: 60px;
}
input {
  width: 69%;
  color: $black;
}
label {
  color: $black;
}
textarea {
  min-height: 80px;
  max-height: 250px;
  width: 83%;
}
#category {
  width: unset;
  margin-right: 10px;
}
.listCategor {
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-start;
}
</style>
