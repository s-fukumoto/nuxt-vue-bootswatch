<template>
  <bv-base title="Layout and Grid">

    <b-container class="bv-example-row my-1">
        <b-row class="text-center">
            <b-col>1 of 3</b-col>
            <b-col cols="8">2 of 3 (wider)</b-col>
            <b-col>3 of 3</b-col>
        </b-row>
        <b-row class="text-center">
            <b-col>1 of 3</b-col>
            <b-col cols="5">2 of 3 (wider)</b-col>
            <b-col>3 of 3</b-col>
        </b-row>
    </b-container>

    <b-container class="bv-example-row my-1">
        <b-row>
            <b-col>col</b-col>
            <b-col>col</b-col>
            <b-col>col</b-col>
            <b-col>col</b-col>
        </b-row>
        <b-row>
            <b-col cols="8">col-8</b-col>
            <b-col cols="4">col-4</b-col>
        </b-row>
    </b-container>

    <b-container class="bv-example-row bv-example-row-flex-cols my-1">
        <b-row>
            <b-col align-self="start">One of three columns</b-col>
            <b-col align-self="center">One of three columns</b-col>
            <b-col align-self="end">One of three columns</b-col>
        </b-row>
    </b-container>

  </bv-base>
</template>

<script>
import BvBase from './_Base.vue'

export default {
  components: {
    BvBase
  }
}
</script>

<style>
.bv-example-row .row + .row {
    margin-top: 1rem;
}
.bv-example-row .row > .col:not(.header), .bv-example-row .row > [class^=col-] {
    padding-top: .75rem;
    padding-bottom: .75rem;
    background-color: rgba(86, 61, 124, .15);
    border: 1px solid rgba(86, 61, 124, .2);
}
.bv-example-row-flex-cols .row {
    min-height: 10rem;
    background-color: rgba(255, 0, 0, .1);
}
</style>