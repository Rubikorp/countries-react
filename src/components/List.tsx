import { Wrapper } from './styled/listStyled'
import { IChildren } from '../types/data'

export const List: React.FC<IChildren> = ({ children }) => {
	return <Wrapper>{children}</Wrapper>
}
