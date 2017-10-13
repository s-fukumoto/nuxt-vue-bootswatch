<template>
  <section class="container">
    <bwheadernavbar/>
    <!--<bwselector/>-->
    <br>
    <bootstrapexamples/>
  </section>
</template>

<script>
import bwheadernavbar from '~/components/bootswatch/HeaderNavbar.vue'
import bwselector from '~/components/bootswatch/Selector.vue'
import bootstrapexamples from '~/components/Examples.vue'

export default {
  head: {
    title: 'Bootswatch Theme Changer'
  },
  components: {
    bwheadernavbar,
    bwselector,
    bootstrapexamples
  }
}
</script>
