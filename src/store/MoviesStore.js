import { defineStore } from "pinia";

export const useMoviesStore = defineStore("MoviesStore", {
	state: () => ({ count: 0, name: "Eduardo" }),
});
