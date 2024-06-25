import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	max-width: 1240px;
	margin: 0 auto;
`
export const Loaded = styled.span`
	width: 48px;
	height: 48px;
	display: block;
	margin: 40px auto;
	position: relative;
	border: 3px solid var(--color-txt);
	border-radius: 50%;
	box-sizing: border-box;
	animation: animloader 2s linear infinite;
	&::after {
		content: '';
		box-sizing: border-box;
		width: 6px;
		height: 24px;
		background: var(--color-txt);
		transform: rotate(-45deg);
		position: absolute;
		bottom: -20px;
		left: 46px;
	}

	@keyframes animloader {
		0% {
			transform: translate(-10px, -10px);
		}
		25% {
			transform: translate(-10px, 10px);
		}
		50% {
			transform: translate(10px, 10px);
		}
		75% {
			transform: translate(10px, -10px);
		}
		100% {
			transform: translate(-10px, -10px);
		}
	}
`
