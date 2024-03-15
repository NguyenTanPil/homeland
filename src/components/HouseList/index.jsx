import { Link } from 'react-router-dom';
import useHouseStore from '../../states/houseState';
import createSelectors from '../../states/selectors';
import House from './House';
import { ImSpinner2 } from 'react-icons/im';
import { isEmpty } from 'lodash';

const HouseList = () => {
	const houseState = createSelectors(useHouseStore);
	const { houses, loading } = houseState.use;

	if (loading) {
		return <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />;
	}

	if (isEmpty(houses)) {
		return <div className='text-center text-3xl text-gray-400 mt-48'>Sorry, nothing found!</div>;
	}

	return (
		<section className='mb-20'>
			<div className='container mx-auto'>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12'>
					{houses.map((house, idx) => (
						<Link
							key={idx}
							to={`/property/${house.id}`}
						>
							<House house={house} />
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default HouseList;
