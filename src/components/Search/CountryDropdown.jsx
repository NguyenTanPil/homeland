// import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

// import handless ui
import { Menu } from '@headlessui/react';
import createSelectors from '../../states/selectors';
import useHouseStore from '../../states/houseState';
import { useState } from 'react';

// import global state

const CountryDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);

	const houseState = createSelectors(useHouseStore);
	const { country, countries, updateCountry } = houseState.use;

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleItemClick = (country) => {
		updateCountry(country);
		setIsOpen(false);
	};

	return (
		<Menu
			as='div'
			className='dropdown relative'
		>
			<Menu.Button
				className='dropdown-btn w-full'
				onClick={toggleDropdown}
			>
				<RiMapPinLine className='dropdown-icon-primary' />
				<div className='flex flex-col items-start'>
					<div className='text-[15px] font-medium leading-tight'>{country}</div>
					<div className='text-[13px]'>Select your place</div>
				</div>
				{isOpen ? (
					<RiArrowUpSLine className='dropdown-icon-secondary' />
				) : (
					<RiArrowDownSLine className='dropdown-icon-secondary' />
				)}
			</Menu.Button>
			<Menu.Items className='dropdown-menu'>
				{countries.map((country, idx) => {
					return (
						<Menu.Item
							onClick={() => handleItemClick(country)}
							className='cursor-pointer hover:text-violet-700 transition '
							key={idx}
							as='li'
						>
							{country}
						</Menu.Item>
					);
				})}
			</Menu.Items>
		</Menu>
	);
};

export default CountryDropdown;
