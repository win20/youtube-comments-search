<template>
  <Navigation :api-base-url="apiBaseUrl" />
  <div
    class="bg-card text-center rounded-2xl h-screen mt-6 pt-12 flex items-center shadow-md shadow-black md:h-72 md:px-10 md:m-auto">
    <div class="flex-col pb-36 mx-auto md:pt-24 md:px-12">
      <h1 class="text-xl text-textWhite font-bold md:text-2xl">Search for a Youtube videoooo</h1>

      <p class="text-textWhite text-sm md:text-md">Please enter the full URL for the Youtube video</p>
      <Search search-type="video" :api-base-url="apiBaseUrl" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from '../components/Navigation.vue';
import Search from '../components/Search.vue';
const config = useRuntimeConfig();

const apiBaseUrl =
  config.public.env === 'prod'
  ? config.public.apiBaseUrl
  : config.public.devApiBaseUrl;

useHead({
  title: 'Youtube Comments Search - Find Video',
  meta: [
    {
      name: 'description',
      content: 'Search any Youtube video for a specific comment, or any comments containing your specified keywords.'
    }
  ],
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'bg-background font-sans overflow-hidden md:h-screen md:flex md:items-center md:justify-center',
  },
});
</script>

<style scoped></style>
