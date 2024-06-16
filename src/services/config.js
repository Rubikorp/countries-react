const BASE_URL = 'https://restcountries.com/v3.1/'

export const config = (): string => {
	const ALL_COUNTRIES = BASE_URL + 'all'
	const searchByCountry = (name: string) => BASE_URL + 'name/' + name
	const filterByCode = (code: string[]) =>
		BASE_URL + 'alpha?codes' + code.join(',')

	return {
		ALL_COUNTRIES,
		searchByCountry,
		filterByCode,
	}
}
