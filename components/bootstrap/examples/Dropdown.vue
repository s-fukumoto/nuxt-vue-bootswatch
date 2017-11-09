<template>
  <bv-base title="Dropdown">

    <div class="my-1">
      <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Something else here...</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
    </div>

    <div class="my-1">
      <b-dropdown id="ddown-split" split text="Split Dropdown" class="m-2">
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else here...</b-dropdown-item>
      </b-dropdown>
    </div>

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