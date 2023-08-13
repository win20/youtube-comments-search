<template>
	<div class="pt-6">
		<input id="search-input" type="text" required
			class="py-1 px-4 rounded-2xl mr-2 md:px-5 md:py-2 md:rounded-full md:w-96" />
		<br class="md:hidden" />
		<button @click="props.searchType === 'video' ? searchVideo() : searchComment()"
			class="text-black font-bold py-1 px-4 bg-gradient-to-tr from-gradientOrange to-gradientRed rounded-full mt-2 md:text-lg md:py-2 md:px-7">
			Search
		</button>
		<div v-show="isError" class="pt-3 text-red-500 font-bold">Please enter a URL before making a search</div>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios';

import { LocalStorageVideo, Video, CommentsList } from '~/models/youtube';
import { useVideoStore } from '~/store/video';
import { useCommentsStore } from '~/store/comments';

const isError = ref(false);
const props =	defineProps<{
	searchType: 'video' | 'comment'
	apiBaseUrl: string,
}>();

const searchVideo = async () => {
	const videoUrl = (document.querySelector('#search-input') as HTMLInputElement).value;
	const videoId = videoUrl.split('=')[1];

	try {
		const response = await axios.get(`${props.apiBaseUrl}get-video`, { params: { videoId } });
		const data = response.data as Video;

		isError.value = false;

		const videoStore = useVideoStore();
		const { storeVideo } = videoStore;

		storeVideo(data);

		await navigateTo('/comment-search');
	} catch (error) {
		isError.value = true;
	}
};

const searchComment = async () => {
	const commentSearch = (document.querySelector('#search-input') as HTMLInputElement).value;
	const videoStore = useVideoStore();
	const { getVideoFromLocalStorage } = videoStore;
	const video = getVideoFromLocalStorage() as LocalStorageVideo;
	const videoId = video.id;

	const params = {
		commentSearch,
		videoId
	}

	const response = await axios.get(`${props.apiBaseUrl}get-comment`, { params });
	const data = response.data.items as CommentsList;

	const commentsStore = useCommentsStore();
	const {storeComments} = commentsStore;
	storeComments(data);

	await axios.put(`${props.apiBaseUrl}update-app-data`);

	await navigateTo({
		path: '/comment-results',
		query: {
			search: commentSearch,
		}
	})
};

</script>

<style scoped></style>
