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
import MembersPage from "../components/pages/MembersPage/MembersPage";
import DashboardPage from "../components/pages/DashboardPage/DashboardPage";
import StaffPage from "../components/pages/StaffPage/StaffPage";
import StaffDetail from "../components/pages/StaffDetail/StaffDetail";

// const isMicroBuild = Boolean(process.env.MICRO_BUILD);

const RootRoute = (props: { store: Store; mainTheme?: Theme }) => {
	const { store, mainTheme } = props;
	// const ParentWrap = isMicroBuild ? React.Fragment : Router;
	// isMicroBuild = true;

	useEffect(() => () => cleanAllChildRoutesRemoteEntries(), []);

	return (
		<Router>
			<Routes>
				<Route path="/login" element={<LoginPage />} />

				<Route path="/" element={<MainPage> {/* Acts as Layout */} </MainPage>}>
					<Route index element={<DashboardPage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/memberships" element={<MembersPage />} />
					<Route path="/staff" element={<StaffPage />} />
					<Route
						path={`${ROUTES.STAFF_DETAIL}/:userId`}
						element={<StaffDetail />}
					/>
				</Route>
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
