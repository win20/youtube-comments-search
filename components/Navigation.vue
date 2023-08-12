<template>
	<div class="flex justify-between mt-4 mx-5 md:absolute md:top-3 md:left-0 md:text-sm">
		<span class="ml-3 text-textWhite">{{ appData.searchCount }} searches made</span>
		<button @click="toggleSidebar" class="md:hidden">
			<Icon name="iconamoon:menu-burger-horizontal-bold" color="white" size="28" class="" />
		</button>
	</div>

	<div class="hidden md:block md:absolute md:top-8 md:right-0 text-textWhite text-sm font-bold">
		<span class="mr-20">
			<a href="/">
				Home
			</a>
		</span>
		<span class="mr-20">
			<a href="https://github.com/win20/youtube-comments-search/issues" target="_blank">
				Report an issue
			</a>
		</span>
		<span class="mr-8">
			<a href="https://github.com/win20" target="_blank">
				Github
			</a>
		</span>
	</div>

	<!-- Sidebar for mobile -->
	<Transition name="slide-fade">
		<div class="bg-gray-300 absolute right-0 top-0 w-6/12 h-full" v-if="isSidebarActive">
			<button @click="toggleSidebar">
				<Icon name="basil:cross-outline" color="black" size="40" class="absolute right-0" />
			</button>
			<ul class="text-center relative space-y-16 mt-[50%]">
				<li><a href="/">Home</a></li>
				<li>
					<a href="https://github.com/win20/youtube-comments-search/issues" target="_blank">Report an issue</a>
				</li>
				<li><a href="https://github.com/win20" target="_blank">Github</a></li>
			</ul>

			<span class="absolute bottom-2 right-3 ml-5 text-sm font-thin">10 searches made</span>
		</div>
	</Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

import { AppData } from 'models/AppData';

const enabled = ref(false);
const isSidebarActive = ref(false);

const result = await axios.get('http://localhost:3000/api/get-app-data');
const appData: AppData = result.data;

const toggleSidebar = () => {
	isSidebarActive.value = !isSidebarActive.value;
};
</script>

<style scoped>
.slide-fade-enter-active {
	transition: all 0.2s ease-in-out;
}

.slide-fade-leave-active {
	transition: all 0.2s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}
</style>
