<template>
  <bv-base title="Tooltip">

    <b-container fluid class="my-1">
      <b-row>
        <b-col md="6" class="py-4">
          <b-btn id="exButton1" variant="outline-success">Live chat</b-btn>
        </b-col>
        <b-col md="6" class="py-4">
          <b-btn id="exButton2" variant="outline-success">Html chat</b-btn>
        </b-col>
      </b-row>

      <!-- Tooltip title specified via prop title -->
      <b-tooltip target="exButton1" title="Online!"></b-tooltip>

      <!-- HTML title specified via default slot -->
      <b-tooltip target="exButton2" placement="bottom">
        Hello <strong>World!</strong>
      </b-tooltip>
    </b-container>

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