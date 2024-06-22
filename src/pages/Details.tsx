import { useParams } from 'react-router-dom'

const Details: React.FC = () => {
	const { country } = useParams()

	return <div>{country}</div>
}

export default Details
