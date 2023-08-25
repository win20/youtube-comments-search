<template>
  <div class="grid grid-cols-6 w-[85%] mx-auto mt-4">
    <img crossorigin="anonymous" :src="props.avatar" alt="avatar image" class="w-12 h-12 rounded-full">
    <span class="text-left col-span-5 ml-2">
      <div class="mb-2">{{ props.user }}</div>
      <div class="text-sm">{{ props.commentText }}</div>
    </span>
  </div>
</template>

<script setup lang="ts">
const props =	defineProps<{
	avatar: string,
  user: string,
  commentText: string,
}>();

</script>

<style scoped>
</style>