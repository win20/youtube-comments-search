<template>
  <div>
    <Navigation />
    <div class="bg-card text-textWhite text-center rounded-2xl h-screen mt-6 pt-12 flex items-center shadow-md shadow-gray-900 md:h-96 md:px-10 md:m-auto">
      <div class="flex-col pb-36 mx-auto md:pt-24 md:px-12">
        <h1 class="font-bold text-xl mb-8">Results for "Search"</h1>
        <div class="flex items-center w-[80%] mx-auto">
          <div id="avatar"></div>
          <div class="text-left">
            <div class="mb-2">YoutubeUser</div>
            <div class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from '~/components/Navigation.vue';

useHead({
  bodyAttrs: {
    class: 'bg-background font-sans overflow-hidden md:h-screen md:flex md:items-center md:justify-center',
  },
});
</script>

<style scoped>
#avatar {
  background-image: url('/assets/images/avatar.jpg');
  width: 100px;
  height: 60px;
  background-size: cover;
  background-position: top center;
  border-radius: 50%;
  margin-right: 10px;
}
</style>