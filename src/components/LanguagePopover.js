import useLanguage from '$hooks/useLanguage';
import { IconButton, ListItemIcon, ListItemText, MenuItem, Popover, Tooltip, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import Flag from 'react-flagkit';
import { useTranslation } from 'react-i18next';

const LanguagePopover = () => {
	const { t } = useTranslation();
	const anchorRef = useRef(null);
	const [open, setOpen] = useState(false);
	const { languages, language, setLanguage } = useLanguage();

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleLanguageChange = (language) => {
		setLanguage(language);
		setOpen(false);
	};

	return (
		<>
			<Tooltip title={t('text.changeLanguage')}>
				<IconButton onClick={handleOpen} ref={anchorRef}>
					<Flag country={language.flag} />
				</IconButton>
			</Tooltip>
			<Popover
				anchorEl={anchorRef.current}
				onClose={handleClose}
				open={open}
				keepMounted
				anchorOrigin={{
					horizontal: 'right',
					vertical: 'bottom'
				}}
			>
				{languages.map((language) => (
					<MenuItem onClick={() => handleLanguageChange(language)} key={language.locale}>
						<ListItemIcon>
							<Flag country={language.flag} />
						</ListItemIcon>
						<ListItemText>
							<Typography>{language.label}</Typography>
						</ListItemText>
					</MenuItem>
				))}
			</Popover>
		</>
	);
};

export default LanguagePopover;
