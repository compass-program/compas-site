<template>
	<div class="service">
		<div class="service-inner">
			<div class="service__text-bg">
				{{ title }}
			</div>
			<h3 class="service__title">{{ title }}</h3>
			<p class="service__description">{{ description }}</p>
			<svg
				class="service__arrow"
				width="42"
				height="20"
				viewBox="0 0 42 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M40.0002 10L40.7304 10.6832L41.3696 10L40.7304 9.31677L40.0002 10ZM30.8489 1.68323L39.27 10.6832L40.7304 9.31677L32.3093 0.316769L30.8489 1.68323ZM39.27 9.31677L30.8489 18.3168L32.3093 19.6832L40.7304 10.6832L39.27 9.31677Z"
					fill="#4B4FB4"
				/>
				<path d="M40 10L0 10" stroke="#4B4FB4" stroke-width="2" />
			</svg>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ServiceCard",
		props: {
			title: String,
			description: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.service {
		&-inner {
			position: relative;
			display: flex;
			flex-direction: column;
			background: linear-gradient(
				147.28deg,
				$white 11.21%,
				$white 61.25%,
				$white 106.29%
			);
			height: max-content;
			padding: 11rem 2rem 2rem 2rem;
			box-shadow: 0 0.4rem 3rem rgba(0, 0, 0, 0.15);
			overflow: hidden;
			&::after {
				content: "";
				z-index: 1;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				transition: opacity 0.3s;
				opacity: 0;
				background: linear-gradient(
					147.28deg,
					#a865dd 11.21%,
					#4b4fb4 61.25%,
					#000000 106.29%
				);
			}
			&:hover {
				&::after {
					opacity: 1;
				}
				.service {
					&__text-bg {
						left: 0;
						-webkit-text-stroke: 0.1rem rgba(255, 255, 255, 0.1);
						transition: all 0.3s ease;
					}
					&__title,
					&__description {
						color: $white;
						transition: all 0.3s ease;
					}
					&__arrow {
						path {
							fill: $white;
							stroke: $white;
							transition: all 0.3s ease;
						}
					}
				}
			}
		}

		&__text-bg {
			user-select: none;
			position: absolute;
			left: 45%;
			top: 2rem;
			width: max-content;
			max-width: 70rem;
			text-transform: uppercase;
			z-index: 2;
			font-size: 6.2rem;
			-webkit-text-stroke: 0.1rem rgba(0, 0, 0, 0.1);
			color: transparent;
			font-weight: 900;
			transition: all 0.3s ease;
		}
		&__title {
			line-height: 3.7rem;
			max-width: 90%;
			margin-bottom: 6rem;
			transition: all 0.3s ease;
			z-index: 2;
		}
		&__description {
			font-size: 1.3rem;
			line-height: 1.8rem;
			margin-bottom: 2rem;
			transition: all 0.3s ease;
			z-index: 2;
		}
		&__arrow {
			align-self: flex-end;
			transition: all 0.3s ease;
			z-index: 2;
		}
	}

	@media (max-width: 540px) {
		.service {
			padding-top: 6rem;
			&__title {
				margin-bottom: 3rem;
			}
		}
	}
</style>
