import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguagePopover from './LanguagePopover';
import TestForm from './TestForm';

const Test = () => {
	const { t } = useTranslation();

	return (
		<>
			Test - {process.env.KEY} - {t('testI18n')}
			<br />
			<LanguagePopover />
			{t('testTest', { value: 1000, number: 9981, a: '09171', b: 'hahahha' })}
			<br />
			{moment().format('LLL')}
			{/* {/* <br /> */}
			{t('currency', { value: 300000 })}
			<br />
			<TestForm />
		</>
	);
};

export default Test;
