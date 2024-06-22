import { useEffect, useState } from 'react'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import { Container } from './styled/container'
import {
	HeaderEl,
	ModeSwitcher,
	Title,
	Wrapper,
} from './styled/headerStyledComponents'

export const HeaderComponent: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)
	useEffect(() => {
		document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
	}, [isDarkMode])
	const togleDarkMode = () => {
		setIsDarkMode(!isDarkMode)
		console.log(isDarkMode)
	}

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title to='/'>Where is the world?</Title>
					<ModeSwitcher onClick={togleDarkMode}>
						{isDarkMode ? (
							<IoMoonOutline size='14px' />
						) : (
							<IoMoon size='14px' />
						)}
						<span style={{ marginLeft: '0.75rem' }}>
							{isDarkMode ? 'Light' : 'Dark'} mode
						</span>
					</ModeSwitcher>
				</Wrapper>
			</Container>
		</HeaderEl>
	)
}
