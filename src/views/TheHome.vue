<template>
  <div class="home-container">
    <a class="anchor-button" :href="`javascript:${getJavascriptCode}`"
      >Add to Design File
    </a>
    <!-- <DesignFile /> -->
    <BrowserCliperVue />
  </div>
</template>

<script>
// import DesignFile from "@/components/DesignFile.vue";
import BrowserCliperVue from "@/components/BrowserCliper.vue";

export default {
  components: {
    // DesignFile,
    BrowserCliperVue,
  },

  computed: {},
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
