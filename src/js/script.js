export function getJavascriptCode() {
  let text = `
      
          function createElement(){
          let htmlContent = '
          
          <div class="main-container">
    <div class="slider" onclick="handleslider()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="slider-svg open "
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="slider-svg close active"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>

    <div class="file_container">
      <div class="product">
        <div class="label-container">
          <label class="product_info mg">Product Image</label>
          <label class="product_info mg refresh-btn"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="refresh-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            <span class="refresh-text"> Refresh</span></label
          >
        </div>
        <div class="img-containe">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="product_img"
            class="product_img current-img"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="right-icon icon"
            onclick="handleSliderRight();"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="left-icon icon"
            onclick="handleSliderLeft();"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <label class="product_info mg">Clip additional images:</label>
        <div class="product_img-click">
          <div class="product_img-click-dash">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="dash-curser"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
              />
            </svg>
          </div>
        </div>
        <label class="product_info mg"
          >Where do you want to save this item?</label
        >
        <select class="product_input dropdown">
          <option disabled selected value="">My Library</option>
        </select>

        <label class="product_info mg">Vendor Product Name:</label>
        <textarea class="product_info text-area" cols="30" rows="4"></textarea>
        <div class="label-container">
          <label class="product_info mg">Client-Facing Product Name:</label>
          <label class="product_info mg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="label-svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </label>
        </div>
        <input type="text" class="product_input" />
        <label class="product_info mg">Vendor:</label>
        <input type="text" class="product_input" />
        <label class="product_info mg">Link:</label>
        <input type="text" class="product_input" />
        <label class="product_info mg">Category:</label>
        <select class="product_input dropdown">
          <option disabled selected value="">
            Choose or Create new category...
          </option>
          <option value="Appliances">Appliances</option>
          <option value="Bed & Bath">Bed & Bath</option>
          <option value="Furniture">Furniture</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Lightning">Lightning</option>
          <option value="Outdoor">Outdoor</option>
        </select>
        <label class="product_info mg">Tags:</label>
        <input type="text" class="product_input" />
        <div class="price-container">
          <div class="price-container-itm-1">
            <div class="price-label-div">
              <span class="product_info mg font-light">Unit Price:</span>
              <div class="select-div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="dash-curser"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
                  />
                </svg>
              </div>
            </div>
            <input
              type="text"
              class="product_input pd"
              placeholder="$ 1299.99"
            />
          </div>
          <div class="price-container-itm-2">
            <label class="product_info mg markup-div font-light">Markup:</label>
            <input type="text" class="product_input pd" placeholder="0.0 %" />
          </div>
          <div class="price-container-itm-3">
            <label class="product_info mg font-light">Client price:</label>
            <input
              type="text"
              class="product_input pd"
              placeholder="$ 1299.99"
            />
          </div>
        </div>
        <div class="select-div-container">
          <label class="product_info mg">MSRP:</label>
          <input type="text" class="product_input" />
          <div class="select-div select-position">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="dash-curser"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
              />
            </svg>
          </div>
        </div>
        <div class="select-div-container">
          <label class="product_info mg">SKU:</label>
          <input type="text" class="product_input" />
          <div class="select-div select-position">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="dash-curser"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
              />
            </svg>
          </div>
        </div>
        <div class="select-div-container">
          <label class="product_info mg">Description:</label>
          <textarea
            class="product_info text-area"
            cols="30"
            rows="4"
          ></textarea>
          <div class="select-div select-position">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="dash-curser"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
              />
            </svg>
          </div>
        </div>

        <div class="select-div-container">
          <label class="product_info mg">Dimensions:</label>
          <input type="text" class="product_input" />
          <div class="select-div select-position">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="dash-curser"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
              />
            </svg>
          </div>
        </div>
        <div class="select-div-container">
          <label class="product_info mg">Material/Finish:</label>
          <input type="text" class="product_input" />
          <div class="select-div select-position">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="dash-curser"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
              />
            </svg>
          </div>
        </div>

        <div class="label-container">
          <label class="product_info mg">Est. Lead Time:</label>
          <label class="product_info mg font-blur">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="label-svg mar-t"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
            Not seen by clients</label
          >
        </div>
        <input type="text" class="product_input" />
        <div class="label-container">
          <label class="product_info mg">Est. Shipping Cost:</label>
          <label class="product_info mg font-blur">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="label-svg mar-t"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
            Not seen by clients</label
          >
        </div>
        <input type="text" class="product_input" />
        <div class="select-div-container">
          <div class="label-container">
            <label class="product_info mg">General Notes:</label>
            <label class="product_info mg font-blur">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="label-svg mar-t"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
              Not seen by clients</label
            >
          </div>
          <textarea
            class="product_info text-area"
            cols="30"
            rows="4"
          ></textarea>
          <div class="select-div select-position mar-t">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="dash-curser"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
              />
            </svg>
          </div>
        </div>

        <div class="flex btn-container">
          <button class="btn-cancle save-btn">Save Change</button>
          <button class="btn-cancle" onclick="cancleFile(this)">Cancle</button>
        </div>
      </div>
    </div>
  </div>
          
          ';
              
              
              
              
              
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

          body{
            background="orange"
          }
         .main-container{
          width:100%;
          display:flex;
          margin-top:-1rem;
         }
          .wrap {
  display:none !important;
}
.slider {
  height: 3rem;
  width: 3rem;
  background-color: #f74545;
  border-radius: 0.7rem 0 0 0.7rem;
  cursor: pointer;
  margin-top:2.5rem;
  z-index:999999;
  box-shadow: 0 0 10px gray;
}

.slider-inactive{
  position:relative;
  top:0;
  right:-39rem;
  transition: all 0.9s ease-in-out;
}

.active{
  display:block !important;
}

.slider-svg {
  height: 100%;
  width: 100%;
  stroke: white;
  stroke-width: 3;
  display:none;
}
.file_container {
  width: 81%;
  height: 100vh;


  box-shadow: 2px 2px 20px gray;
  background-color: #e8f4f5;
}
.product {
  width: 100%;
  
  height: 47vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 4rem 0 2.5rem;
  background-color: #e8f4f5;
}

.product_info {
  font-size: 1.7rem;
  font-weight: 400;
  color: gray;
}

.img-containe {
  margin-top: 1.5rem;
}
.product_img {
  width: 29rem;
  height: 29rem;
  border: 1px solid rgb(159, 158, 158);
}
.product_img-click {
  height: 5rem;
  width: 5rem;
  border: 1px solid rgb(172, 172, 172);
  margin-top: 0.5rem;

  display: grid;
  place-items: center;
}
.product_img-click-dash {
  height: 2rem;
  width: 2rem;
  border: 2px dashed gray;
  position: relative;
}
.dash-curser {
  height: 1.3rem;
  width: 1.3rem;
  stroke: gray;
  font-weight: bolder;
  position: absolute;
  bottom: -0.7rem;
  right: -0.7rem;
  stroke-width: 4;
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
  color: #00b2c2;
  background-color: #e8f4f5;
  font-size: 2rem;
  cursor: pointer;
}

.btn-container {
  width: 23vw;
  padding: 4rem 0;
}
.save-btn {
  background-color: #f74545;
  color: white;
  padding: 1rem 3rem;
}

.dropdown {
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem;
  cursor: pointer;
  color: gray;
}
.dropdown:focus,
.dropdown:active {
  border: 1px solid gray;
}
.dropdown-input {
  width: 60%;
  padding: 1rem;
  border: 1px solid gray;
}
.img-containe {
  position: relative;
}
.icon {
  position: absolute;
  height: 2.8rem;
  width: 2.8rem;
  top: 50%;
  font-weight: bold;
  cursor: pointer;
}
.icon:hover {
  background-color: rgba(154, 151, 151, 0.137);
  border-radius: 100px;
}
.left-icon {
  left: 0;
  transform: translate(-100%, -65%);
}
.right-icon {
  right: 0;
  transform: translate(50%, -50%);
}

.select-div {
  width: 2rem;
  height: 2rem;
  border: 2px dashed gray;
  transform: translateY(20%);

  position: relative;
}
.price-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.price-label-div {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.price-container-itm-1 {
  flex: 0 0 45%;
  display: grid;
  gap: 0.5rem;
}
.price-container-itm-2 {
  flex: 0 0 30%;
  display: grid;
  gap: 0.5rem;
}
.price-container-itm-3 {
  flex: 0 0 25%;
  display: grid;
  gap: 0.5rem;
}
.label-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.label-svg {
  height: 2rem;
  width: 2rem;
  cursor: pointer;
}

.font-blur {
  font-weight: 500;
  color: rgb(174, 174, 174);
  font-size: 1.5rem;
}

.font-light {
  font-size: 1.4rem;
}
.mg {
  display: block;

  margin-top: 1.8rem;
  margin-bottom: 0.3rem;
}
.pd {
  padding: 1rem;
}

.flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.select-div-container {
  position: relative;
}
.select-position {
  position: absolute;
  top: 2.5rem;
  right: -2.8rem;
  cursor: pointer;
}
.mar-t {
  top: 7rem;
}

.refresh-btn {
  color: red;
  font-weight: 600;
}
.refresh-icon {
  height: 2.2rem;
  width: 2.2;
  stroke: #00b2c2;
  stroke-width: 2;
  transform: translateY(0.5rem);
  cursor: pointer;
}
.refresh-icon:hover {
  background-color: #00b2c21c;
  border-radius: 100px;
}

.refresh-text {
  font-size: 1.7rem;
  color: #00b2c2;
}
          
          ';
          
          iframeDocument.head.appendChild(styleFile);

            ele.style.width = '28vw';
            ele.style.height = '100vw';
            ele.style.position = 'fixed';
            ele.style.top = '0';
            ele.style.right = '0';
            ele.style.border = 'none';
            ele.style.zIndex = '99';
            
        
          
          iframeBody.innerHTML  =htmlContent;
          
          iframeBody.appendChild(document.createElement("script")).innerText='

            const closeSvg = document.querySelector(".close");
            const openSvg = document.querySelector(".open");

            
            
            let images = [
              "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

              "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

              "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

              "https://images.unsplash.com/photo-1611967164521-abae8fba4668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

              "https://images.unsplash.com/photo-1565374395542-0ce18882c857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvZmFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"

            ];
            let imgIndex = 0;
            const currentImg = document.querySelector(".current-img");

            currentImg.src = images[imgIndex];
           
            function handleSliderRight(){
              if(imgIndex < images.length-1){
                imgIndex++;
                currentImg.src = images[imgIndex];
              }
              else{
                imgIndex = 0;
              }
            };

            function handleSliderLeft(){
              if(imgIndex > 0){
                imgIndex--;
                currentImg.src = images[imgIndex];
              }
              else{
                imgIndex = images.length-1;
              }
            };
            
            function cancleFile(e){
              const iframeEle = parent.document.querySelector("#design-iframe");
              iframeEle.remove();
            };


            function handleslider(){
              let slider = document.querySelector(".file_container");
              slider.classList.toggle("wrap");
               let sliderBtn = document.querySelector(".slider");

              sliderBtn.classList.toggle("slider-inactive");
              openSvg.classList.toggle("active");
              closeSvg.classList.toggle("active");
            };

            
          '

          }
        
          if (document.readyState === "complete") {
            createElement();
            console.log(document.querySelectorAll("img"));
            
          } else {
            alert("Please wait until the page loads.");
          }
          `;

  return text;
}
