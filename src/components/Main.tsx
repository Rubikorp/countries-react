import styled from 'styled-components'
import { Container } from './styled/container'
import { IChildren } from '../types/data'

const Wrapper = styled.main`
	padding: 2rem 0;
	@media (min-width: 768px) {
		padding: 4rem 0;
	}
`


export const Main: React.FC<IChildren> = ({ children }) => {
	return (
		<Wrapper>
			<Container>{children}</Container>
		</Wrapper>
	)
}
