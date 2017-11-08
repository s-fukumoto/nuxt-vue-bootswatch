<template>
  <section class="container">
    <bw-examples/>
  </section>
</template>

<script>
import BwExamples from '~/components/bootswatch/examples/All.vue'

export default {
  head: {
    title: 'Bootswatch Theme Changer'
  },
  layout: 'bootswatch',
  components: {
    BwExamples
  }
}
</script>
