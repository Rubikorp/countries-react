import {
	Wrapper,
	InfoImage,
	InfoTitle,
	ListGroup,
	List,
	ListItem,
	Meta,
	TagGroup,
	Tag,
} from './styled/infoStyled'
import { useState, useEffect } from 'react'
import { IPropsInfo } from '../types/data'
import { convertObjectToArray } from '../utils/utils'
import { getCountriesByCode } from '../services/endPoints'

interface ICurrenciesArray {
	name: string
	symbol: string
}

interface INativeName {
	common: string
	official: string
}
export const Info = (props: IPropsInfo) => {
	const {
		name,
		flags,
		population,
		region,
		subregion,
		capital,
		tld,
		currencies,
		languages,
		borders = [],
		handleParamChange,
	} = props

	const [neighbors, setNeighbors] = useState<string[]>([])

	useEffect(() => {
		getCountriesByCode(borders).then(data =>
			setNeighbors(data.map(country => country.name.common))
		)
	}, [borders])

	const toArrayNativeName = (): INativeName[] =>
		convertObjectToArray<INativeName>(name.nativeName as INativeName)
	const toArrayCurrencies = (): ICurrenciesArray[] =>
		convertObjectToArray<ICurrenciesArray>(currencies)
	const toArrayLanguage = (): string[] =>
		convertObjectToArray<string>(languages)

	return (
		<Wrapper>
			<InfoImage src={flags.svg} alt={name.common} />
			<div>
				<InfoTitle> {name.common} </InfoTitle>
				<ListGroup>
					<List>
						<ListItem>
							<b>Native Name:</b>{' '}
							{toArrayNativeName().map(name => (
								<span>{name.common}</span>
							))}
						</ListItem>
						<ListItem>
							<b>Population:</b> {population}
						</ListItem>
						<ListItem>
							<b>Region:</b> {region}
						</ListItem>
						<ListItem>
							<b>Sub Region:</b> {subregion}
						</ListItem>
						<ListItem>
							<b>Capital:</b> {capital}
						</ListItem>
					</List>

					<List>
						<ListItem>
							<b>Top Level DomaIn: </b>
							{tld.map(d => (
								<span key={d}>{d}</span>
							))}
						</ListItem>
						<ListItem>
							<b>Currency: </b>
							{toArrayCurrencies().map(curr => (
								<span key={curr.name}>{curr.name}</span>
							))}
						</ListItem>
						<ListItem>
							<b>Language: </b>
							{toArrayLanguage().map(lang => (
								<span key={lang}>{lang}</span>
							))}
						</ListItem>
					</List>
				</ListGroup>

				<Meta>
					<b>Border countries</b>
					{borders.length === 0 ? (
						<span>There is no border countries</span>
					) : (
						<TagGroup>
							{neighbors.map(neighbor => (
								<Tag key={neighbor} onClick={() => handleParamChange(neighbor)}>
									{neighbor}
								</Tag>
							))}
						</TagGroup>
					)}
				</Meta>
			</div>
		</Wrapper>
	)
}
