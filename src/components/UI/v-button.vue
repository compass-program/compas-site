<template>
	<div class="v-button" :class="color">
		<div class="v-button__inner" :class="reverse">
			<div class="v-button__inner-col">
				<p class="v-button__text">{{ text }}</p>
			</div>
			<div class="v-button__inner-col">
				<img :src="icon" class="v-button__icon" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "v-button",
		props: {
			color: String,
			reverse: String,
			text: String,
			icon: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-button {
		cursor: pointer;
		user-select: none;
		display: flex;
		justify-content: center;
		align-items: center;
		color: $white;
		max-width: 32rem;
		width: 100%;
		height: 7.2rem;
		padding: 0.6rem 0.9rem;
		transition: all 0.2s ease;
		&:hover {
			padding: 0.2rem;
		}
		&:active {
			padding: 0;
		}

		&__text {
			text-transform: uppercase;
			font-weight: 700;
			font-size: 1.6rem;
		}
		&__icon {
			height: 2rem;
		}
		&.blue {
			background: linear-gradient(286.2deg, $blue 10.05%, $purple 82.75%);
		}
		&.purple {
			background: radial-gradient(
					56.46% 46.25% at 35% 19.17%,
					rgba(255, 255, 255, 0.2) 0%,
					rgba(247, 194, 255, 0) 100%
				),
				linear-gradient(286.2deg, #9650c9 10.05%, #701da8 82.75%);
		}
		&__inner {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 2rem;
			border: 0.2rem solid $white;
			width: 100%;
			height: 100%;
			padding: 2rem 2.5rem;
			&.reverse {
				flex-direction: row-reverse;
			}
		}
	}

	@media (max-width: 767px) {
		.v-button {
			&__text {
				font-size: 1.4rem;
			}
		}
	}
	@media (max-width: 425px) {
		.v-button {
			height: 6.6rem;
		}
	}
</style>
