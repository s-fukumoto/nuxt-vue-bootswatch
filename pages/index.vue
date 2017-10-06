<template>
  <section class="container">
    <headerbootswatch
      :themes="themes"
      @selected="selecteBootswatch"
    />
    <bootswatch
      :themes="themes"
      @selected="selecteBootswatch"
    />
    <br>
    <bootstrapexamples/>
  </section>
</template>

<script>
import headerbootswatch from '~/components/HeaderBootswatch.vue'
import bootswatch from '~/components/Bootswatch.vue'
import bootstrapexamples from '~/components/Examples.vue'
import axios from 'axios'
import $ from 'jquery'

const META_TITLE = 'Bootswatch Theme Changer'
const API_BOOTSWATCH = 'https://bootswatch.com/api/3.json'
const DEF_BOOTSWATCH_CSS = 'https://maxcdn.bootstrapcdn.com/bootswatch/latest/cerulean/bootstrap.min.css'

export default {
  async asyncData () {
    // Bootswatchのリストを取得
    let { data } = await axios.get(API_BOOTSWATCH)
    return {
      themes: data.themes
    }
  },
  data () {
    return {
      title: META_TITLE
    }
  },
  head: {
    title: META_TITLE, // TODO:dataと同期できたらいいのだが…
    link: [
      { id: 'style-bootswatch', rel: 'stylesheet', href: DEF_BOOTSWATCH_CSS }
    ]
  },
  components: {
    headerbootswatch,
    bootswatch,
    bootstrapexamples
  },
  methods: {
    selecteBootswatch: function (selectedItem) {
      for (let theme of this.themes) {
        if (theme.name === selectedItem) {
          // スタイル置き換え
          // document.getElementById('style-bootswatch').href = theme.cssCdn
          $('#style-bootswatch').attr('href', theme.cssCdn)
          break
        }
      }
    }
  }
}
</script>
