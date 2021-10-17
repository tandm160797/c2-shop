import useNotify from '$hooks/useNotify';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import InputField from './FormControls/InputField';

const TestForm = () => {
	const { t } = useTranslation();

	const { close, toast } = useNotify();

	const cbAlert = () => {};

	const cbDismiss = (key) => {
		close(key);
	};

	const schema = yup.object().shape({
		username: yup.string().min(10)
	});

	const { control, formState, handleSubmit } = useForm({
		defaultValues: {
			username: process.env.KEY
		},
		resolver: yupResolver(schema)
	});

	const onSubmit = () => {
		const key = toast('abc', {
			action: (
				<>
					<Button onClick={() => cbAlert('Hello moi nguoi')}>Alert</Button>
					<Button onClick={() => cbDismiss(key)}>Dismiss</Button>
				</>
			)
		});
	};

	const fieldControl = {
		control,
		formState,
		required: true,
		fullWidth: true
	};

	return (
		<form noValidate onSubmit={handleSubmit(onSubmit)}>
			<InputField label={t('text.changeLanguage')} name="username" {...fieldControl} />
			<button type="submit">OK</button>
		</form>
	);
};

export default TestForm;
