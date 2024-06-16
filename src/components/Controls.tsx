import { useState } from 'react'
import { SearchComponent } from './SearchComponent'
import { CustomSelect } from './styled/customSelectComponent'
import { Wrapper } from './styled/controls'
import { IOption } from '../types/data'

const options: IOption[] = [
	{ value: 'America', label: 'America' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Europa', label: 'Europa' },
	{ value: 'Africa', label: 'Africa' },
	{ value: 'Oceania', label: 'Oceania' },
]

export const Controls: React.FC = () => {
	const [search, setSearch] = useState('')
	const [region, setRegion] = useState<IOption | unknown>(null)

	return (
		<Wrapper>
			<SearchComponent search={search} setSearch={setSearch} />
			<CustomSelect
				options={options}
				placeholder='Filter by Region'
				isClearable
				isSearchable={false}
				value={region}
				onChange={(newValue: IOption | unknown) => {
					setRegion(newValue)
				}}
			/>
		</Wrapper>
	)
}
