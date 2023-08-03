<template>
	<div class="pt-6">
		<input id="video-url" type="text" class="py-1 px-4 rounded-2xl mr-2 md:px-5 md:py-2 md:rounded-full md:w-96" />
		<br class="md:hidden" />
		<button @click="searchVideo()"
			class="text-black font-bold py-1 px-4 bg-gradient-to-tr from-gradientOrange to-gradientRed rounded-full mt-2 md:text-lg md:py-2 md:px-7">
			Search
		</button>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios';

import { Video } from 'models/youtube';

const searchVideo = async () => {
	// https://www.youtube.com/watch?v=_jUwzVpw-44
	const videoUrl = (document.querySelector('#video-url') as HTMLInputElement).value;
	const videoId = videoUrl.split('=')[1];

	try {
		const response = await axios.get('http://localhost:3000/api/get-video', { params: { videoId } });
		// const data = response.data as Video;
	} catch (error) {
		console.log(error);
	}
};

</script>

<style scoped></style>
