import { IoSearch } from 'react-icons/io5'
import { Input, InputContainer } from './styled/searchStyledComponent'
import { ISearch } from '../types/data'

export const SearchComponent: React.FC<ISearch> = ({ search, setSearch }) => {
	return (
		<InputContainer>
			<IoSearch />
			<Input onChange={e => setSearch(e.target.value)} value={search || ''} />
		</InputContainer>
	)
}
