<template>
  <NavbarComponent/>
  <NavbarSecondComponent/>
  <router-view></router-view>
</template>

<script>

import NavbarComponent from './components/NavbarComponent.vue'
import NavbarSecondComponent from './components/NavbarSecondComponent.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    NavbarSecondComponent
}
}
</script>

<style>
</style>
