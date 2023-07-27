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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Switch } from '@headlessui/vue';

const enabled = ref(false);
</script>

<style scoped></style>
