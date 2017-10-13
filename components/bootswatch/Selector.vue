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
import axios from 'axios'
const API_BOOTSWATCH = 'https://bootswatch.com/api/3.json'
const DEF_BOOTSWATCH_CSS = 'https://maxcdn.bootstrapcdn.com/bootswatch/latest/cerulean/bootstrap.min.css'

export default {
  data () {
    console.log(`select data!! href=${this.href}`)
    return {
      themes: [],
      selectedItem: '',
      href: this.href || DEF_BOOTSWATCH_CSS
    }
  },
  head () {
    console.log(`select head!! href=${this.href}`)
    return {
      link: [
        { hid: 'style-bootswatch', rel: 'stylesheet', href: this.href }
      ]
    }
  },
  created () {
    axios.get(API_BOOTSWATCH)
      .then(response => {
        this.themes = response.data.themes
      })
  },
  methods: {
    onChange: function () {
      for (let theme of this.themes) {
        if (theme.name === this.selectedItem) {
          this.href = theme.cssCdn
          break
        }
      }
    }
  }
}
</script>
