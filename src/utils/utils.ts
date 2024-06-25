export const convertObjectToArray = <T>(obj: object): T[] => {
	if (typeof obj === 'object') {
		const dataArray: T[] = Object.values(obj)
		return dataArray
	}
	return []
}
