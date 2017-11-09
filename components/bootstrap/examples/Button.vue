<template>
  <bv-base title="Button">

    <div class="row my-1">
      <template v-for="variant in ['primary','secondary','success','outline-success','warning','danger','link']">
        <div class="col-md-4 pb-2" v-for="size in ['sm','','lg']" :key="`${variant}_${size}`">
          <b-button :size="size" :variant="variant">
            {{variant}} {{size}}
          </b-button>
        </div>
      </template>
    </div>

    <div class="my-1">
      <b-button-group>
        <b-button>Button 1</b-button>
        <b-button>Button 2</b-button>
        <b-button>Button 3</b-button>
        <b-button>Button 4</b-button>
        <b-button>Button 5</b-button>
      </b-button-group>
      <br><br>
      <b-button-group>
        <b-button variant="success">Success</b-button>
        <b-button variant="info">Info</b-button>
        <b-button variant="warning">Warning</b-button>
        <b-button variant="primary">Primary</b-button>
        <b-button variant="danger">Danger</b-button>
        <b-button variant="link">Link</b-button>
      </b-button-group>
    </div>

    <div class="my-1">
      <b-button-toolbar key-nav  aria-label="Toolbar with button groups">
        <b-button-group class="mx-1">
          <b-btn>&laquo;</b-btn>
          <b-btn>&lsaquo;</b-btn>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-btn>Edit</b-btn>
          <b-btn>Undo</b-btn>
          <b-btn>Redo</b-btn>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-btn>&rsaquo;</b-btn>
          <b-btn>&raquo;</b-btn>
        </b-button-group>
      </b-button-toolbar>
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