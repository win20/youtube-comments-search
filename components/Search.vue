<template>
	<div class="pt-6">
		<input id="video-url" type="text" required
			class="py-1 px-4 rounded-2xl mr-2 md:px-5 md:py-2 md:rounded-full md:w-96" />
		<br class="md:hidden" />
		<button @click="searchVideo()"
			class="text-black font-bold py-1 px-4 bg-gradient-to-tr from-gradientOrange to-gradientRed rounded-full mt-2 md:text-lg md:py-2 md:px-7">
			Search
		</button>
		<div v-show="isError" class="pt-3 text-red-500 font-bold">Please enter a URL before making a search</div>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { useVideoStore } from '~/store/video';
import { storeToRefs } from 'pinia';

import { Video } from 'models/youtube';

const isError = ref(false);

const searchVideo = async () => {
	// https://www.youtube.com/watch?v=_jUwzVpw-44
	const videoUrl = (document.querySelector('#video-url') as HTMLInputElement).value;
	const videoId = videoUrl.split('=')[1];

	try {
		const response = await axios.get('http://localhost:3000/api/get-video', { params: { videoId } });
		const data = response.data as Video;

		isError.value = false;

		const videoStore = useVideoStore();
		const { storeVideo } = videoStore;

		storeVideo(data);

		await navigateTo('/comment-search');

		// await navigateTo({
		// 	path: '/comment-search',
		// 	query: {
		// 		videoTitle: data.items[0].snippet.title,
		// 	}
		// });
	} catch (error) {
		isError.value = true;
	}


};

</script>

<style scoped></style>
