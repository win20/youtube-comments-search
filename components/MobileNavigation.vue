<template>
	<div class="flex justify-between mt-4 mx-5">
		<Switch v-model="enabled" :class="enabled ? 'bg-card' : 'bg-card'"
			class="relative inline-flex h-7 w-12 items-center rounded-full">
			<span class="sr-only">Enable notifications</span>
			<span :class="enabled ? 'translate-x-6' : 'translate-x-1'"
				class="inline-block h-5 w-5 transform rounded-full bg-white transition bg-gradient-to-tr from-gradientOrange to-gradientRed" />
		</Switch>
		<button @click="toggleSidebar">
			<Icon name="iconamoon:menu-burger-horizontal-bold" color="white" size="28" class="" />
		</button>
	</div>
	<Transition name="slide-fade">
		<div class="bg-gray-300 absolute right-0 top-0 w-6/12 h-full" v-if="isSidebarActive">
			<buton @click="toggleSidebar">
				<Icon name="basil:cross-outline" color="black" size="40" class="absolute right-0" />
			</buton>
			<ul class="text-center relative space-y-16 mt-[50%]">
				<li><a href="#">Report an issue</a></li>
				<li><a href="#">Github</a></li>
			</ul>

			<span class="absolute bottom-2 right-3 ml-5 text-sm font-thin">10 searches made</span>
		</div>
	</Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Switch } from '@headlessui/vue';

const enabled = ref(false);
const isSidebarActive = ref(false);

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
