<template>
  <bv-base title="List Group">

    <b-list-group class="my-1">
      <b-list-group-item active>
        Awesome list
      </b-list-group-item>
      <b-list-group-item href="#">
        Action links are easy
      </b-list-group-item>
      <b-list-group-item>
        This is a text only item
      </b-list-group-item>
    </b-list-group>

  </bv-base>
</template>

<script>
import BvBase from './_Base.vue'

export default {
  components: {
    BvBase
  }
}
</script>