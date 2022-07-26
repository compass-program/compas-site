<template>
	<footer class="the-footer">
		<div class="the-footer__container center">
			<div class="the-footer__col the-footer__left">
				<div class="the-footer__left-inner">
					<img class="the-footer__logo" src="/favicon.ico" />
					<p class="the-footer__name">Компас Про</p>
					<p class="the-footer__slogan">
						с нами в правильном направлении
					</p>
				</div>
			</div>
			<div class="the-footer__col the-footer__middle">
				<img
					src="/img/icon/huawei.png"
					alt=""
					class="the-footer__partner"
				/>
				<img
					src="/img/icon/ibm-business.png"
					alt=""
					class="the-footer__partner"
				/>

				<a
					href="https://digital.gov.ru/ru/activity/govservices/1/"
					target="_blank"
					class="the-footer__minciphras"
				>
					<img
						src="/img/icon/minciphras-dark.png"
						alt="Минцифры России"
						class="the-footer__minciphras-icon"
					/>
					<span class="the-footer__minciphras-description">
						ООО “Компас ПРО” <br />
						включена в реестр Аккредитованных ИТ компаний
					</span>
					<!-- <span class="the-header__minciphras-description" v-else>
					Мы включены в реестр ИТ
				</span> -->
				</a>
			</div>
			<div class="the-footer__col the-footer__right">
				<p class="the-footer__copyright">
					Создание и продвижение сайтов © 2015-{{ current_year }}
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "TheFooter",
		computed: {
			current_year: () => {
				return new Date().getFullYear();
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-footer {
		padding: 0 4rem;
		&__container {
			position: relative;
			display: grid;
			grid-template-columns: 1fr 1.2fr 1fr;
			align-items: center;
			height: 100%;
			&::before {
				content: "";
				position: absolute;
				right: 100%;
				top: 0;
				bottom: 0;
				width: 50vw;
				background-color: rgba($white, $alpha: 0.5);
			}
		}
		&__col {
			height: 100%;
			display: flex;
			align-items: center;
			padding: 2rem 0;
			&:nth-child(-n + 2) {
				background-color: rgba(255, 255, 255, 0.5);
			}
		}

		&__left {
			&-inner {
				display: grid;
				grid-template-columns: 6rem 1fr;
				grid-template-rows: repeat(2, min-content);
				grid-gap: 1rem 1.4rem;
				position: relative;
				padding-right: 1.5rem;
			}
		}
		&__logo {
			height: 6rem;
			grid-row: 1/3;
		}
		&__name {
			font-size: 1.4rem;
			font-weight: 700;
			line-height: inherit;
			text-transform: uppercase;
			align-self: flex-end;
		}
		&__slogan {
			font-size: 1rem;
			width: max-content;
			line-height: inherit;
			text-transform: uppercase;
		}

		&__middle {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1.5rem;
		}
		&__partner {
			height: 4rem;
		}
		&__minciphras {
			display: flex;
			align-items: center;
			gap: 1rem;
			&-icon {
				height: 4rem;
			}

			&-description {
				text-transform: uppercase;
				color: $dark;
			}
		}

		&__right {
			justify-content: flex-end;
			padding-left: 1.5rem;
		}
		&__copyright {
			font-size: 1rem;
			text-transform: uppercase;
			line-height: 1.3;
		}
	}

	@media (max-width: 1023px) {
		.the-footer {
			&__container {
				grid-template-columns: repeat(2, 1fr);
			}
			&__col {
				padding-top: 0.3rem;
				padding-bottom: 0.3rem;
				&:nth-child(n) {
					background-color: transparent;
				}
			}
			&__left {
				&-inner {
					grid-gap: 0.3rem 1rem;
					grid-template-columns: max-content 1fr;
				}
			}
			&__logo {
				max-height: 4.8rem;
			}
			&__name {
				font-size: 1.2rem;
			}

			&__middle {
			}

			&__partner {
				max-height: 3rem;
			}

			&__slogan {
				font-size: 0.8rem;
			}
			&__right {
				justify-content: center;
				grid-column: 1/3;
				padding: 1rem;
			}
		}
	}

	@media (max-width: 767px) {
		.the-footer {
			padding: 0 1.5rem;
			&__container {
				&::before {
					display: none;
				}
			}
			&__col {
				&:nth-child(-n + 2) {
					background-color: inherit;
				}
			}
			&__middle {
			}
			&__partner {
				max-height: 2.3rem;
			}

			&__right {
				padding-left: 0;
			}
		}
	}

	@media (max-width: 600px) {
		.the-footer {
			padding-top: 2rem;
			padding-bottom: 2rem;
			&__container {
				display: block;
			}

			&__copyright {
				font-size: 0.8rem;
			}
			&__minciphras {
				&-description {
					font-size: 0.8rem;
				}
			}
		}
	}

	@media (max-width: 430px) {
		.the-footer {
			&__middle {
				justify-content: center;
				gap: 0.5rem;
			}
			&__minciphras {
				&-description {
					width: min-content;
				}
			}
		}
	}
</style>
