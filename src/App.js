import { CssBaseline } from '@mui/material';
import React from 'react';
import { useRoutes } from 'react-router';
import routes from 'routes';

const App = () => {
	const routing = useRoutes(routes);

	return (
		<>
			<CssBaseline />
			{routing}
		</>
	);
};

export default App;
