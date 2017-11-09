<template>
  <bv-base title="Embed">

    <div class="my-1">
      <b-embed type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              allowfullscreen
      ></b-embed>
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