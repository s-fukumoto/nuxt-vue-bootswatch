<template>
  <div>
    <label for="select-style">Style Select</label>
    <select
      id="select-style"
      class="form-control"
      v-model="selectedItem"
      @change="onChange"
    >
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
      selectedItem: ''
    }
  },
  props: ['themes'],
  methods: {
    onChange: function (e) {
      // 親へイベント通知
      this.$emit('selected', this.selectedItem)
    }
  }
}
</script>
