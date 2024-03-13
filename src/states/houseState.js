import { create } from 'zustand';
import { housesData } from '../data';
import { getAllCountries, getAllProperties } from '../utils';

const initialHouseState = {
	country: 'Location (any)',
	countries: getAllCountries(housesData),
	property: 'Property (any)',
	properties: getAllProperties(housesData),
	price: 'Price range (any)',
	houses: housesData,
	originHouse: housesData,
	loading: false,
};

const useHouseStore = create((set) => ({
	...initialHouseState,
	updateCountry: (newCountry) => set({ country: newCountry }),
	updateProperty: (newProperty) => set({ property: newProperty }),
	updatePrice: (newPrice) => set({ price: newPrice }),
	updateHouses: (newHouses) => set({ houses: newHouses }),
	updateLoading: (loading) => set({ loading }),
}));

export default useHouseStore;
