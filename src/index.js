import LoadingOverlay from '$components/LoadingOverlay';
import '$i18n';
import store, { persistor } from '$redux-toolkit/store';
import theme from '$themes/theme';
import { ThemeProvider } from '@emotion/react';
import { Slide } from '@mui/material';
import App from 'App';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const anchorOrigin = {
	vertical: 'top',
	horizontal: 'right'
};

const Root = () => (
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<HelmetProvider>
				<SnackbarProvider anchorOrigin={anchorOrigin} TransitionComponent={Slide} maxSnack={3}>
					<ReduxProvider store={store}>
						<PersistGate persistor={persistor} loading={<LoadingOverlay />}>
							<BrowserRouter>
								<App />
							</BrowserRouter>
						</PersistGate>
					</ReduxProvider>
				</SnackbarProvider>
			</HelmetProvider>
		</ThemeProvider>
	</React.StrictMode>
);

ReactDOM.render(<Root />, document.querySelector('#root'));

export default Root;
