<template>
  <section class="container">
    <h1>Bootstrap</h1>
    <div class="alert alert-info">
      <h4>Alert!</h4>
      <p>This is a demo of the Bootswatch API.</p>
    </div>
    <bootswatch :themes="themes"/>
  </section>
</template>

<script>
import bootswatch from '~/components/Bootswatch.vue'

import axios from 'axios'

const API_BOOTSWATCH = 'https://bootswatch.com/api/3.json'

export default {
  async asyncData () {
    let { data } = await axios.get(API_BOOTSWATCH)
    return { themes: data.themes }
  },
  head: {
    title: 'Bootswatch API Demo',
    meta: [
      { charset: 'utf-8' }
    ],
    link: [
      { rel: 'stylesheet', href: '//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css' }
    ],
    script: [
      { src: 'http://code.jquery.com/jquery-2.1.0.min.js' }
    ]
  },
  components: {
    bootswatch
  }
}
</script>
