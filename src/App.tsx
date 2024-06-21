import './App.scss'
import { Controls } from './components/Controls'
import { HeaderComponent } from './components/HeaderComponent'
import { Main } from './components/Main'
import { useEffect, useState } from 'react'
import { List } from './components/List'
import { ICountry } from './types/data'
import { Card } from './components/Card'
import { getCountries } from './services/endPoints'

function App() {
	const [countries, setCountries] = useState<ICountry[]>([])

	console.log(countries)

	useEffect(() => {
		getCountries().then(countries => setCountries(countries))
	}, [])

	return (
		<>
			<HeaderComponent />
			<Main>
				<Controls />
				<List>
					{countries.map((country: ICountry) => {
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
			</Main>
		</>
	)
}

export default App
