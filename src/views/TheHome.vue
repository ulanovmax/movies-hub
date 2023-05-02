<template>
	<section class="hero-screen">
		<div class="cont">
			<div class="hero-screen__heading">
				<h1 class="hero-screen__heading-title">Movies Hub</h1>
				<p class="hero-screen__heading-text">
					Welcome to Movies Hub, the ultimate destination for movie lovers! Our extensive
					film catalog features a diverse range of genres, from action-packed blockbusters
					to heart-warming dramas and everything in between.😉
				</p>
			</div>

			<form class="search-form">
				<v-input
					placeholder="Search Movies or TV Shows"
					with-icon
					icon-class="icon-search"
					class="max-w-[388px]"
				></v-input>
			</form>
		</div>
	</section>

	<section class="movies-list pb-20">
		<div class="cont">
			<categories-nav></categories-nav>

			<h3 class="mb-6 mt-6 text-grey-400">All <span class="text-base">(120)</span></h3>
			<movie-card></movie-card>
		</div>
	</section>
</template>

<script setup>
// Vue
import { defineComponent } from "vue";

// Components
import CategoriesNav from "@/components/categories/CategoriesNav.vue";
import MovieCard from "@/components/card/MovieCard.vue";

defineComponent({
	name: "HomePage",
});
</script>

<style scoped lang="scss">
.hero-screen {
	padding: 160px 0 80px;

	&__heading {
		max-width: 660px;

		&-text {
			color: var(--grey-300);
			margin-bottom: 24px;
		}
	}
}
</style>
