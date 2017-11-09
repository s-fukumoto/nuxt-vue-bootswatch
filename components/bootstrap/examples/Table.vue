<template>
  <bv-base title="Table">

    <b-table class="my-1" hover :items="items"></b-table>

  </bv-base>
</template>

<script>
import BvBase from './_Base.vue'

const items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', _rowVariant: 'danger' },
  { isActive: true,
    age: 40,
    first_name: 'Thor',
    last_name: 'Macdonald',
    _cellVariants: {
      isActive: 'success',
      age: 'info',
      first_name: 'warning'
    }
  },
  { isActive: false, age: 29, first_name: 'Dick', last_name: 'Dunlap' }
]

export default {
  components: {
    BvBase
  },
  data () {
    return {
      items: items
    }
  }
}
</script>