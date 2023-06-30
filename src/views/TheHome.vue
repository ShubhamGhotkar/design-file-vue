<template>
  <div class="home-container">
    <a class="anchor-button" :href="`javascript:${getJavascriptCode}`"
      >Add to Design File
    </a>
  </div>
</template>

<script>
// import { data } from "../data/data";
// import { defaultConfig } from "../data/defaultConfig";

// const siblings = Array.from(currentElement.parentNode.children).filter(
//   (sibling) => sibling.tagName === currentElement.tagName
// );

// if (siblings.length > 1) {
//   const index = siblings.indexOf(currentElement) + 1;
//   elementSelector += ":nth-child(" + index + ")";
// }

//

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {},
  methods: {
    setNewData(data) {
      this.data = data;
      console.log(this.data);
    },
  },
  computed: {
    getJavascriptCode() {
      return `
      if (document.readyState === "complete") {

        const script = document.createElement("script");
        script.src = "https://8719-2409-4081-1e0e-cd0b-9d53-f6ad-5c35-d6f0.ngrok-free.app/shubham.js";
        script.id = "browserScript";

        document.body.appendChild(script);

        let body = document.body;
        let head = document.head;
        let container = document.createElement('div');
        container.id = 'container';
        let iframe = document.createElement('iframe');
        iframe.id = 'iframe';
        iframe.src = 'https://8719-2409-4081-1e0e-cd0b-9d53-f6ad-5c35-d6f0.ngrok-free.app';
        container.appendChild(iframe);
        document.body.appendChild(container);


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
