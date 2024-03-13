// import icons
import { RiArrowDownSLine, RiArrowUpSLine, RiWallet3Line } from 'react-icons/ri';

// import handless ui
import { Menu } from '@headlessui/react';
import { useState } from 'react';
import useHouseStore from '../../states/houseState';
import createSelectors from '../../states/selectors';
import { prices } from '../../constants';

// import global state

const PriceRangeDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);

	const houseState = createSelectors(useHouseStore);
	const { price, updatePrice } = houseState.use;

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleItemClick = (price) => {
		updatePrice(price);
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
				<RiWallet3Line className='dropdown-icon-primary' />
				<div className='flex flex-col items-start'>
					<div className='text-[15px] font-medium leading-tight'>{price}</div>
					<div className='text-[13px]'>Choose price range</div>
				</div>
				{isOpen ? (
					<RiArrowUpSLine className='dropdown-icon-secondary' />
				) : (
					<RiArrowDownSLine className='dropdown-icon-secondary' />
				)}
			</Menu.Button>
			<Menu.Items className='dropdown-menu'>
				{prices.map((price, idx) => {
					return (
						<Menu.Item
							onClick={() => handleItemClick(price.value)}
							className='cursor-pointer hover:text-violet-700 transition '
							key={idx}
							as='li'
						>
							{price.value}
						</Menu.Item>
					);
				})}
			</Menu.Items>
		</Menu>
	);
};

export default PriceRangeDropdown;
