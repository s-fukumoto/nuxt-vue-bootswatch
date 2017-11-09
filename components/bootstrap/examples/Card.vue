<template>
  <bv-base title="Card">

    <div class="my-1">
      <b-card title="Card Title"
              img-src="https://lorempixel.com/600/300/food/5/"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>

    <div class="my-1">
      <b-card overlay
              img-src="https://lorempixel.com/900/250/sports/6/"
              img-alt="Card Image"
              text-variant="white"
              title="Image Overlay"
              sub-title="Subtitle">
        <p class="card-text">
          Some quick example text to build on the card and make
          up the bulk of the card's content.
        </p>
      </b-card>
    </div>

    <div class="my-1">
      <b-card header="Card Header"
              header-text-variant="white"
              header-tag="header"
              header-bg-variant="dark"
              footer="Card Footer"
              footer-tag="footer"
              footer-bg-variant="success"
              footer-border-variant="dark"
              title="Title"
              style="max-width: 20rem;"
      >
        <p class="card-text">Header and footers variants.</p>
      </b-card>
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