<template>
  <div class="home-container">
    <a class="anchor-button" :href="`javascript:${getJavascriptCode}`"
      >Add to Design File
    </a>
  </div>
</template>

<script>
import data from "../data/data";
export default {
  computed: {
    getJavascriptCode() {
      return `
      function setPath(element) {
        const pathArray = [];
      let currentElement = element;

        while (currentElement !== document.body || null) {
          let elementSelector = currentElement.tagName.toLowerCase();

          if(currentElement.id && !currentElement.id.includes(':') && !currentElement.id.includes('#')){
            elementSelector = '#' + currentElement.id;
          }
          pathArray.unshift(elementSelector);
          currentElement = currentElement.parentNode;
        }
      return pathArray.join(' > ');
    };

    
      if (document.readyState === "complete") {
        let body = document.body;
        let head = document.head;
        let container = document.createElement('div');
        container.id = 'container';
        let iframe = document.createElement('iframe');
        iframe.id = 'iframe';
        iframe.src = 'https://13a4-2409-4081-1e0e-cd0b-c0a5-4221-e1d-845f.ngrok-free.app';
        container.appendChild(iframe);
        document.body.appendChild(container);

        iframe.addEventListener('load', ()=> {
          let currentUser = window.location.hostname;
          let currentURL = window.location.href;
          if(currentUser === 'localhost'){
            iframe.contentWindow.postMessage({key:currentUser,value:currentURL}, "*");
          }else if(currentUser === 'www.wayfair.com'){
            iframe.contentWindow.postMessage({key:currentUser,value:currentURL}, "*");
          }
        });
        
        
        window.addEventListener("message", (event) => {
          const { action, key } = event.data;
                
          if (action === "getUserData") {
            let browserData = {};
          
            for (let [x, value] of Object.entries(key)) {
              if (value !== "" && x !== "id" && x !== "Link" && x !== "Corouser") {
                browserData[x] = document.querySelector(value).innerText;
              } else if (x === "Corouser") {
                let imgArray = Array.from(document.querySelectorAll(value));
                imgArray = imgArray.map((val) => val.src);
                browserData[x] = imgArray;
              } else {
                browserData[x] = key[x];
              }
            }
          
            event.source.postMessage({ key: "browserData", value: browserData }, "*");
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
              setToLocalStorage("imgArray", JSON.stringify(set));
              event.source.postMessage({ key: "imgData", value: set }, "*");
            } else {
              window.alert("Please select a proper image");
            }
            document.body.style.cursor = "default";
          }
        
          if (action === "select image") {
            document.body.style.cursor = "crosshair";
            document.body.addEventListener("click", handleImgClick, { once: true });
            return;
          }
        
          function handleTextClick(e) {
            const clickedElement = e.target;
            const selectedText = clickedElement.innerText;
            
            if (selectedText !== "" && selectedText !== undefined) {
              document.body.style.cursor = "pointer";
              console.log(key,setPath(e.target));
              document.body.style.cursor = "default";
              event.source.postMessage({ key: "updatedKey", value: {objKey:key,path:setPath(e.target)} }, "*");
            }
          }
        
          if (action === "select text") {
            document.body.style.cursor = "crosshair";
            document.body.addEventListener("click", handleTextClick, { once: true });
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
../data/userData
