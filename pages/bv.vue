<template>
  <section class="container">
    <bv-examples/>
  </section>
</template>

<script>
import BvExamples from '~/components/bootstrap/examples/All.vue'

export default {
  head: {
    title: 'Bootstrap-vue compornents'
  },
  layout: 'bootstrap',
  components: {
    BvExamples
  }
}
</script>
