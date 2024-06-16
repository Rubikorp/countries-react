import styled from 'styled-components'

export const InputContainer = styled.label`
	background-color: var(--color-ui-base);
	padding: 1rem 1rem;
	display: flex;
	align-items: center;

	border-radius: var(--radius);
	box-shadow: var(--shadow);
	margin: 1.5rem;

	@media (min-width: 768px) {
		margin: 0;
		width: 280px;
	}
`

export const Input = styled.input.attrs({
	type: 'search',
	placeholder: 'Search for country...',
})`
	background-color: transparent;
	margin-left: 2rem;
	outline: none;
	border: none;
	color: var(--color-txt);
`
