<template>
	<section class="the-banner">
		<div
			class="the-banner__slide the-banner__slide-left"
			@click="
				if (isLearnTitle === true) {
					slides('reset');
				}
			"
		></div>
		<div
			class="the-banner__slide the-banner__slide-right"
			@click="
				if (isBusinessTitle === true) {
					slides('reset');
				}
			"
		></div>
		<div class="the-banner__container center">
			<img
				src="/img/icon/logo-big.svg"
				alt="big logo"
				class="the-banner__logo"
			/>

			<div class="the-banner__title-wrapper">
				<transition name="fade-left" mode="out-in">
					<h2
						class="the-banner__title the-banner__title-left"
						v-if="isBusinessTitle"
					>
						Компетентная цифровизация бизнеса и автоматизация бизнес
						процессов
					</h2>
				</transition>
				<transition name="fade-left" mode="out-in">
					<h2
						class="the-banner__title the-banner__title-default"
						v-if="isDefaultTitle"
					>
						Бизнес проводник в цифровом мире
					</h2>
				</transition>
				<transition name="fade-left" mode="out-in">
					<h2
						class="the-banner__title the-banner__title-right"
						v-if="isLearnTitle"
					>
						Квалифицирован<wbr />ное обучение всем необходимым
						навыкам веб-разработки
					</h2>
				</transition>
			</div>

			<div class="the-banner__buttons">
				<div class="the-banner__button">
					<transition>
						<v-button
							:color="'blue'"
							:text="'Для бизнеса'"
							:icon="'img/icon/arrow-right.svg'"
							@click="
								if (isDefaultTitle) {
									slides('business');
								}
							"
							class="the-banner__btn-business"
							v-show="isDefaultTitle || isBusinessTitle"
						></v-button>
					</transition>
				</div>
				<div class="the-banner__button">
					<transition>
						<v-button
							:color="'purple'"
							:text="'Для учёбы'"
							:icon="'img/icon/arrow-left.svg'"
							:reverse="'reverse'"
							@click="
								if (isDefaultTitle) {
									slides('learn');
								}
							"
							class="the-banner__btn-learn"
							v-show="isDefaultTitle || isLearnTitle"
						></v-button>
					</transition>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { mapState } from "vuex";

	export default {
		name: "TheBanner",
		computed: {
			...mapState(["windowWidth"]),
		},
		data: () => ({
			isDefaultTitle: true,
			isBusinessTitle: false,
			isLearnTitle: false,
		}),
		methods: {
			slides(direction) {
				const banner = document.querySelector(".the-banner");
				const slideLeft = banner.querySelector(
					".the-banner__slide-left"
				);
				const slideRight = banner.querySelector(
					".the-banner__slide-right"
				);
				const btnBusiness = banner.querySelector(
					".the-banner__btn-business"
				);
				const btnLearn = banner.querySelector(".the-banner__btn-learn");

				this.isDefaultTitle = false;

				switch (direction) {
					case "business": {
						//* смена текста заголовка
						this.isBusinessTitle = true;
						this.isLearnTitle = false;

						//*манипуляция фоном
						slideLeft.setAttribute("style", "width: 90%");
						slideRight.setAttribute(
							"style",
							"width: 10%; cursor: pointer;"
						);

						//*движение кнопок
						if (this.windowWidth > 767) {
							btnBusiness.setAttribute(
								"style",
								`transform: translateX(${
									btnBusiness.clientWidth / 2 + 40
								}px)`
							);
						} else {
							btnBusiness.setAttribute(
								"style",
								`transform: translateY(${
									btnBusiness.clientHeight / 2 + 20
								}px)`
							);
						}

						break;
					}
					case "learn": {
						//* смена текста заголовка
						this.isBusinessTitle = false;
						this.isLearnTitle = true;

						//*манипуляция фоном
						slideRight.setAttribute("style", "width: 90%");
						slideLeft.setAttribute(
							"style",
							"width: 10%; cursor: pointer;"
						);

						//*движение кнопок
						if (this.windowWidth > 767) {
							btnLearn.setAttribute(
								"style",
								`transform: translateX(-${
									btnBusiness.clientWidth / 2 + 40
								}px)`
							);
						} else {
							btnLearn.setAttribute(
								"style",
								`transform: translateY(-${
									btnBusiness.clientHeight / 2 + 12
								}px)`
							);
						}
						break;
					}
					case "reset": {
						//*сброс фона
						slideRight.removeAttribute("style");
						slideLeft.removeAttribute("style");

						//*сброс кнопок
						btnBusiness.removeAttribute("style");
						btnLearn.removeAttribute("style");

						//*сброс текста заголовка
						this.isBusinessTitle = false;
						this.isLearnTitle = false;
						this.isDefaultTitle = true;
						break;
					}
				}
			},

			//*функция анимации поворота блока в сторону курсора
			mouseEffect() {
				const banner = document.querySelector(".the-banner");
				const logo = document.querySelector(".the-banner__logo");

				banner.addEventListener("mousemove", (event) => {
					const logoRect = logo.getBoundingClientRect();

					const logoPosition = {
						x: logoRect.x + logoRect.width / 2,
						y: logoRect.y + logoRect.height / 2,
					};

					const logoDistance = {
						x: event.clientX - logoPosition.x,
						y: event.clientY - logoPosition.y,
					};

					const maxDegree = 15;
					const baseDegree = 0;

					const degree = {
						x: (logoDistance.y / 1920) * (maxDegree * 3),
						y:
							baseDegree +
							(logoDistance.x / 1920) * (maxDegree * 2),
					};

					logo.style.transform = `perspective(800px) rotateX(${-degree.x}deg) rotateY(${
						degree.y
					}deg)`;
				});
			},
		},
		mounted() {
			this.mouseEffect();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-banner {
		position: relative;
		display: flex;
		min-height: 100vh;
		overflow-x: hidden;
		padding-top: 8rem;
		&__container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		&__logo {
			margin-bottom: 4.2rem;
			z-index: 1;
		}
		&__title {
			color: $white;
			text-align: center;
			grid-area: 1/1;
			z-index: 1;
			word-wrap: break-word;

			&-wrapper {
				display: grid;
				height: 10rem;
				width: 100%;
				margin-bottom: 8rem;
			}
		}
		&__buttons {
			display: grid;
			grid-template-columns: repeat(2, 32rem);
			justify-content: center;
			align-items: center;
			grid-gap: 8rem;
			transition: all 0.3s ease;
		}
		&__button {
			display: flex;
			grid-area: 1/1/1/3;
			width: 100%;

			&:first-child {
				justify-content: flex-start;
			}
			&:last-child {
				justify-content: flex-end;
			}
		}
		&__btn {
			&-learn {
				transition: all 0.3s ease;
				z-index: 2;
			}
			&-business {
				transition: all 0.3s ease;
				z-index: 2;
			}
		}
		&__slide {
			position: absolute;
			top: 0;
			width: 50%;
			height: 100%;
			transition: width 0.7s ease;
			&-left {
				left: 0;
				background: url(/public/img/banner-bg-left.png) center left /
					cover no-repeat;
			}
			&-right {
				right: 0;
				background: url(/public/img/banner-bg-right.png) center right /
					cover no-repeat;
			}
		}
	}

	@media (max-width: 1440px) {
		.the-banner {
			&__container {
				width: 80%;
			}
		}
	}
	@media (max-width: 1200px) {
		.the-banner {
			&__title {
				&-wrapper {
					height: fit-content;
				}
			}
		}
	}
	@media (max-width: 767px) {
		.the-banner {
			&__logo {
				display: none;
			}
			&__buttons {
				display: flex;
				flex-direction: column;
				gap: 2rem;
				width: 100%;
			}
			&__button {
				height: 7.2rem;
				&:nth-child(n) {
					justify-content: center;
				}
			}
		}
	}
	@media (max-width: 425px) {
		.the-banner {
			min-height: fit-content !important;
			&__container {
				width: 100%;
				padding-top: 15rem;
				padding-bottom: 4rem;
			}
		}
	}
</style>
