<template>
  <div class="container">
    <a class="anchor-button" :href="`javascript:${getJavascriptCode}`"
      >Add to Design File
    </a>
    <!-- <DesignFile /> -->
  </div>
</template>

<script>
// import DesignFile from "@/components/DesignFile.vue";
// import js from '../js/script'

export default {
  components: {
    // DesignFile,
  },

  computed: {
    getJavascriptCode() {
      let text = `
          function createElement(){
          let htmlContent = '
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
                  
                      <button class="btn-cancle" onclick="cancleFile()">Cancle</button>
                    </div>
                </div> ';
              
              
              
              
              
          let body = document.body;
          let head = document.head;
              
          let ele = document.createElement("iframe");
          ele.id = 'design-iframe';
          body.appendChild(ele);
          let iframe = document.getElementById('design-iframe');
          let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
          let iframeBody = iframeDocument.body;
              
          let styleFile = iframeDocument.createElement('style');
          styleFile.textContent = '
          html{
            font-size:10px;
          }
          .file_container {
            width: 100%;
            margin:0 auto;
            min-height: 100vh;
            max-height: max-content;
            margin: 0 auto;
            margin-left: -60rem;
            padding: .1rem;
            position: fixed;
            top: 0;
            right: 0;
          }
          .product {
            width: 90%;
            margin: 0 auto;
            height: 45vh;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 1rem 1.5rem;
            background-color: #e8f4f5;
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
          }';
          
          iframeDocument.head.appendChild(styleFile);

            ele.style.width = '25vw';
            ele.style.height = '100vw';
            ele.style.position = 'fixed';
            ele.style.top = '0';
            ele.style.right = '0';
            ele.style.border = 'none';
            ele.style.zIndex = '9999';
        
          
          iframeBody.innerHTML  =htmlContent;

          iframeBody.appendChild(document.createElement("script")).innerText='
          
            function cancleFile(){
                window.alert("click On Delete Button")
            }
          '

          }
        
          if (document.readyState === "complete") {
            createElement()
          } else {
            alert("Please wait until the page loads.");
          }
          `;

      return text;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
.anchor-button {
  padding: 1.3rem 2.6rem;
  font-size: 2rem;
  color: white;
  text-decoration: none;
  background-color: #f74545;
  border-radius: 0.5rem;
  font-weight: 550;

  &:hover {
    cursor: pointer;
    background-color: #f55d5dda;
  }

  &:focus {
    outline: none;
  }

  .shubham {
    color: navy;
  }
}
</style>
