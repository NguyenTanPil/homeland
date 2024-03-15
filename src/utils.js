import { uniq } from 'lodash';
import { housesData } from './data';

export const getAllCountries = (houses) => {
	const countries = houses.map((house) => house.country);
	const uniqueCountries = uniq(['Location (any)', ...countries]);
	return uniqueCountries;
};

export const getAllProperties = (houses) => {
	const properties = houses.map((house) => house.type);
	const uniqueProperties = uniq(['Type (any)', ...properties]);
	return uniqueProperties;
};

export const isDefault = (str) => {
	return str.split(' ').includes('(any)');
};

export const getPrice = (priceString) => {
	const minPrice = parseInt(priceString.split(' ')[0]);
	const maxPrice = parseInt(priceString.split(' ')[2]);

	return { minPrice, maxPrice };
};

export const getCurrentHouse = (id) => {
	return housesData.find((house) => parseInt(id) === house.id);
};
