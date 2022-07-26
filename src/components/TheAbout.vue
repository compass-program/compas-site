<template>
	<section class="the-about">
		<div class="the-about__container center">
			<div class="the-about__col">
				<div class="the-about__title-wrapper">
					<div class="the-about__title-block"></div>
					<h1 class="the-about__title">О компании</h1>
				</div>
				<p class="the-about__description">
					Компас-про на рынке веб консалтинга находится с 2015 года.
					Мы имеем собственную проектную деятельность с портфолио
					проектов. <br />
					Мы включены в реестр аккредитованных ИТ компаний.
				</p>
				<a
					href="https://telegram.im/@compass_pro"
					class="the-about__tg"
				>
					<v-button
						:color="'purple'"
						:text="'Оставить заявку'"
						:icon="'img/icon/tg.svg'"
					></v-button>
				</a>
			</div>
			<div class="the-about__col">
				<div class="the-about__address-decorative"></div>
				<div class="the-about__address"></div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "TheAbout",
		mounted() {
			const script = document.createElement("script");

			script.onload = () => {
				this.yaMapInit();
			};

			script.id = "ymaps";
			script.src =
				"https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae55f846dc8f9b59c77b59a4cd630d23fc490894f1828da4f4b57768de6f9792b&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true";
			const address = document.querySelector(".the-about__address");
			address.insertAdjacentElement("afterbegin", script);
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-about {
		display: flex;
		align-items: center;
		background: radial-gradient(
				19.91% 40.74% at 87.72% 51.85%,
				rgba(145, 156, 251, 0.2) 0%,
				rgba(0, 26, 255, 0) 100%
			),
			radial-gradient(
				42.94% 75.51% at 17.25% 36.57%,
				rgba(228, 255, 253, 0.41) 0%,
				rgba(255, 255, 255, 0) 100%
			),
			radial-gradient(
				22.59% 39.52% at 8.47% 75.79%,
				rgba(108, 79, 155, 0.2) 0%,
				rgba(112, 29, 168, 0) 100%
			),
			linear-gradient(
				0deg,
				rgba(160, 186, 191, 0.2) -2.08%,
				rgba(160, 186, 191, 0.124) 100%
			),
			$white;
		&__container {
			display: flex;
			gap: 3rem;
		}
		&__col {
			position: relative;
			width: 34%;
			.v-button {
				margin-bottom: 6rem;
			}
			&:last-child {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				width: calc(66% - 3rem);
			}
		}
		&__description {
			margin-bottom: 10rem;
		}
		&__title {
			width: max-content;
			&-wrapper {
				display: flex;
				align-items: center;
				height: 11rem;
				width: fit-content;
				padding-right: 3.5rem;
				background: url(/public/img/icon/decorative-block.svg) center
					right / contain no-repeat;
				margin-bottom: 10rem;
			}
		}
		&__address {
			width: 100%;
			height: 40rem;
			&-decorative {
				position: absolute;
				bottom: 2.5rem;
				right: -8.5rem;
				background: linear-gradient(
						286.2deg,
						$light-purple 10.05%,
						#772d76 82.75%
					),
					$gray;
				opacity: 0.5;
				height: 40rem;
				width: 18rem;
			}
		}
		&__tg {
			width: 100%;
			max-width: 32rem;
		}
	}

	@media (max-width: 1023px) {
		.the-about {
			&__container {
				flex-direction: column;
			}
			&__col {
				&:nth-child(n) {
					width: 100%;
				}
			}
			&__title {
				&-wrapper {
					height: 9.5rem;
					margin-bottom: 5rem;
				}
			}
			&__description {
				margin-bottom: 4rem;
			}
			.v-button {
				margin-bottom: 4rem;
			}
			&__address {
				height: 24rem;
				&-decorative {
					display: none;
				}
			}
		}
	}

	@media (max-width: 540px) {
		.the-about {
			padding: 0;
			&__col {
				&:first-child {
					padding: 1.5rem;
				}
				&:last-child {
					padding: 1.5rem 0;
				}
			}
			&__title {
				&-wrapper {
					height: 6.5rem;
				}
			}
		}
	}
</style>
