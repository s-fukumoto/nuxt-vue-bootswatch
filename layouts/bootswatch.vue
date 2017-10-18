<template>
  <div>
    <header>
      <bwnavbar/>
    </header>
    <nuxt/>
  </div>
</template>

<script>
import bwnavbar from '~/components/bootswatch/Navbar.vue'
import bwselector from '~/components/bootswatch/Selector.vue'

export default {
  components: {
    bwnavbar,
    bwselector
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

header {
  width: 100%;
  position: fixed;
  z-index: 1;
  transition: all 0.5s ease-in-out;
}
</style>
