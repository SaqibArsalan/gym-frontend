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
import MemberDetailsPage from "../components/pages/MembersDetail/MemberDetailPage";
import StaffCreateOrUpdate from "../components/pages/StaffCreateOrUpdate/StaffCreateOrUpdate";
import MemberCreateOrUpdate from "../components/pages/MemberCreateOrUpdate/MemberCreateOrUpdate";
import UserPage from "../components/pages/UserPage/UserPage";
import UserCreateOrUpdate from "../components/pages/UserCreateOrUpdate/UserCreateOrUpdate";
import UserDetailsPage from "../components/pages/UserDetail/UserDetail";
import GymClassPage from "../components/pages/GymClassPage/GymClassPage";
import ClassCreateOrUpdate from "../components/pages/ClassCreateOrUpdate/ClassCreateOrUpdate";
import SessionListingPage from "../components/pages/SessionListingPage/SessionListingPage";
import SessionCreateOrUpdate from "../components/pages/SessionCreateOrUpdate/SessionCreateOrUpdate";

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
					<Route path={`${ROUTES.DASHBOARD}`} element={<DashboardPage />} />
					<Route path={`${ROUTES.USER_LISTING}`} element={<UserPage />} />
					<Route path={`${ROUTES.USER_CREATE}`} element={<UserCreateOrUpdate />} />
					<Route path={`${ROUTES.MEMBERSHIP_LISTING}`} element={<MembersPage />} />
					<Route path={`${ROUTES.STAFF_LISTING}`} element={<StaffPage />} />
					<Route path={`${ROUTES.STAFF_CREATE}`} element={<StaffCreateOrUpdate />} />
					<Route path={`${ROUTES.MEMBER_CREATE}`} element={<MemberCreateOrUpdate />} />
					<Route path={`${ROUTES.CLASS_LISTING}`} element={<GymClassPage />} />
					<Route path={`${ROUTES.CLASS_CREATE}`} element={<ClassCreateOrUpdate />} />
					<Route path={`${ROUTES.SESSION_LISTING}`} element={<SessionListingPage />} />
					<Route path={`${ROUTES.SESSION_CREATE}`} element={<SessionCreateOrUpdate />} />
					<Route
						path={`${ROUTES.STAFF_DETAIL}/:userId`}
						element={<StaffDetail />}
					/>
					<Route
						path={`${ROUTES.MEMBERSHIPS_DETAIL}/:memberId`}
						element={<MemberDetailsPage />}
					/>
					<Route
						path={`${ROUTES.USER_DETAIL}/:userId`}
						element={<UserDetailsPage />}
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
