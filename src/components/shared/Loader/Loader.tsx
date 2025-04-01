import { CircularProgress } from '@mui/material';
import React from 'react';
import './Loader.scss';

const LoaderComponent = () => (
	<div className='overlay'>
		<CircularProgress className='spinner' />
	</div>
);

LoaderComponent.defaultProps = {
	showOverlay: false,
};

export default LoaderComponent;
