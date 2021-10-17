import { getLanguage } from '$selectors/i18nSelector';
import { changeLanguage } from '$slices/i18nSlice';
import moment from 'moment';
import 'moment/locale/vi';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const languages = [
	{
		flag: 'US',
		label: 'English',
		locale: 'en',
		currency: 'USD'
	},
	{
		flag: 'VN',
		label: 'Vietnamese',
		locale: 'vi',
		currency: 'VND'
	}
];

const useLanguage = () => {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const { i18n } = useTranslation();

	useEffect(() => {
		setTimeout(() => {
			moment.locale(language.locale);
			i18n.changeLanguage(language.locale);
		}, 100);
	}, [language, i18n]);

	const setLanguage = (newLanguage) => {
		dispatch(changeLanguage(newLanguage));
	};

	return {
		languages,

		language,
		setLanguage
	};
};

export default useLanguage;
