import { Routes, Route } from 'react-router-dom'
import './App.scss'
import { HeaderComponent } from './components/HeaderComponent'
import { Main } from './components/Main'
import Details from './pages/Details'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import { useState } from 'react'
import { ICountry } from './types/data'

function App() {
	const [countries, setCountries] = useState<ICountry[]>([])
	const [isLoaded, setIsLoaded] = useState<boolean>(true)

	return (
		<>
			<HeaderComponent />
			<Main>
				<Routes>
					<Route
						path='/'
						element={
							<HomePage
								countries={countries}
								setCountries={setCountries}
								isLoaded={isLoaded}
								setIsLoaded={setIsLoaded}
							/>
						}
					/>
					<Route path='/country/:name' element={<Details />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</Main>
		</>
	)
}

export default App
