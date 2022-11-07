<template>
<div class="app-wrapper">
  <div class="main-container">
    <app-main></app-main>
  </div>
</div>
</template>

<script>
import AppMain from './components/AppMain.vue'
export default {
  name: 'layout',
  components: {
    AppMain,
  }
}
</script>

<style lang="scss" scoped>

</style>
