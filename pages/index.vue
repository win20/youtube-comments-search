<template>
  <Navigation />
  <div
    class="bg-card text-center rounded-2xl h-screen mt-6 pt-12 flex items-center shadow-md shadow-black md:h-72 md:px-10 md:m-auto">
    <div class="flex-col pb-36 mx-auto md:pt-24 md:px-12">
      <h1 class="text-xl text-textWhite font-bold md:text-2xl">Search for a Youtube video</h1>
      <p class="text-textWhite text-sm md:text-md">Please enter the full URL for the video</p>
      <Search />
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from '../components/Search.vue';
import Navigation from '../components/Navigation.vue';

let classes = 'bg-background font-sans overflow-hidden md:h-screen md:flex md:items-center md:justify-center ';
useHead({
  bodyAttrs: {
    class: classes,
  },
});
</script>

<style scoped></style>
