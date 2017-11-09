<template>
  <div class="container pt-4 pb-3">
    <h1 class="border border-top-0 border-right-0 border-left-0 pb-1">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>