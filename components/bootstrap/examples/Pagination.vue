<template>
  <bv-base title="Pagination">

    <div class="my-1">
        <h6>Default</h6>
        <b-pagination size="md" :total-rows="100" v-model="currentPage" :per-page="10">
        </b-pagination>
        <br>

        <h6>Small</h6>
        <b-pagination size="sm" :total-rows="100" v-model="currentPage" :per-page="10">
        </b-pagination>
        <br>

        <h6>Large</h6>
        <b-pagination size="lg" :total-rows="100" v-model="currentPage" :per-page="10">
        </b-pagination>
        <br>

        <div>currentPage: {{currentPage}}</div>
    </div>  

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
      currentPage: 3
    }
  }
}
</script>