<template>
	<section class="the-consulting">
		<div class="the-consulting__container center">
			<div class="the-consulting__col">
				<div class="the-consulting__title-wrapper">
					<h1 class="the-consulting__title">Web-Consulting</h1>
				</div>
				<p class="the-consulting__description">
					Обсудим ваш проект, бесплатно составим техническое задание,
					сформируем цену, закрепим за проектом специалистов и
					приступим к работе, осуществляя контроль за всеми
					последующими этапами работ.
				</p>
			</div>
			<div class="the-consulting__col the-consulting__benefits">
				<div class="the-consulting__benefit">
					<img
						src="/img/icon/code.svg"
						class="the-consulting__benefit-icon"
						alt=""
					/>

					<h4 class="the-consulting__benefit-title">Качество</h4>
					<p class="the-consulting__benefit-description">
						Профессиональный подход к каждому проекту и выполнению
						отдельных задач. Реализуем все идеи и сделаем Ваш бизнес
						доходным.
					</p>
				</div>
				<div class="the-consulting__benefit">
					<img
						src="/img/icon/price.svg"
						class="the-consulting__benefit-icon"
						alt=""
					/>

					<h4 class="the-consulting__benefit-title">Цена</h4>
					<p class="the-consulting__benefit-description">
						Вы сэкономите свой бюджет и получите отличный результат
						в приемлемые сроки
					</p>
				</div>
				<div class="the-consulting__benefit">
					<img
						src="/img/icon/code.svg"
						class="the-consulting__benefit-icon"
						alt=""
					/>
					<h4 class="the-consulting__benefit-title">
						Получение прибыли
					</h4>
					<p class="the-consulting__benefit-description">
						Грамотно сделанный проект будет приносить вам прибыль,
						благодаря слаженной работе нашей команды
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "TheConsulting",
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-consulting {
		display: flex;
		align-items: center;
		justify-content: center;
		background: radial-gradient(
				19.91% 98.94% at 87.72% 51.85%,
				rgba(145, 156, 251, 0.09) 0%,
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
			align-items: center;
			justify-content: space-between;
			gap: 10rem;
		}
		&__col {
			display: flex;
			flex-direction: column;
			width: 100%;
		}

		&__title {
			width: max-content;
			&-wrapper {
				display: flex;
				align-items: center;
				height: 11rem;
				width: fit-content;
				padding-right: 6rem;
				background: url(/public/img/icon/decorative-block.svg) center
					right / contain no-repeat;
				margin-bottom: 10rem;
			}
		}
		&__description {
			display: block;
			max-width: 57rem;
			width: 100%;
		}

		&__benefit {
			display: grid;
			grid-template-columns: max-content 1fr;
			grid-gap: 2rem;

			&:nth-child(2) {
				padding-left: 5rem;
				.the-consulting__benefit-text {
					max-width: 37rem;
				}
			}
			+ .the-consulting__benefit {
				margin-top: 7rem;
			}

			&-icon {
				grid-row: 1/3;
			}

			&-title {
				color: $light-purple;
				grid-column: 2/3;
				grid-row: 1/2;
			}
			&-description {
				font-size: 1.4rem;
				line-height: 2rem;
				font-weight: 300;
				color: $light-dark;
				grid-column: 2/3;
				grid-row: 2/3;
			}
		}
	}

	@media (max-width: 1170px) and (min-width: 1024px) {
		.the-consulting {
			&__container {
				gap: 5rem;
			}
		}
	}

	@media (max-width: 1023px) {
		.the-consulting {
			padding-top: 11rem;
			padding-bottom: 20rem;
			&__container {
				flex-direction: column;
				gap: 12rem;
			}
			&__title {
				&-wrapper {
					height: 9.5rem;
					margin-bottom: 6rem;
				}
			}
			&__description {
				max-width: 100%;
			}

			&__benefits {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-gap: 12rem 3rem;
			}
			&__benefit {
				&:nth-child(even) {
					grid-row: 1/3;
					grid-column: 2/3;
					align-self: center;
					padding: 0;
				}
				+ .the-consulting__benefit {
					margin: 0;
				}
			}
		}
	}

	@media (max-width: 767px) {
		.the-consulting {
			&__container {
				gap: 6rem;
			}

			&__title {
				&-wrapper {
					margin-bottom: 2.5rem;
				}
			}

			&__benefits {
				display: flex;
				flex-direction: column;
				gap: 4rem;
			}
			&__benefit {
				grid-gap: 1rem 1.8rem;
				&-icon {
					grid-column: 1/1;
					grid-row: 1/1;
					max-width: 4rem;
				}
				&-title {
					align-self: center;
				}
				&-description {
					grid-column: 1/3;
					grid-row: 2/3;
				}
				&:nth-child(even) {
					align-self: flex-start;
				}
			}
		}
	}

	@media (max-width: 540px) {
		.the-consulting {
			padding-top: 6.5rem;
			padding-bottom: 8rem;
			&__title {
				&-wrapper {
					height: 6.5rem;
				}
			}
		}
	}
</style>
