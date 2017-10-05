<template>
<header class="Header">
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Theme Changer</a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#" id="themes--dropdown" aria-haspopup="true" aria-expanded="false">
              Themes
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="themes--dropdown">
              <li v-for="theme in themes"><a href="#" @click="onClick(theme.name)">{{ theme.name }} </a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
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
    onClick: function (selectedItem) {
      // 親へイベント通知
      this.$emit('selected', this.selectedItem)
    }
  }
}
</script>
