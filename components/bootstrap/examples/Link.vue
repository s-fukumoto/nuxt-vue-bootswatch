<template>
  <bv-base title="Link">

    <div class="my-1">
      <b-link href="#foo">Link</b-link>
    </div>

    <template class="my-1">
      <b-breadcrumb :items="items"/>
    </template>

  </bv-base>
</template>

<script>
import BvBase from './_Base.vue'

export default {
  components: {
    BvBase
  },
  data () {
    return {
      items: [
        {
          text: 'Admin',
          href: '#'
        },
        {
          text: 'Manage',
          href: '#'
        },
        {
          text: 'Library',
          active: true
        }
      ]
    }
  }
}
</script>