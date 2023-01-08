<template>
<div class="productList">
  <h2>Категория товара</h2>
  <b-carousel class="carousel slide" data-ride="carousel" controls>
    <div class="carousel-item active">
      <b-card-group class="groupProducts">
        <b-card>
          <img class="productFhoto" src="/images/img.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img.png">
          <b-card-text>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div class="carousel-item">
      <b-card-group class="groupProducts">
        <b-card>
          <img class="productFhoto" src="/images/img_2.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img_2.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img_2.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img_2.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img_2.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img_2.png">
          <b-card-text>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </b-carousel>
  <h2>Другая категория товара</h2>
  <b-carousel class="carousel slide" data-ride="carousel" controls>
    <div class="carousel-item active">
      <b-card-group class="groupProducts">
        <b-card>
          <img class="productFhoto" src="/images/img.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img.png">
          <b-card-text>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div class="carousel-item">
      <b-card-group class="groupProducts">
        <b-card>
          <img class="productFhoto" src="/images/img_2.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img_2.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img_2.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img_2.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img_2.png">
          <b-card-text>
          </b-card-text>
        </b-card>
        <b-card>
          <img class="productFhoto" src="/images/img_2.png">
          <b-card-text>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </b-carousel>
</div>
</template>

<script>
export default {
  name: "productList",
}
</script>

<style scoped>
.productList {
  width: 100%;
  padding: 40px 200px;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.productFhoto {
  width: 200px;
  height: 250px;
}
h2 {
  color: #887874;
  margin-bottom: 35px;
}
</style>
