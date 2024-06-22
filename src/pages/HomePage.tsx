import { Controls } from '../components/Controls'
import { useEffect, useState } from 'react'
import { List } from '../components/List'
import { ICountry } from '../types/data'
import { Card } from '../components/Card'
import { getCountries } from '../services/endPoints'

interface IHomePageProps {
	countries: ICountry[]
	setCountries: React.Dispatch<React.SetStateAction<ICountry[]>>
}

const HomePage: React.FC<IHomePageProps> = ({ countries, setCountries }) => {
	const [filteredCountries, setFilteredCountries] =
		useState<ICountry[]>(countries)

	useEffect(() => {
		!countries.length &&
			getCountries().then(countries => setCountries(countries))
	}, [])

	const handleSearch = (search: string | null, region: string | null): void => {
		let data = [...countries]
		if (region) {
			data = data.filter(country => country.region.includes(region))
		}
		if (search) {
			data = data.filter(country =>
				country.name.common.toLowerCase().includes(search)
			)
		}

		setFilteredCountries(data)
	}

	return (
		<>
			<Controls onSearch={handleSearch} />
			<List>
				{filteredCountries.map((country: ICountry) => {
					const countryInfo = {
						name: country.name.common,
						img: country.flags.png,
						info: [
							{
								title: 'Population',
								description: country.population.toLocaleString(),
							},
							{
								title: 'Region',
								description: country.region,
							},
							{
								title: 'Capital',
								description: country.capital,
							},
						],
					}
					return <Card key={country.name.common} {...countryInfo} />
				})}
			</List>
		</>
	)
}

export default HomePage
