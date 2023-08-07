<template>
  <div>
    <Navigation />
    <div class="bg-card text-textWhite text-center rounded-2xl h-screen mt-6 pt-12 flex items-center shadow-md shadow-gray-900 md:h-96 md:px-10 md:m-auto">
      <div class="flex-col pb-36 mx-auto md:pt-24 md:px-12">
        <h1 class="font-bold text-xl mb-8">Results for "Search"</h1>
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
</style>