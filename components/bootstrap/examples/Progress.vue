<template>
  <bv-base title="Progress">

    <div class="my-1">
        <b-progress :value="counter" :max="max" show-progress animated></b-progress>
        <b-progress class="mt-1" :max="max" show-value>
          <b-progress-bar :value="counter*(6/10)" variant="success"></b-progress-bar>
          <b-progress-bar :value="counter*(2.5/10)" variant="warning"></b-progress-bar>
          <b-progress-bar :value="counter*(1.5/10)" variant="danger"></b-progress-bar>
        </b-progress>
        <b-btn class="my-2 " @click="clicked">Click me</b-btn>
    </div>

    <div class="my-1">
      <b-progress :max="max" class="mb-3">
        <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
        <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
        <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
      </b-progress>
      <b-progress show-progress :max="max" class="mb-3"></b-progress-bar>
        <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
        <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
        <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
      </b-progress>
      <b-progress show-value striped :max="max" class="mb-3"></b-progress-bar>
        <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
        <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
        <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
      </b-progress>
      <b-progress :max="max" class="mb-3">
        <b-progress-bar variant="primary" :value="values[0]" show-progress></b-progress-bar>
        <b-progress-bar variant="success" :value="values[1]" animated show-progress></b-progress-bar>
        <b-progress-bar variant="info" :value="values[2]" striped show-progress></b-progress-bar>
      </b-progress>
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
      counter: 45,
      max: 100,
      values: [ 15, 30, 20 ]
    }
  },
  methods: {
    clicked () {
      this.counter = Math.random() * this.max
      console.log('Change progress to ' + Math.round(this.counter * 100) / 100)
    }
  }
}
</script>