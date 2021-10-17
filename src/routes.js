import NotFound from '$components/NotFound';
import Test from '$components/Test';
import React from 'react';

const routes = [
	{
		path: '',
		element: null,
		children: [
			{ path: '/login', element: <Test /> },
			{ path: '/*', element: <NotFound /> }
		]
	}
];

export default routes;
