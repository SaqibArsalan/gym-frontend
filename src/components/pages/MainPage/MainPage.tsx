import React, {useEffect, useState} from 'react';
import './MainPage.css';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login, logout} from "redux/components/Auth/sources"; // Custom CSS for styling
import {Outlet} from "@mui/icons-material";
import MainAppConnector from "./MainPageConnector";
import {IHEADER_LINKS_INFO, IMainPage} from "./MainPage.interface";
import RootService from "../../../services/RootService";
import {filterModuleWrtRoles, getActiveModuleIndex} from "./MainPage.helpers";
import {LinkTab} from "../../shared/LinkTab";

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
		<>
			<div className='app-body-container'>
				<Outlet />
			</div>
			<RootService />
		</>
	);
};

const MainPage = MainAppConnector(MainPageComponent);
export default MainPage;