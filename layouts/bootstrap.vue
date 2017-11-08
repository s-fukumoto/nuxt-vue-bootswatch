<template>
  <div>
    <header>
      <bv-navbar/>
    </header>
    <nuxt/>
  </div>
</template>

<script>
import BvNavbar from '~/components/bootstrap/Navbar.vue'

export default {
  components: {
    BvNavbar
  }
}
</script>

<style>
header {
  width: 100%;
  z-index: 1;
  transition: all 0.5s ease-in-out;
}
</style>
