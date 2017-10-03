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
import axios from 'axios'

const API_BOOTSWATCH = 'https://bootswatch.com/api/3.json'

export default {
  async created () {
    let { data } = await axios.get(API_BOOTSWATCH)
    return { themes: data.themes }
  },
  data () {
    return {
      selected_item: '',
      themes: []
    }
  }
}
</script>
