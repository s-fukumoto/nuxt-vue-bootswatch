<template>
  <div>
    <header>
      <bvnavbar/>
    </header>
    <nuxt/>
  </div>
</template>

<script>
import bvnavbar from '~/components/bv/Navbar.vue'

export default {
  components: {
    bvnavbar
  }
}
</script>

<style>
header {
  width: 100%;
  position: fixed;
  z-index: 1;
  transition: all 0.5s ease-in-out;
}
</style>
