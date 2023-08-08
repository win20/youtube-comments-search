<template>
  <div>
    <Navigation />
    <div class="bg-card hide-scrollbar text-textWhite text-center rounded-2xl h-screen overflow-auto mt-6 pt-12 shadow-md shadow-gray-900 md:max-h-[49em] md:overflow-x-auto md:overflow-y-auto md:max-w-[90%] md:px-10 md:m-auto">
      <div class="flex-col pb-36 mx-auto md:pt-24 md:px-12 md:max-w-5xl">
        <h1 class="font-bold text-xl mb-8">Results for "{{ $route.query.search }}"</h1>
        <Comment
          v-for="comment in localStorageComments"
          :avatar="comment.snippet.topLevelComment.snippet.authorProfileImageUrl"
          :user="comment.snippet.topLevelComment.snippet.authorDisplayName"
          :comment-text="comment.snippet.topLevelComment.snippet.textDisplay"
         />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from '~/components/Navigation.vue';
import Comment from '~/components/Comment.vue';
import {CommentsList} from '~/models/youtube';

import { useCommentsStore } from '~/store/comments';
const commentStore = useCommentsStore();
const {getCommentsFromLocalStorage} = commentStore;
let localStorageComments: CommentsList;

if (process.client) {
  localStorageComments = getCommentsFromLocalStorage();
}

useHead({
  bodyAttrs: {
    class: 'bg-background font-sans overflow-hidden md:h-screen md:flex md:items-center md:justify-center',
  },
});
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>