import React from 'react';

import { Typography } from '@mui/material';

import './CardLabel.scss';

interface ICardLabel {
	label: string;
}

const CardLabel = (props: ICardLabel) => {
	const { label } = props;
	return (
		<Typography className='data-table-label' id='title' component='div'>
			{label}
		</Typography>
	);
};

export default CardLabel;
