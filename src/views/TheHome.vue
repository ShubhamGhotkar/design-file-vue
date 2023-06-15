<template>
  <div class="container">
    <a class="anchor-button" :href="`javascript:${getJavascriptCode}`"
      >Add to Design File
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log("click");
    },
  },

  computed: {
    getJavascriptCode() {
      return `
      if(document.readyState==='complete'){
        alert(document.querySelector("div").innerHTML)
      }else{
        alert('Please wait until the page loads.')
      }
      `;
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
}
</style>
