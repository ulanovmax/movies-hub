<template>
	<h1 class="text-rose-300">Hello</h1>

	<router-link to="/about">About</router-link>

	<router-view></router-view>
</template>

<script setup>
import { useMoviesStore } from "@/store/MoviesStore.js";

useMoviesStore();
</script>

<style scoped></style>
