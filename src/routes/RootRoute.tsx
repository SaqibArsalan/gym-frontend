// Lib
import { Store } from 'redux';
import { Theme } from '@mui/material';
import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';

import ROUTES from '../config/constants';
import {
	cleanAllChildRoutesRemoteEntries,
	getChildRoutes,
} from './Routes.helper';
import LoginPage from "../components/pages/LoginPage/LoginPage";
import RegisterPage from "../components/pages/RegistrationPage/RegistrationPage";
import MainPage from "../components/pages/MainPage/MainPage";

// const isMicroBuild = Boolean(process.env.MICRO_BUILD);

const RootRoute = (props: { store: Store; mainTheme?: Theme }) => {
	const { store, mainTheme } = props;
	// const ParentWrap = isMicroBuild ? React.Fragment : Router;
	// isMicroBuild = true;

	useEffect(() => () => cleanAllChildRoutesRemoteEntries(), []);

	return (
		<Router>
			<Routes>
				<Route path={ROUTES.ROOT} element={<MainPage />} />
				<Route path={ROUTES.DASHBOARD} element={<MainPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
					<Route
						path='*'
						element={
							<main style={{ padding: '1rem' }}>
								<p>Wrong Route, There is nothing here</p>
							</main>
						}
					/>
					{getChildRoutes(store, mainTheme)}
			</Routes>
		</Router>
	);
};

RootRoute.defaultProps = {
	mainTheme: null,
};

export default RootRoute;
