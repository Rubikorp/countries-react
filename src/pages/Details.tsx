import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCountry } from '../services/endPoints'
import { IoArrowBack } from 'react-icons/io5'
import { IPropsInfo } from '../types/data'
import { Button } from '../components/styled/buttonStyled'
import { Info } from '../components/Info'

const Details: React.FC = () => {
	const { name } = useParams<string>()

	const navigate = useNavigate()

	const [borderCountry, setBorderCountry] = useState<string>(name as string)

	const [country, setCountry] = useState<IPropsInfo>()

	const handleParamChange = (newValue: string): void => {
		navigate(`/country/${newValue}`)
		setBorderCountry(newValue)
	}

	useEffect(() => {
		getCountry(borderCountry as string).then((data: IPropsInfo[]) => {
			setCountry(data[0] as IPropsInfo)
		})
	}, [borderCountry])

	return (
		<div>
			<Button onClick={() => navigate('/countries-react', { replace: true })}>
				<IoArrowBack /> Go back
			</Button>
			{country && <Info {...country} handleParamChange={handleParamChange} />}
		</div>
	)
}

export default Details
