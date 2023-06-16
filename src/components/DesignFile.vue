<template>
  <div class="file_container">
    <div class="product">
      <p class="product_info">Product Image</p>
      <img
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        alt="product_img"
        class="product_img"
      />
      <p class="product_info">Clip additional images:</p>
      <div class="product_img-click"></div>
      <p class="product_info">Where do you want to save this item?</p>
      <input type="text" class="product_input" />
      <p class="product_info">Vendor Product Name:</p>
      <textarea class="product_info text-area" cols="30" rows="4"></textarea>
      <p class="product_info">Client-Facing Product Name:</p>
      <input type="text" class="product_input" />
      <p class="product_info">Vendor:</p>
      <input type="text" class="product_input" />
      <p class="product_info">Link:</p>
      <input type="text" class="product_input" />
      <p class="product_info">Category:</p>
      <input type="text" class="product_input" />
      <p class="product_info">Tags:</p>
      <input type="text" class="product_input" />
      <p class="product_info">MSRP:</p>
      <input type="text" class="product_input" />
      <p class="product_info">SKU:</p>
      <input type="text" class="product_input" />
      <p class="product_info">Description:</p>
      <textarea class="product_info text-area" cols="30" rows="4"></textarea>

      <p class="product_info">Dimensions:</p>
      <input type="text" class="product_input" />
      <p class="product_info">Material/Finish:</p>
      <input type="text" class="product_input" />
      <p class="product_info">Est. Lead Time:</p>
      <input type="text" class="product_input" />
      <p class="product_info">Est. Shipping Cost:</p>
      <input type="text" class="product_input" />
      <p class="product_info">General Notes:</p>
      <textarea class="product_info text-area" cols="30" rows="2"></textarea>

      <button class="btn-cancle">Cancle</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.file_container {
  width: 25%;
  min-height: 100vh;
  max-height: max-content;
  margin: 0 auto;
  margin-left: -60rem;
  position: fixed;
  top: 0;
  right: 0;
}
.product {
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  padding: 1rem 0.3rem;
  background-color: #e8f4f5;
  padding: 2rem;
}
.product_info {
  font-size: 1.7rem;
  font-weight: 400;
  padding: 1.5rem 0 0.5rem 0;
  color: gray;
}
.product_img {
  width: 100%;
}
.product_img-click {
  height: 4rem;
  width: 5rem;
  border: 1px dashed gray;
  margin-left: 1.2rem;
}
.product_input {
  width: 100%;
  padding: 1rem 0.2rem;
  border-radius: 0.8rem;
  border: 2px solid rgb(212, 211, 211);
}
.text-area {
  width: 100%;
  resize: none;
  border-radius: 0.8rem;
  overflow-y: auto;
  border: 2px solid rgb(212, 211, 211);
}

.btn-cancle {
  padding: 1rem 1.6rem;
  border: none;
  margin-top: 1.5rem;
  color: #00b2c2;
  background-color: #e8f4f5;
  font-size: 2rem;
  margin-left: 23rem;
  cursor: pointer;
}
</style>
