import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login, logout} from "redux/components/Auth/sources"; // Custom CSS for styling
import { Box } from "@mui/material";
import styles from "./MainLayout.module.scss";
import {IHEADER_LINKS_INFO, IMainPage} from "./MainPage.interface";
import {filterModuleWrtRoles, getActiveModuleIndex} from "./MainPage.helpers";
import {LinkTab} from "../../shared/LinkTab";
import Sidebar from "../../shared/SideBar/SideBar";
import Navbar from "../../shared/NavBar";
import MainAppConnector from "./MainPageConnector";
import DashboardPage from "../DashboardPage/Dashboard";

const MainPageComponent: React.FunctionComponent<IMainPage> = (
	props: IMainPage
) => {
	const { auth } = props;
	const { userInfo, roles } = auth;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const allowedModules: IHEADER_LINKS_INFO[] = filterModuleWrtRoles(roles);
	const activeModuleIndex: number = getActiveModuleIndex(
		location && location.pathname,
		allowedModules
	);

	const onLogout = () => {
		dispatch(logout());
	};

	const generateLinksWrtRoles = () =>
		allowedModules.map((item: IHEADER_LINKS_INFO) => {
			const IconElement = item.icon;
			return (
				<LinkTab
					label={item.label}
					href='#'
					icon={IconElement ? <IconElement /> : ''}
					onClick={item.onClick(navigate, item)}
				/>
			);
		});

	return (
		<Box className={styles.layout} sx={{ display: "flex" }}>
			<Sidebar />
			<Box className={styles.mainContent} sx={{ flexGrow: 1 }}>
				<Navbar />
				<Box className={styles.pageContent} sx={{ p: 3 }}>
					<DashboardPage />
				</Box>
			</Box>
		</Box>
	);
};

const MainPage = MainAppConnector(MainPageComponent);
export default MainPage;