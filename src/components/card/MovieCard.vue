<template>
	<atropos>
		<div class="movie-card">
			<router-link to="#" class="w-full">
				<div class="movie-card__rate" data-atropos-offset="5">
					<i class="icon-star"></i>
					<span class="value"> {{ rate }} </span>
				</div>

				<div class="movie-card__bg">
					<img v-if="preview" :src="preview" alt="" />
				</div>

				<div class="movie-card__title">{{ title }}</div>
			</router-link>
		</div>
	</atropos>
</template>

<script setup>
// import Atropos component
import Atropos from "atropos/vue";
import "atropos/css";

defineProps({
	rate: {
		type: [Number, String],
	},

	preview: {
		type: String,
	},

	title: {
		type: [String, Number],
		required: true,
	},
});
</script>

<style lang="scss" scoped>
@import "card";
</style>

<style lang="scss">
.atropos-inner {
	border-radius: 12px;
}
</style>
