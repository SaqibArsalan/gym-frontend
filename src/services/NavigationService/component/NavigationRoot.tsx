import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationService from '../index';

function NavigationRoot() {
	const navigate = useNavigate();

	const navigateFunc = (route: string) => {
		navigate(route, { replace: false });
	};

	useEffect(() => {
		NavigationService.on('navigate-url', navigateFunc);
		return () => {
			NavigationService.off('navigate-url', navigateFunc);
		};
	}, []);

	return <></>;
}

export default NavigationRoot;
