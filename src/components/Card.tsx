import {
	Wrapper,
	CardImg,
	CardBody,
	CardTitle,
	CardList,
	CardListItem,
} from './styled/cardStyled'
import { Link } from 'react-router-dom'

import { ICardProps } from '../types/data'

export const Card: React.FC<ICardProps> = ({ img, name, info }) => {
	return (
		<Link
			to={`/country/${name}`}
			style={{ textDecoration: 'none', color: 'inherit' }}
		>
			<Wrapper>
				<CardImg src={img} />
				<CardBody>
					<CardTitle>{name}</CardTitle>
					<CardList>
						{info.map(item => (
							<CardListItem key={item.title}>
								<b>{item.title}: </b>
								{item.description}
							</CardListItem>
						))}
					</CardList>
				</CardBody>
			</Wrapper>
		</Link>
	)
}
