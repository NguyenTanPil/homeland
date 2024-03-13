// import icons
import { RiArrowDownSLine, RiArrowUpSLine, RiHome5Line } from 'react-icons/ri';

// import handless ui
import { Menu } from '@headlessui/react';
import { useState } from 'react';
import useHouseStore from '../../states/houseState';
import createSelectors from '../../states/selectors';

// import global state

const PropertyDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);

	const houseState = createSelectors(useHouseStore);
	const { property, properties, updateProperty } = houseState.use;

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleItemClick = (property) => {
		updateProperty(property);
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
				<RiHome5Line className='dropdown-icon-primary' />
				<div className='flex flex-col items-start'>
					<div className='text-[15px] font-medium leading-tight'>{property}</div>
					<div className='text-[13px]'>Select your type</div>
				</div>
				{isOpen ? (
					<RiArrowUpSLine className='dropdown-icon-secondary' />
				) : (
					<RiArrowDownSLine className='dropdown-icon-secondary' />
				)}
			</Menu.Button>
			<Menu.Items className='dropdown-menu'>
				{properties.map((property, idx) => {
					return (
						<Menu.Item
							onClick={() => handleItemClick(property)}
							className='cursor-pointer hover:text-violet-700 transition '
							key={idx}
							as='li'
						>
							{property}
						</Menu.Item>
					);
				})}
			</Menu.Items>
		</Menu>
	);
};

export default PropertyDropdown;
