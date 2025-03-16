import { Theme } from '@mui/material';
// import { loadDynamicModuleHoc } from 'components/shared/DynamicModuleLoader/DynamicModuleLoader';
import { CHILD_MODULES_INFO } from 'config/constants';
import { IChildModuleInfo } from 'config/interface';
import React from 'react';
import { Route } from 'react-router-dom';
import { Store } from 'redux';
import Authorization from 'utils/Authorization';

// add module here to load Remote Entries for that module
const componentMap: any = {
	// example for adding child module routes
	// [CHILD_MODULES_INFO.vendor.moduleKey]: {
	// 	moduleToRouteInfo: ROUTE_MODULE_MAP[ROUTES.VENDOR_MODULE],
	// 	componentProps: {
	// 		parentRoute: `${ROUTES.MODULE_ROOT}${ROUTES.VENDOR_MODULE}`,
	// 		vendorType: VENDOR_TYPES.COMMERCIAL,
	// 	},
	// },
};

const isDevelopment = process.env.NODE_ENV !== 'production';

export const getChildRoutes = (store: Store, mainTheme?: Theme) => {
	console.log("get child routes is called!!!");
	const currentState = store.getState();
	const userRoles = currentState.auth ? currentState.auth.roles : [];
	const authorization = new Authorization(userRoles);
	const routes: any[] = [];
	Object.values(CHILD_MODULES_INFO).forEach((item: IChildModuleInfo) => {
		const isModuleAllowed =
			isDevelopment || authorization.checkIfModuleHaveAuthorization(item);
		// if (isModuleAllowed) {
		// 	const { moduleToRouteInfo, componentProps } = componentMap[item.moduleKey];
		// 	// const ComponentToRender = loadDynamicModuleHoc(moduleToRouteInfo, {
		// 	// 	...componentProps,
		// 	// 	mainTheme,
		// 	// });
		// 	routes.push(
		// 		<Route path={`${item.routeUrl}/*`} element={<ComponentToRender />} />
		// 	);
		// }
	});
	return routes;
};

export const cleanAllChildRoutesRemoteEntries = () =>
	Object.keys(componentMap).forEach((moduleKey: string) => {
		const moduleOptions = componentMap[moduleKey];
		const moduleInfo = moduleOptions.moduleToRouteInfo;
		const remoteEntryElement = document.querySelector(
			`script[src='${moduleInfo.url}']`
		);
		if (remoteEntryElement) {
			document.head.removeChild(remoteEntryElement);
		}
	});
