<template>
	<section class="the-training">
		<div class="the-training__container center">
			<div class="the-training__col">
				<div class="the-training__title-wrapper">
					<div class="the-training__title-block"></div>
					<h1 class="the-training__title">Обучение</h1>
				</div>
				<div class="the-training__tabs">
					<div class="the-training__nav-decorative"></div>
					<div
						class="the-training__nav selected"
						@click="switchTabs(1)"
					>
						<h4 class="the-training__nav-text">Новичкам</h4>
					</div>
					<div class="the-training__nav" @click="switchTabs(2)">
						<h4 class="the-training__nav-text">Разработчикам</h4>
					</div>
					<div class="the-training__tab" v-if="tab === 'newbie'">
						<p class="the-training__description">
							Пройдите обучение в дружном коллективе
							профессиональных разработчиков. Гарантированная
							помощь в изучении материала, практика на реальных
							проектах, оценка ваших компетенций для выбора
							индивидуальной программы обучения в интересующем вас
							направлении WEB-разработки. По прохождении курса
							обучения гарантированное трудоустройство* в уютном
							офисе.
						</p>
					</div>
					<div class="the-training__tab" v-else-if="tab === 'dev'">
						<p class="the-training__description">
							Углубленное изучение языков программирования,
							практика на реальных проектах, помощь наставника,
							гарантированное трудоустройство, карьерный рост,
							уютный офис с удобным расположением, комфортное
							рабочее место и лояльная система организации
							рабочего процесса.
						</p>
					</div>
					<a
						href="https://telegram.im/@compass_pro"
						target="_blank"
						class="the-training__btn"
					>
						<v-button
							:color="'purple'"
							:text="'Оставить заявку'"
							:icon="'img/icon/tg.svg'"
						></v-button>
					</a>
				</div>
			</div>
			<div class="the-training__col">
				<condition-card
					:icon="'img/icon/code.svg'"
					:title="'Трудоустройство'"
					:description="'Проводим обучение WEB-программированию с последующим трудоустройством на работу'"
				></condition-card>
				<condition-card
					:icon="'img/icon/code.svg'"
					:title="'Новая работа'"
					:description="'По результатам проведения обучения, лучших мы пригласим к нам на постоянную работу с возможностью карьерного роста'"
				></condition-card>
				<condition-card
					:icon="'img/icon/code.svg'"
					:title="'Новые знания'"
					:description="'Наши преподаватели научат вас новым профессиональным навыкам и практикам в области web-разработки'"
				></condition-card>
				<condition-card
					:icon="'img/icon/code.svg'"
					:title="'Стабильная зарплата'"
					:description="'С нашей стороны мы обещаем вам хорошие условия труда, интересные проекты, дружную команду и высокую заработную плату'"
				></condition-card>
			</div>
		</div>
	</section>
</template>

<script>
	import { mapState } from "vuex";
	import ConditionCard from "@/components/ConditionCard";

	export default {
		name: "TheTraining",
		components: { ConditionCard },
		data: () => ({
			tab: "newbie",
		}),
		computed: {
			...mapState(["windowWidth"]),
		},
		methods: {
			switchTabs(option) {
				const navs = document.querySelectorAll(".the-training__nav");
				const decorativeBlock = document.querySelector(
					".the-training__nav-decorative"
				);

				switch (option) {
					case 1: {
						this.tab = "newbie";

						navs[0].classList.add("selected");
						navs[1].classList.remove("selected");
						decorativeBlock.removeAttribute("style");
						break;
					}
					case 2: {
						this.tab = "dev";
						navs[0].classList.remove("selected");
						navs[1].classList.add("selected");

						if (this.windowWidth > 1023) {
							decorativeBlock.setAttribute(
								"style",
								"transform: translateX(17rem); background: linear-gradient(286.2deg, #3B94C7 10.05%, #4A50B6 82.75%), linear-gradient(286.2deg, #3B94C7 10.05%, #4A50B6 82.75%), #C4C4C4;"
							);
						} else {
							decorativeBlock.setAttribute(
								"style",
								"transform: translateX(100%); background: linear-gradient(286.2deg, #3B94C7 10.05%, #4A50B6 82.75%), linear-gradient(286.2deg, #3B94C7 10.05%, #4A50B6 82.75%), #C4C4C4;"
							);
						}

						break;
					}
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-training {
		padding-top: 6rem;
		padding-bottom: 6rem;
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
		&__title {
			width: max-content;
			&-wrapper {
				display: flex;
				align-items: center;
				height: 11rem;
				width: fit-content;
				padding-right: 2.5rem;
				background: url(/public/img/icon/decorative-block.svg) center
					right / contain no-repeat;
				margin-bottom: 10rem;
			}
		}
		&__col {
			&:first-child {
				max-width: 47rem;
			}
			&:last-child {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: repeat(2, max-content);
				grid-gap: 3rem 5rem;
				.condition-card {
					&:nth-child(odd) {
						transform: translateY(8rem);
					}
					&:nth-child(3) {
						transform: translateY(6rem);
					}
				}
			}
		}

		&__tabs {
			position: relative;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 0 2rem;
		}
		&__tab {
			grid-column: 1/3;
			margin-bottom: 5rem;
			min-height: 26rem;
			animation: fade 2s 1;
		}
		&__description {
			line-height: 2.8rem;
		}
		&__btn {
			grid-column: 1/3;
			max-width: 32rem;
			width: 100%;
		}

		&__nav {
			user-select: none;
			cursor: pointer;
			height: 7.2rem;
			display: flex;
			align-items: center;
			margin-bottom: 3rem;
			z-index: 2;
			&-text {
				position: relative;
				text-transform: uppercase;
				font-weight: 400;
				color: $light-purple;
				padding: 0 1rem;
				&::after {
					content: "";
					position: absolute;
					left: 0;
					bottom: -1rem;
					width: 100%;
					height: 0.1rem;
					background-color: $light-purple;
					transition: all 0.2s ease;
				}
			}
			&:nth-child(2) {
				grid-area: 1/1;
			}
			&-decorative {
				transform: translateX(-8rem);
				grid-area: 1/1;
				height: 7.2rem;
				background: linear-gradient(
						286.2deg,
						$light-purple 10.05%,
						#772d76 82.75%
					),
					$gray;
				opacity: 0.2;
				transition: all 0.3s ease;
			}
			&.selected {
				.the-training__nav {
					&-text {
						color: $middle-dark;
						font-weight: 700;
						&::after {
							width: 0;
						}
					}
				}
			}
		}
	}

	@keyframes fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@media (max-width: 1200px) {
		.the-training {
			&__container {
				gap: 2rem;
			}
			&__col {
				&:last-child {
					grid-gap: 2rem 3rem;
				}
			}
		}
	}

	@media (max-width: 1170px) {
		.the-training {
			&__container {
				justify-content: center;
			}
			&__col {
				&:first-child {
					max-width: 50%;
				}
				&:last-child {
					display: flex;
					flex-direction: column;
					gap: 2rem;

					.condition-card {
						&:nth-child(odd) {
							transform: inherit;
						}
					}
				}
			}
			&__nav {
				&-decorative {
					width: 15rem;
				}
			}
		}
	}

	@media (max-width: 1023px) {
		.the-training {
			&__col {
				&:first-child {
					max-width: inherit;
				}
			}
			&__title {
				&-wrapper {
					height: 9.5rem;
					margin-bottom: 5rem;
				}
			}
			&__tabs {
				grid-gap: 0;
				grid-template-columns: repeat(2, 50%);
				justify-content: space-between;
				gap: 1rem;
			}
			&__nav {
				justify-content: center;
				&-text {
				}
				&-decorative {
					width: 100%;
					transform: inherit;
				}
			}
		}
	}

	@media (max-width: 767px) {
		.the-training {
			&__container {
				flex-direction: column;
			}
			&__nav {
				height: 5rem;
				&-decorative {
					height: 5rem;
				}
			}
			&__tab {
				min-height: inherit;
			}
		}
	}

	@media (max-width: 540px) {
		.the-training {
			&__title {
				&-wrapper {
					height: 6.5rem;
				}
			}
			&__nav {
				&:nth-child(3) {
					.the-training__nav-text {
						padding-left: 0;
					}
				}
			}
			&__tabs {
			}
		}
	}
</style>
