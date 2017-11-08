<!-- https://bootswatch.com/ -->
<template>
  <div class="container">
    <bw-navbar/>
    <bw-buttons/>
    <bw-typography/>
    <bw-tables/>
    <bw-forms/>
    <bw-navs/>
    <bw-indicators/>
    <bw-progressbars/>
    <bw-containers/>
    <bw-dialogs/>
  </div>
</template>

<script>
import BwNavbar from './Navbar.vue'
import BwButtons from './Buttons.vue'
import BwTypography from './Typography.vue'
import BwTables from './Tables.vue'
import BwForms from './Forms.vue'
import BwNavs from './Navs.vue'
import BwIndicators from './Indicators.vue'
import BwProgressbars from './Progressbars.vue'
import BwContainers from './Containers.vue'
import BwDialogs from './Dialogs.vue'

export default {
  components: {
    BwNavbar,
    BwButtons,
    BwTypography,
    BwTables,
    BwForms,
    BwNavs,
    BwIndicators,
    BwProgressbars,
    BwContainers,
    BwDialogs
  }
}
</script>
