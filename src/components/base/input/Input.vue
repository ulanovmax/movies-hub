<template>
	<div class="input-item">
		<span v-if="withIcon" :class="iconClass"></span>
		<input type="text" :placeholder="placeholder" :class="{ 'with-icon': withIcon }" />
	</div>
</template>

<script setup>
import { defineComponent } from "vue";

defineProps({
	placeholder: {
		type: String,
	},

	withIcon: {
		type: Boolean,
		default: false,
	},

	iconClass: {
		type: String,
	},
});

defineComponent({
	name: "VInput",
});
</script>

<style lang="scss" scoped>
@import "inputs";
</style>
