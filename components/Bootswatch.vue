<template>
  <div>
    <select class="form-control" v-model="selected_item" @change="changed">
      <option v-for="theme in themes" :value="theme.name">
        {{ theme.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected_item: ''
    }
  },
  props: ['themes'],
  methods: {
    changed: function (e) {
      this.$emit('changed', this.selected_item)
    }
  }
}
</script>
