import {ReactNode} from 'react'

export interface ISearch {
	search: string | undefined
	setSearch: (search: string) => void
}

export interface IOption {
	value: string
	label: string
}

export interface IChildren {
	children: ReactNode
}
