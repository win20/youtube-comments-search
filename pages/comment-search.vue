<template>
  <div>
    <Navigation />
    <div
      class="bg-card text-center rounded-2xl h-screen mt-6 pt-12 flex items-center shadow-md shadow-gray-900 md:h-96 md:px-10 md:m-auto">
      <div class="flex-col pb-36 mx-auto md:pt-24 md:px-12">
        <h1 class="text-xl text-textWhite font-bold md:text-2xl">Found a video!</h1>
        <p class="text-textWhite text-sm md:text-md">Search for a comment below</p>

        <div class="flex mt-5 mb-5 text-textWhite md:mt-8">
          <img :src="localStorageVideo.thumbnailUrl" alt="video thumbnail"
            class="w-32 h-20 rounded-lg mr-2 ml-5 shadow-md shadow-gray-800 md:w-48 md:h-32 md:rounded-xl" />
          <div id="test" class="w-80 pr-5 flex flex-col justify-between text-left">
            <div>
              <div class="text-sm truncate w-5/6 md:w-[100%] md:text-xl md:font-bold">{{ localStorageVideo.title }}</div>
              <div class="text-xs md:text-sm">{{ localStorageVideo.channel }}</div>
            </div>
            <div class="text-xs md:text-sm">{{ localStorageVideo.views }} views</div>
          </div>
        </div>
        <Search search-type="comment" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LocalStorageVideo } from '~/models/youtube';
import { useVideoStore } from '~/store/video';
import Navigation from '../components/Navigation.vue';

const videoStore = useVideoStore();
const { getVideoFromLocalStorage } = videoStore;

let localStorageVideo: LocalStorageVideo;
if (process.client) {
  localStorageVideo = getVideoFromLocalStorage();
}

useHead({
  bodyAttrs: {
    class: 'bg-background font-sans overflow-hidden md:h-screen md:flex md:items-center md:justify-center',
  },
});
</script>

<style scoped></style>

