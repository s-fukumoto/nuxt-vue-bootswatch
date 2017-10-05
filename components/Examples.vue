<!--
  https://bootswatch.com/
-->

<template>
  <expall/>
<!--
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
-->
</template>

<script>
import expall from '~/components/examples/All.vue'
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
    expall,
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
