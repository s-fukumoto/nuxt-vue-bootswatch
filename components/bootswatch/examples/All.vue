<!-- https://bootswatch.com/ -->
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
import expnavbar from '~/components/bootswatch/examples/Navbar.vue'
import expbuttons from '~/components/bootswatch/examples/Buttons.vue'
import exptypography from '~/components/bootswatch/examples/Typography.vue'
import exptables from '~/components/bootswatch/examples/Tables.vue'
import expforms from '~/components/bootswatch/examples/Forms.vue'
import expnavs from '~/components/bootswatch/examples/Navs.vue'
import expindicators from '~/components/bootswatch/examples/Indicators.vue'
import expprogressbars from '~/components/bootswatch/examples/Progressbars.vue'
import expcontainers from '~/components/bootswatch/examples/Containers.vue'
import expdialogs from '~/components/bootswatch/examples/Dialogs.vue'

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
