<template>
  <div>
    <label for="select-style">Select Theme</label>
    <select
      id="select-style"
      class="form-control"
      v-model="selectedItem"
      @change="onChange"
    >
      <option v-for="theme in this.$store.state.bootswatch.themes" :value="theme.name">
        {{ theme.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      selectedItem: this.$store.state.bootswatch.selectedTheme
    }
  },
  head () {
    return {
      link: [
        { hid: 'style-bootswatch', rel: 'stylesheet', href: this.$store.state.bootswatch.cssHref }
      ]
    }
  },
  created () {
    this.setThemes()
  },
  methods: {
    onChange () {
      this.selectTheme(this.selectedItem)
    },
    ...mapMutations({
      selectTheme: 'bootswatch/selectTheme'
    }),
    ...mapActions({
      setThemes: 'bootswatch/setThemes'
    })
  }
}
</script>
