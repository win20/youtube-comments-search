<template>
	<div class="flex justify-between mt-4 mx-5">
		<Switch v-model="enabled" :class="enabled ? 'bg-card' : 'bg-card'"
			class="relative inline-flex h-7 w-12 items-center rounded-full">
			<span class="sr-only">Enable notifications</span>
			<span :class="enabled ? 'translate-x-6' : 'translate-x-1'"
				class="inline-block h-5 w-5 transform rounded-full bg-white transition bg-gradient-to-tr from-gradientOrange to-gradientRed" />
		</Switch>
		<Icon name="iconamoon:menu-burger-horizontal-bold" color="white" size="28" class="" />
	</div>
	<div class="bg-white absolute right-0 top-0 w-6/12 h-full">
		<Icon name="basil:cross-outline" color="black" size="40" class="absolute right-0" />
		<ul class="text-center relative space-y-16 mt-[50%]">
			<li>Report an issue</li>
			<li>Github</li>
		</ul>

		<span class="absolute bottom-2 right-3 ml-5 text-sm font-thin">10 searches made</span>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Switch } from '@headlessui/vue';

const enabled = ref(false);
</script>

<style scoped></style>
