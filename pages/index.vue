<template>
  <section class="container">
    <examples/>
  </section>
</template>

<script>
import examples from '~/components/bootswatch/examples/All.vue'

export default {
  head: {
    title: 'Bootswatch Theme Changer'
  },
  layout: 'bootswatch',
  components: {
    examples
  }
}
</script>
