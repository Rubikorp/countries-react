import styled from 'styled-components'
import Select from 'react-select'

export const CustomSelect = styled(Select).attrs({
	styles: {
		control: provided => ({
			...provided,
			backgroundColor: 'var(--color-ui-base)',
			borderRadius: 'var(--radius)',
			color: 'var(--color-txt)',
			cursor: 'pointer',
			border: 'none',
			boxShadow: 'var(--shadow)',
			padding: '0.25rem',
			outline: 'none',
		}),
		option: (provided, state) => ({
			...provided,
			cursor: 'pointer',
			color: 'var(--color-txt)',
			backgroundColor: state.isSelected
				? 'var(--color-bg)'
				: 'var(--color-ui-base)',
		}),
	},
})`
	width: 200px;
	border-radius: var(--radius);
	font-family: var(--family);
	border: none;

	& > * {
		box-shadow: var(--box-shadow);
	}

	& input {
		padding-left: 0.25rem;
	}

	& * {
		color: var(--color-txt) !important;
	}

	& > div {
		background-color: var(--color-ui-base) !important;
	}
`
