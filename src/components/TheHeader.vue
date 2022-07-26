<template>
	<header class="the-header center">
		<div class="the-header__col">
			<img src="img/icon/logo.svg" alt="logo" class="the-header__logo" />
			<div class="the-header__slogan">
				<span class="the-header__slogan-row">с нами</span>
				<span class="the-header__slogan-row">в правильном</span>
				<span class="the-header__slogan-row">направлении</span>
			</div>
		</div>

		<div class="the-header__col">
			<a
				href="https://digital.gov.ru/ru/activity/govservices/1/"
				target="_blank"
				class="the-header__minciphras"
			>
				<img src="img/icon/minciphras.png" alt="Минцифры России" />
				<span
					class="the-header__minciphras-description"
					v-if="windowWidth > 630 || windowWidth <= 425"
				>
					ООО “Компас ПРО” <br />
					включена в реестр Аккредитованных ИТ компаний
				</span>
				<span class="the-header__minciphras-description" v-else>
					Мы включены в реестр ИТ
				</span>
			</a>

			<a
				href="https://telegram.im/@compass_pro"
				target="_blank"
				class="the-header__telegram"
			>
				<img src="img/icon/tg.svg" alt="" />
			</a>
		</div>
	</header>
</template>

<script>
	import { mapState } from "vuex";

	export default {
		name: "TheHeader",
		computed: { ...mapState(["windowWidth"]) },
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-header {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 0;
		height: 8rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		padding: 0 1.5rem;
		z-index: 2;
		&__col {
			display: flex;
			align-items: center;
			gap: 3rem;
			color: $white;
			z-index: 3;
		}

		&__logo {
			height: 4rem;
		}
		&__slogan {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 4rem;
			width: max-content;
			&-row {
				display: block;
				text-transform: uppercase;
			}
		}

		&__minciphras {
			display: flex;
			align-items: center;
			gap: 1rem;
			color: $white;
			&-description {
				text-transform: uppercase;
				line-height: 1.3;
			}
		}
		&__telegram {
			background: linear-gradient(315.55deg, $blue 6.42%, $purple 64.22%);
			min-width: 3.4rem;

			height: 3.4rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	@media (max-width: 767px) {
		.the-header {
			&__col {
				gap: 2.5rem;
			}
		}
	}
	@media (max-width: 540px) {
		.the-header {
			&__slogan {
				justify-content: center;
				gap: 0.4rem;
			}
		}
	}
	@media (max-width: 425px) {
		.the-header {
			flex-direction: column;
			padding-top: 1.5rem;
			padding-bottom: 1.5rem;
			gap: 1rem;
			height: max-content;
			&__col {
				width: 100%;
				gap: 2rem;
				&:last-child {
					justify-content: space-between;
				}
			}

			&__logo {
				max-width: 9rem;
				height: initial;
			}

			&__slogan {
				height: 3rem;
			}
		}
	}
</style>
