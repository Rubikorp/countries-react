import './App.scss'
import { Controls } from './components/Controls'
import { HeaderComponent } from './components/HeaderComponent'
import { Main } from './components/Main'

function App() {
	return (
		<>
			<HeaderComponent />
			<Main>
				<Controls />
			</Main>
		</>
	)
}

export default App
