import { uniq } from 'lodash';

export const getAllCountries = (houses) => {
	const countries = houses.map((house) => house.country);
	const uniqueCountries = uniq(['Location (any)...', ...countries]);
	return uniqueCountries;
};
