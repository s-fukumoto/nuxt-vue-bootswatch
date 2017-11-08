<template>
  <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <div class="container">
      <a href="#" class="navbar-brand">Theme Changer</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="themes" aria-expanded="false">Themes <span class="caret"></span></a>
            <div class="dropdown-menu" aria-labelledby="themes">
              <a v-for="theme in this.$store.state.bootswatch.themes" class="dropdown-item" href="#" @click="selectTheme(theme.name)">{{ theme.name }} </a>
            </div>
          </li>
        </ul>
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link to="/bv" nav-link>Go Bootstrap</nuxt-link>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
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
    ...mapMutations({
      selectTheme: 'bootswatch/selectTheme'
    }),
    ...mapActions({
      setThemes: 'bootswatch/setThemes'
    })
  }
}
</script>
