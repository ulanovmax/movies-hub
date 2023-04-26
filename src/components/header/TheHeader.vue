<template>
	<header class="header">
		<div class="cont">
			<div class="flex items-center justify-between">
				<router-link to="/" class="logo">
					<img src="@public/common/logo.svg" alt="" />
				</router-link>

				<nav class="menu-navbar">
					<div class="menu-list space-x-7" ref="navbar">
						<span
							ref="spanElement"
							:class="{ active: spanActiveClass }"
							:style="spanStyleObj"
						></span>
						<router-link to="/dashboard" class="menu-list__link">
							Dashboard
						</router-link>
						<router-link to="/suggestions" class="menu-list__link">
							Suggestions
						</router-link>
						<router-link to="/add" class="menu-list__link"> Add </router-link>
						<router-link to="/login" class="menu-list__link flex items-center">
							Log in
							<i class="icon-user-square"></i>
						</router-link>
					</div>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup>
// Tesla style menu
import { onMounted, ref } from "vue";

const navbar = ref();
const spanElement = ref();
const spanActiveClass = ref(false);
const spanStyleObj = ref({});

function backgroundMenuPositionFunc(targetElement, flagMouseEnter) {
	const navbarPosition = navbar.value.getBoundingClientRect();
	const elementPosition = targetElement.getBoundingClientRect();

	let spanPositionLeftStart = elementPosition.left - navbarPosition.left;
	let spanWidthStart = elementPosition.width;

	if (flagMouseEnter) {
		spanStyleObj.value = {
			"--span-transition": `0.5s cubic-bezier(0.75, 0, 0, 1)`,
		};
	} else {
		spanStyleObj.value = {
			"--span-transition": `opacity 0.5s ease, visibility 0s 0s`,
		};
	}

	Object.assign(spanStyleObj.value, {
		"--width-span": `${spanWidthStart}px`,
		"--left-position-span": `${spanPositionLeftStart}px`,
	});
}

onMounted(() => {
	// Tesla style menu
	const navbarElements = navbar.value.querySelectorAll(`a`);
	const activeMenuElement = navbar.value.querySelector(`a.active`);

	if (activeMenuElement) {
		backgroundMenuPositionFunc(activeMenuElement, true);
		spanActiveClass.value = true;

		navbarElements.forEach((elem) => {
			elem.addEventListener("mouseenter", function (e) {
				backgroundMenuPositionFunc(e.target, true);
			});

			navbar.value.addEventListener("mouseleave", function () {
				backgroundMenuPositionFunc(activeMenuElement, true);
			});
		});
	} else {
		let flagMouseEnter = false;

		navbarElements.forEach((elem) => {
			elem.addEventListener("mouseenter", function (e) {
				backgroundMenuPositionFunc(e.target, flagMouseEnter);
				spanActiveClass.value = true;
				flagMouseEnter = true;
			});
		});

		navbar.value.addEventListener("mouseleave", function () {
			spanActiveClass.value = false;
			flagMouseEnter = false;

			spanStyleObj.value["--span-transition"] = `opacity 0.5s ease, visibility 0s 0.5s`;
		});
	}
});
</script>

<style scoped lang="scss">
@import "header.scss";
</style>
