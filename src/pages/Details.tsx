import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCountry } from '../services/endPoints'
import { IoArrowBack } from 'react-icons/io5'
import { IPropsInfo } from '../types/data'
import { Button } from '../components/styled/buttonStyled'
import { Info } from '../components/Info'
import LoadedHomePage from '../components/LoadedHomePage'

const Details: React.FC = () => {
	const { name } = useParams<string>()
	const [isLoaded, setIsLoaded] = useState<boolean>(false)

	const navigate = useNavigate()

	const [country, setCountry] = useState<IPropsInfo>()

	const handleParamChange = (newValue: string): void => {
		navigate(`/country/${newValue}`)
	}

	useEffect(() => {
		setIsLoaded(true)
		// Проверка на наличие name перед запросом данных
		if (name) {
			getCountry(name).then((data: IPropsInfo[]) => {
				setCountry(data[0] as IPropsInfo)
				setIsLoaded(false)
			})
		}
	}, [name])

	return (
		<div>
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack /> Back
			</Button>
			{isLoaded ? (
				<LoadedHomePage />
			) : (
				country && <Info {...country} handleParamChange={handleParamChange} />
			)}
		</div>
	)
}

export default Details
