import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const RootApp = () => {
	return (
		<div className='max-w-1440 mx-auto bg-white'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default RootApp;
