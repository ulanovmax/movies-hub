<template>
	<h1>Hello</h1>
	<i class="icon-like"></i>

	<router-link to="/about">About</router-link>

	<router-view></router-view>
</template>

<script setup>
import { useMoviesStore } from "@/store/MoviesStore.js";

useMoviesStore();
</script>

<style scoped></style>
