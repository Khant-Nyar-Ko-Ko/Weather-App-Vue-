<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-secondary">
    <SideNavigationVue/>
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SideNavigationVue from './components/SideNavigation.vue';

</script>

<style lang="scss" scoped>

</style>