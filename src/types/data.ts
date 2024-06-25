import { ReactNode } from 'react'

export interface ISearch {
	search: string | undefined
	setSearch: (search: string) => void
}

export interface IOption {
	value: string
	label: string
}

export interface IChildren {
	children: ReactNode | ReactNode[]
}

export interface ICardProps {
	img: string
	name: string
	onClick?: () => void
	info: { title: string; description: string }[]
}

export interface IConfigReturn {
	ALL_COUNTRIES: string
	searchByCountry: (name: string) => string
	filterByCode: (code: string[]) => string
}

export interface ICountry {
	name: { common: string; nativeName?: object }
	capital: string
	flags: { png: string; svg: string; alt?: string }
	population: number
	region: string
}

export interface IPropsInfo extends ICountry {
	subregion: string
	tld: string[]
	currencies: object
	languages: string[]
	borders?: string[]
	handleParamChange: (value: string) => void
}
