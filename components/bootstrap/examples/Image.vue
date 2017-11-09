<template>
  <bv-base title="Image">

    <div class="my-1">
      <h5>Small image with <code>fluid</code>:</h5>
      <b-img src="https://lorempixel.com/300/150/" fluid alt="Fluid image" />
      <h5 class="my-3">Small image with <code>fluid-grow</code>:</h5>
      <b-img src="https://lorempixel.com/300/150/" fluid-grow alt="Fluid-Grow image" />
    </div>

    <b-container fluid class="my-1 p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/technics/4/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/technics/8/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/technics/4/" alt="Thumbnail" />
        </b-col>
      </b-row>
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