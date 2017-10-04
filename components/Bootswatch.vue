<template>
  <div>
    <select v-model="selected_item">
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
  props: ['themes']
}
</script>
