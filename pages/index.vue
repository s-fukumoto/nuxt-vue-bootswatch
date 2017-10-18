<template>
  <section class="container">
    <bwheadernavbar/>
    <bwselector/>
    <br>
    <bootswatchexamples/>
  </section>
</template>

<script>
import bwheadernavbar from '~/components/bootswatch/HeaderNavbar.vue'
import bwselector from '~/components/bootswatch/Selector.vue'
import bootswatchexamples from '~/components/bootswatch/examples/All.vue'

export default {
  head: {
    title: 'Bootswatch Theme Changer'
  },
  components: {
    bwheadernavbar,
    bwselector,
    bootswatchexamples
  }
}
</script>
