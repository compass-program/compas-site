<template>
	<div class="page-portfolio">
		<div class="page-portfolio__top">
			<the-header></the-header>

			<h1 class="page-portfolio__title center">Портфолио</h1>
		</div>

		<main class="page-portfolio__main"></main>
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader.vue";

	export default {
		name: "PagePortfolio",
		components: {
			TheHeader,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-portfolio {
		&__top {
			background: url(/public/img/banner-bg-right.png) center / cover
				no-repeat;

			.the-header {
				position: static;
				transform: none;
			}
		}

		&__title {
			padding: 4rem 1.5rem 2rem 1.5rem;
			color: $white;
		}

		&__main {
		}
	}
</style>
