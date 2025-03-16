import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './LoaderComponent.scss';

const LoaderComponent = () => (
	<div className='overlay'>
		<CircularProgress className='spinner' />
	</div>
);

export default LoaderComponent;
