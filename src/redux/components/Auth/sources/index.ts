// Lib
import { Dispatch } from 'react';

import ROUTES from "config/constants";
import {actions, IRegistration} from '../index';
import {GymHttpClient} from "../../../client";
import LoaderService from "../../../../services/LoaderService";
import {throwErrorToast, throwSuccessToast} from "../../../utils/source.helper";
import {BASE_URL} from "../../../constants";
import NavigationService from "../../../../services/NavigationService";
import {prepareRouteForNavigation} from "../../../../utils/Route";

export const logout = () => async (dispatch: Dispatch<any>) => {
	// removeFromLocal(process.env.STORAGE_KEY as string);
	dispatch(actions.logout());
	setTimeout(() => {
		window.location.href = '/';
	}, 200);
};

export const login =
	(username: string, password: string) =>
		async (dispatch: Dispatch<any>): Promise<any> => {
			const client = new GymHttpClient({ dispatchError: false });
			const url = `${BASE_URL}/v1/auth/login`;
			try {
				LoaderService.show();
				const userDetails = await client.post<any>(url, {
					email: username,
					password,
				});
				LoaderService.hide();
				dispatch(actions.loginSuccess(userDetails));

				setTimeout(() => {
					NavigationService.navigate(prepareRouteForNavigation(ROUTES.DASHBOARD));
				}, 1000);
			} catch (e) {
				LoaderService.hide();
				throwErrorToast(e);
			}
		};


export const register =
	(userData: IRegistration) =>
		async (dispatch: Dispatch<any>): Promise<any> => {
			const client = new GymHttpClient({ dispatchError: false });
			const url = `${BASE_URL}/v1/identity/users`;
			try {
				LoaderService.show();
				const userDetails: IRegistration = await client.post<any>(url,userData);
				LoaderService.hide();
				throwSuccessToast('User is Registered');

				dispatch(actions.registrationSuccess(userDetails));

				setTimeout(() => {
					NavigationService.navigate(prepareRouteForNavigation(ROUTES.LOGIN));
				}, 1000);
			} catch (e) {
				LoaderService.hide();
				throwErrorToast(e);
			}
		};
