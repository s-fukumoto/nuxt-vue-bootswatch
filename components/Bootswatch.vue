<template>
  <div>
    <label for="select-style">Style選択</label>
    <select
      id="select-style"
      class="form-control"
      v-model="selected_item"
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
      selected_item: ''
    }
  },
  props: ['themes'],
  methods: {
    onChange: function (e) {
      // 親へイベント通知
      this.$emit('selected', this.selected_item)
    }
  }
}
</script>
