<template>
  <bv-base title="Badge">

    <h2>あいうえおExample heading <b-badge>New</b-badge></h2>
    <h3>Example heading <b-badge>New</b-badge></h3>
    <h4>Example heading <b-badge>New</b-badge></h4>
    <h5>Example heading <b-badge>New</b-badge></h5>
    <h6>Example heading <b-badge>New</b-badge></h6>

    <b-button variant="primary" class="mr-1 my-1">
      Notifications <b-badge variant="light">4</b-badge>
    </b-button>

    <b-button variant="primary" class="mr-1 my-1">
      Profile
      <b-badge variant="light">
        9 <span class="sr-only">unread messages</span>
      </b-badge>
    </b-button>

    <div class="my-1">
      <b-badge variant="primary" class="mr-1">Primary</b-badge>
      <b-badge variant="secondary" class="mr-1">Secondary</b-badge>
      <b-badge variant="success" class="mr-1">Success</b-badge>
      <b-badge variant="danger" class="mr-1">Danger</b-badge>
      <b-badge variant="warning" class="mr-1">Warning</b-badge>
      <b-badge variant="info" class="mr-1">Info</b-badge>
      <b-badge variant="light" class="mr-1">Light</b-badge>
      <b-badge variant="dark" class="mr-1">Dark</b-badge>
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