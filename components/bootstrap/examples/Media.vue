<template>
  <bv-base title="Media">

    <b-card class="my-1">
      <b-media>
        <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" />
        <h5 class="mt-0">Media Title</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
          sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
          in faucibus.
        </p>
        <p>
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <b-media>
        <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" />
          <h5 class="mt-0">Nested Media</h5>
          <p class="mb-0">
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
            congue felis in faucibus.
          </p>
        </b-media>
      </b-media>
    </b-card>

    <ul class="list-unstyled my-1">
      <b-media tag="li">
        <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder" />
        <h5 class="mt-0 mb-1">List-based media object</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
        lacinia congue felis in faucibus.
      </b-media>
      <b-media tag="li" class="my-4">
        <b-img slot="aside" blank blank-color="#cba" width="64" alt="placeholder" />
        <h5 class="mt-0 mb-1">List-based media object</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
        lacinia congue felis in faucibus.
      </b-media>
      <b-media tag="li">
        <b-img slot="aside" blank blank-color="#bac" width="64" alt="placeholder" />
        <h5 class="mt-0 mb-1">List-based media object</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
        lacinia congue felis in faucibus.
      </b-media>
    </ul>

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