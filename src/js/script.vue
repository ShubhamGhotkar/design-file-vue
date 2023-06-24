<!-- 
  
  <template>
  <div class="home-container">
    <a class="anchor-button" :href="`javascript:${getJavascriptCode}`"
      >Add to Design File
    </a>
  </div>
</template>


   e.source.postMessage({ key: "textData", value: setValue }, '*'); 
  const heading = document.querySelector('[data-hb-id="Heading"]');

          const description = document.querySelector('[data-enzyme-id="Collapse-Collapsible"]');

          const price = document.querySelector('[data-enzyme-id="PriceBlock"]');

          const SKU = document.querySelector('[data-enzyme-id="breadcrumbList"]');

          const corouser = document.querySelectorAll('[data-enzyme-id="InitialImage"]');

          if(heading && description &&  price && SKU && corouser){
            console.log("Heading", heading.innerText);
            console.log("Description", description.innerText);
            console.log("Price", price.innerText);
            console.log("SKU", SKU.innerText);
            corouser.forEach(img=>console.log(img.src));
          }
  

<script>
import { userData } from "../data/userData";

export default {
  computed: {
    getJavascriptCode() {
      let keyObj = {
        id: window.location.href,
        VendorProductName: "[data-hb-id=Heading]",
        ClientFacingProductName: "",
        Vendor: "",
        Link: window.location.href,
        Category: "",
        Tags: "",
        MSRP: "",
        SKU: "[data-enzyme-id=breadcrumbList]",
        Price: "[data-enzyme-id=PriceBlock]",
        Description: "[data-enzyme-id=Collapse-Collapsible]",
        Dimensions: "",
        MaterialFinish: "",
        EstLeadTime: "",
        EstShippingCost: "",
        GeneralNotes: "",
        Corouser: "[data-enzyme-id=InitialImage]",
      };
      return `

      

      if (document.readyState === "complete") {

        document.addEventListener('load', ()=>{
          ${userData.push(keyObj)};
          

        });


          

              localStorage.setItem('imgArray', JSON.stringify([]));
              let imgData = JSON.parse(localStorage.getItem('imgArray'));
              let set = new Set(imgData);

              localStorage.setItem('textArray', JSON.stringify({
                        VendorProductName: "",
                        ClientFacingProductName:"",
                        Vendor:"",
                        Link:"",
                        Category:"",
                        Tags:"",
                        MSRP:"",
                        SKU:"",
                        Description:"",
                        Dimensions:"",
                        MaterialFinish:"",
                        EstLeadTime:"",
                        EstShippingCost:"",
                        GeneralNotes:"",
              }));
              let setValue =JSON.parse(localStorage.getItem('textArray'));


                  let body = document.body;
                  let head = document.head;

                  let container = document.createElement('div');
                  container.id = 'container';

                  let iframe = document.createElement('iframe');
                  iframe.id = 'iframe';

                  iframe.src = 'https://c6b4-2409-4081-e10-dc65-95b-4a11-4f2b-62e7.ngrok-free.app?data1=arr';

                  container.appendChild(iframe);

                  document.body.appendChild(container);

                  iframe.addEventListener('load', function() {
                    iframe.contentWindow.postMessage({key:"hello frame",value:"123"}, "*");
                  });
                  
                  
                  
                  
                  window.addEventListener("message", function (event) {
                    const { action, key } = event.data;
                    
                    
                    if (action === "save change") {
                      
                    }

                    if (action === "delete frame") {
                      let frameCon = document.querySelector("#container");
                      frameCon.remove();
                    }

                    function handleImgClick(e) {
                      let clickEle = e.target;
                      if (clickEle.tagName === "IMG") {
                        const imgSrc = clickEle.src;
                        set.add(imgSrc);
                        setToLocalStorage('imgArray', JSON.stringify(set));
                        event.source.postMessage({ key: "imgData", value: set}, '*');
                      } else {
                        window.alert("please select proper Image");
                      }
                      document.body.style.cursor = 'default';
                      document.body.removeEventListener('click', handleImgClick);
                    }


                    if (action === 'select image') {
                      document.body.style.cursor = "crosshair";
                      document.body.addEventListener('click', handleImgClick);
                      return;
                    }

                    function handleTextClick(e) {
                      const clickedElement = e.target;
                      const selectedText = clickedElement.innerText;

                      console.log(e.target.id,"  and  ",e.target.className);

                      if (selectedText !== '' && selectedText !== undefined) {
                        document.body.style.cursor = "pointer";
                        setValue[key] = selectedText;
                        console.log(key);
                        let  localData = JSON.parse(localStorage.getItem('textArray'));

                        localData[key] = selectedText;

                        localStorage.setItem('textArray', JSON.stringify(localData));

                        document.body.style.cursor = "default";
                        event.source.postMessage({ key: "textData", value: JSON.parse(localStorage.getItem('textArray')) }, '*');

                      }
                      document.body.removeEventListener('click', handleTextClick);
                    }

                    if (action === 'select text') {
                      document.body.style.cursor = "crosshair";
                      document.body.addEventListener('click', handleTextClick);
                    }
                  });




                  let slider = document.createElement('div');
                  slider.classList = 'slider';

                  slider.innerHTML = '
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

                  ';

                  slider.addEventListener('click',()=>{
                    let open = document.querySelector('.open');
                    let close = document.querySelector('.close');
                    iframe.classList.toggle('wrap');
                    slider.classList.toggle('slideBtn');
                    open.classList.toggle('active');
                    close.classList.toggle('active');
                  });

                  setTimeout(()=>{
                    container.appendChild(slider);
                  },1000);


                  let styleFile = document.createElement('style');

                  styleFile.textContent = '
                  html{
                    font-size:10px;
                  }

                  #container{
                    height:100vh;
                    width:25vw;

                    position:fixed;
                    top:0;
                    right:0;
                    z-index:999999999;
                  }

                  iframe{
                    height:100%;
                    width:100%;
                    border:none;
                    box-shadow: 0 0 10px gray;
                    z-index:999999999;
                  }

                  .slider{
                    height: 3.5rem;
                    width: 3.5rem;
                    background-color: #f74545;
                    position: absolute;
                    top: 2rem;
                    left: -3.5rem;

                    border-radius: 1rem 0 0 1rem;
                    cursor:pointer;

                    display:grid;
                    place-items:center;
                    z-index:999999999;
                    box-shadow: 0 0 10px gray;
                  }

                  .slideBtn{
                    left: 35rem !important;
                  }

                  .slider-svg{
                    height:2rem;
                    width:2rem;
                    stroke:white;
                    stroke-width:4;

                    display:none;
                  }

                  .wrap{
                    width:0%;
                  }

                  .active{
                    display:block;
                  }
                  ';
                  head.appendChild(styleFile);



              } else {
                  alert("Please wait until the page loads.");
                }
      `;
    },
  },
};
</script>

<style lang="scss" scoped>
.home-container {
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
}
</style>
../data/userData  -->
