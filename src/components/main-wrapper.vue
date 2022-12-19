<template>
  <div class='main-wrapper'>
    <v-header/>
    <router-view/>
    <bottom-nav/>
  </div>
</template>

<script>

import vHeader from './layouts/v-header.vue'
import bottomNav from './layouts/bottom-nav.vue'

export default {
  name: "main-wrapper",
  components: {
    vHeader,
    bottomNav
  },
  props: {},
  data() {
    return {}
  },
  computed: {}
}
</script>

<style lang="scss">
</style>
