<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-2xl"
        type="text"
        v-model="searchQuery"
        placeholder="Search for a city or state"
      />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

   const searchQuery =  ref("")
</script>

<style></style>
