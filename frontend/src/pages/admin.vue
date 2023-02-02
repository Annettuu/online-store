<template>
  <div class="admin">
    <h2>Регистрация товара</h2>
    <div class="admin_container">
      <div class="admin_container_data _top">
        <h5>Название товара:</h5>
        <input
          type="text"
          required
        >
      </div>
      <div class="admin_container_data">
        <h5>Идентификатор:</h5>
        <h5>вставляется автоматически</h5>
      </div>
      <div class="admin_container_data">
        <h5>Цена:</h5>
        <input
          type="number"
          required
        >
        ₽
      </div>
      <div class="admin_container_data">
        <h5>Описание:</h5>
        <input
          type="text"
          required
        >
      </div>
      <div class="admin_container_data">
        <h5>Категория:</h5>
        <fieldset>
          <div>
            <div>
              <input
                type="radio"
                name="preference"
                id="front"
                value="frontend"
                checked
              >
              <label>
                Категория
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="preference"
                id="front"
                value="frontend"
              >
              <label>
                Категория
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="preference"
                id="front"
                value="frontend"
              >
              <label>
                Категория
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="preference"
                id="back"
                value="backend"
              >
              <label>
                Категория
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="admin_container_data">
        <h5>Изображение:</h5>
        <input>
      </div>
    </div>
    <button
      class="admin_addBtn"
    >
      Добавить товар
    </button>
  </div>
</template>

<script>
export default {
  name: 'admin'
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

  &_container {
    display: flex;
    flex-direction: column;
    width: 600px;

    &_data {
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: 2px solid $white;
      padding: 5px 10px;

      &._top {
        border-top: 2px solid $white;
      }
    }
  }
  &_addBtn {
    margin-top: 20px;
    background: transparent;
    color: $white;
    font-size: 20px;
    border: 2px solid $white;
    border-radius: 20px;
    padding: 10px;

    &:hover {
      border: 2px solid white;
      color: white;
    }
  }
}
h2 {
  height: 60px;
}
</style>
