<template>
  <section class="container">
    <examples/>
  </section>
</template>

<script>
import examples from '~/components/bv/examples/All.vue'

export default {
  head: {
    title: 'Bootstrap-vue compornents'
  },
  layout: 'bv',
  components: {
    examples
  }
}
</script>
