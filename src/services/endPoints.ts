import axios, { AxiosResponse } from 'axios'
import { ICountry, IPropsInfo } from '../types/data'
import { ALL_COUNTRIES, searchByCountry, filterByCode } from './config'

/**
 * Fetches all countries from the API.
 *
 * @returns {Promise<ICountry[]>} - A promise that resolves to an array of all countries.
 */
export function getCountries(): Promise<ICountry[]> {
	const data = axios
		.get(ALL_COUNTRIES)
		.then((response: AxiosResponse<ICountry[]>) => response.data)
	return data
}

/**
 * Fetches a country by its code.
 *
 * @param {string} name
 * @returns {Promise<ICountry[]>} - A promise that resolves to an array of matching countries.
 */
export function getCountry(name: string): Promise<IPropsInfo[]> {
	const data = axios
		.get(searchByCountry(name))
		.then((response: AxiosResponse<IPropsInfo[]>) => response.data)
	return data
}

/**
 * Fetches countries by their ISO 3166-1 alpha-2 or alpha-3 codes.
 *
 * @param {string[]} code - An array of ISO 3166-1 alpha-2 or alpha-3 codes of the countries to fetch.
 * @returns {Promise<ICountry[]>} - A promise that resolves to an array of matching countries.
 */
export function getCountriesByCode(code: string[]): Promise<ICountry[]> {
	const data = axios
		.get(filterByCode(code))
		.then((response: AxiosResponse<ICountry[]>) => response.data)
	return data
}
