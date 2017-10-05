<template>
  <section class="container">
    <h1>Bootswatch Theme Changer</h1>
    <bootswatch
      :themes="themes"
      @selected="selecteBootswatch"
    />
    <br>
    <bootstrapexamples/>
  </section>
</template>

<script>
import bootswatch from '~/components/Bootswatch.vue'
import bootstrapexamples from '~/components/Examples.vue'
import axios from 'axios'

const API_BOOTSWATCH = 'https://bootswatch.com/api/3.json'
const DEF_BOOTSWATCH_CSS = 'https://maxcdn.bootstrapcdn.com/bootswatch/latest/cerulean/bootstrap.min.css'
const DEF_JQUERY_JS = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'

export default {
  async asyncData () {
    // Bootswatchのリストを取得
    let { data } = await axios.get(API_BOOTSWATCH)
    return {
      themes: data.themes
    }
  },
  head: {
    title: 'Bootswatch API Demo',
    meta: [
      { charset: 'utf-8' }
    ],
    link: [
      { id: 'style-bootswatch', rel: 'stylesheet', href: DEF_BOOTSWATCH_CSS }
    ],
    script: [
      { src: DEF_JQUERY_JS }
    ]
  },
  components: {
    bootswatch,
    bootstrapexamples
  },
  methods: {
    selecteBootswatch: function (selectedItem) {
      for (let theme of this.themes) {
        if (theme.name === selectedItem) {
          // スタイル置き換え
          document.getElementById('style-bootswatch').href = theme.cssCdn
          break
        }
      }
    }
  }
}
</script>
