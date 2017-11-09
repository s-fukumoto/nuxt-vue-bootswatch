<template>
  <bv-base title="Jumbotron">

    <b-jumbotron class="my-1" header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2" >
      <p>For more information visit website</p>
      <b-btn variant="primary" href="#">More Info</b-btn>
    </b-jumbotron>

    <b-jumbotron class="my-1" bg-variant="info" text-variant="white" border-variant="dark">
      <template slot="header">
        Bootstrap Vue
      </template>
      <template slot="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </template>
      <hr class="my-4">
      <p>
        It uses utility classes for typography and spacing to space content
        out within the larger container.
      </p>
    </b-jumbotron>

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