import axios, { AxiosPromise } from 'axios'
import { ICountry } from '../types/data'
import { ALL_COUNTRIES, searchByCountry, filterByCode } from './config'

/**
 * Fetches all countries from the API.
 *
 * @returns {Promise<ICountry[]>} - A promise that resolves to an array of all countries.
 */
export function getCountries(): Promise<ICountry[]> {
	const data = axios.get(ALL_COUNTRIES).then(response => response.data)
	return data
}

/**
 * Fetches a country by its code.
 *
 * @param {string} code - The ISO 3166-1 alpha-2 or alpha-3 code of the country.
 * @returns {Promise<ICountry[]>} - A promise that resolves to an array of matching countries.
 */
export function getCountry(code: string): Promise<ICountry[]> {
	const data = axios.get(searchByCountry(code)).then(response => response.data)
	return data
}

/**
 * Fetches countries by their ISO 3166-1 alpha-2 or alpha-3 codes.
 *
 * @param {string[]} code - An array of ISO 3166-1 alpha-2 or alpha-3 codes of the countries to fetch.
 * @returns {AxiosPromise<ICountry[]>} - A promise that resolves to an array of matching countries.
 */
export function getCountriesByCode(code: string[]): AxiosPromise<ICountry[]> {
	const data = axios.get(filterByCode(code)).then(response => response.data)
	return data
}
