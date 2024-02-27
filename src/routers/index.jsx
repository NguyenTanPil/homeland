import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootApp from '../pages/RootApp';
import Home from '../pages/Home';
import PropertyDetails from '../pages/PropertyDetails';

const Routers = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootApp />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: 'property/:id',
					element: <PropertyDetails />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routers;
