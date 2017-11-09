<template>
  <bv-base title="Tab">

    <b-tabs class="my-1">
      <b-tab title="first" active>
        <br>I'm the first fading tab
      </b-tab>
      <b-tab title="second" >
        <br>I'm the second tab content
      </b-tab>
      <b-tab title="disabled" disabled>
        <br>Disabled tab!
      </b-tab>
    </b-tabs>

    <div class="my-1">
      <!-- Tabs with card integration -->
      <b-card no-body>
        <b-tabs small card v-model="tabIndex">
          <b-tab title="General">
            I'm the first fading tab
          </b-tab>
          <b-tab title="Edit profile">
            I'm the second tab
            <b-card>I'm the card in tab</b-card>
          </b-tab>
          <b-tab title="Premium Plan" disabled>
            Sibzamini!
          </b-tab>
          <b-tab title="Info">
            I'm the last tab
          </b-tab>
        </b-tabs>
      </b-card>

      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-btn @click="tabIndex--">Previous</b-btn>
          <b-btn @click="tabIndex++">Next</b-btn>
        </b-button-group>
        <br>
        <span class="text-muted">Current Tab: {{tabIndex}}</span>
      </div>
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
      tabIndex: 0
    }
  }
}
</script>