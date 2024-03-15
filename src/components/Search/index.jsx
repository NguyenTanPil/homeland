// import internal components
import { cloneDeep } from 'lodash';
import useHouseStore from '../../states/houseState';
import createSelectors from '../../states/selectors';
import { getPrice, isDefault } from '../../utils';
import CountryDropdown from './CountryDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import PropertyDropdown from './PropertyDropdown';

// import icons
import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {
	const houseState = createSelectors(useHouseStore);
	const { country, property, price, originHouse, updateHouses, updateLoading } = houseState.use;

	const handleSearchHouses = () => {
		updateLoading(true);
		const isDefaultCountry = isDefault(country);
		const isDefaultProperty = isDefault(property);
		const isDefaultPrice = isDefault(price);

		let newHouse = cloneDeep(originHouse);

		if (!isDefaultCountry) {
			newHouse = newHouse.filter((house) => house.country === country);
		}

		if (!isDefaultProperty) {
			newHouse = newHouse.filter((house) => house.type === property);
		}

		if (!isDefaultPrice) {
			const { minPrice, maxPrice } = getPrice(price);
			newHouse = newHouse.filter((house) => parseInt(house.price) >= minPrice && parseInt(house.price) <= maxPrice);
		}

		setTimeout(() => {
			updateHouses(newHouse);
			updateLoading(false);
		}, 1000);
	};

	return (
		<div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-md bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
			<CountryDropdown />
			<PropertyDropdown />
			<PriceRangeDropdown />

			<button
				onClick={handleSearchHouses}
				className='bg-violet-600 hover:bg-violet-800 transition w-full  lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg '
			>
				<RiSearch2Line />
			</button>
		</div>
	);
};

export default Search;
