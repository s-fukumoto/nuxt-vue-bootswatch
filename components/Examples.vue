<!--
  https://bootswatch.com/
-->

<template>

<div class="container">
  <expnavbar/>
  <expbuttons/>
  <exptypography/>
  <exptables/>
  <expforms/>
  <expnavs/>
  <expindicators/>
  <expprogressbars/>
  <expcontainers/>
  <expdialogs/>
</div>

</template>

<script>
import expnavbar from '~/components/examples/Navbar.vue'
import expbuttons from '~/components/examples/Buttons.vue'
import exptypography from '~/components/examples/Typography.vue'
import exptables from '~/components/examples/Tables.vue'
import expforms from '~/components/examples/Forms.vue'
import expnavs from '~/components/examples/Navs.vue'
import expindicators from '~/components/examples/Indicators.vue'
import expprogressbars from '~/components/examples/Progressbars.vue'
import expcontainers from '~/components/examples/Containers.vue'
import expdialogs from '~/components/examples/Dialogs.vue'

export default {
  components: {
    expnavbar,
    expbuttons,
    exptypography,
    exptables,
    expforms,
    expnavs,
    expindicators,
    expprogressbars,
    expcontainers,
    expdialogs
  }
}
</script>
