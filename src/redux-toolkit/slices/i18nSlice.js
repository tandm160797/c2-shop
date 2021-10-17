import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
	language: {
		flag: 'GB',
		label: 'English',
		locale: 'en',
		currency: 'USD'
	}
};

const slice = createSlice({
	name: 'i18n',
	initialState,

	reducers: {
		changeLanguage: (state, { payload }) => {
			state.language = payload;
		}
	}
});

const { actions, reducer } = slice;

const { changeLanguage } = actions;

const persistConfig = {
	keyPrefix: 'c2-',
	key: 'i18n',
	storage
};

const i18nReducer = persistReducer(persistConfig, reducer);

export { changeLanguage };
export default i18nReducer;
