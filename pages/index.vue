<template>
  <div class="bg-card text-center rounded-2xl h-screen mt-12 pt-12 flex items-center">
    <div class="flex-col pb-32 mx-auto">
      <h1 class="text-2xl text-textWhite font-bold">Search for a Youtube video</h1>
      <p class="text-textWhite">Please enter the full URL for the video</p>
      <Search />
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from '../components/Search.vue';
useHead({
  bodyAttrs: {
    class: 'bg-background font-sans overflow-hidden'
  },
});

</script>

<style scoped></style>
