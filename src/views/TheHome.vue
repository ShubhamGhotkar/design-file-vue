<template>
  <div class="home-container">
    <a class="anchor-button" :href="`javascript:${getJavascriptCode}`"
      >Add to Design File
    </a>
    <DesignFile />
  </div>
</template>

<script>
import DesignFile from "@/components/DesignFile.vue";

export default {
  data() {
    return {
      imagesrc: [
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

        "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

        "https://images.unsplash.com/photo-1611967164521-abae8fba4668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

        "https://images.unsplash.com/photo-1565374395542-0ce18882c857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvZmFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      ],
    };
  },
  components: {
    DesignFile,
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
