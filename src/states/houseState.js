import { create } from 'zustand';
import { housesData } from '../data';
import { getAllCountries } from '../utils';

const initialHouseState = {
	country: 'Location (any)',
	countries: getAllCountries(housesData),
	property: 'Property (any)',
	properties: [],
	price: 'Price range (any)',
	houses: housesData,
	loading: false,
};

const useHouseStore = create((set) => ({
	...initialHouseState,
	updateCountry: (newCountry) => set({ country: newCountry }),
	updateProperty: (newProperty) => set({ property: newProperty }),
	updatePrice: (newPrice) => set({ price: newPrice }),
}));

export default useHouseStore;
