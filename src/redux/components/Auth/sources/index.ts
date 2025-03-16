// Lib
import { Dispatch } from 'react';

import {actions, IRegistration} from '../index';
import {GymHttpClient} from "../../../client";
import LoaderService from "../../../../services/LoaderService";
import {throwErrorToast} from "../../../utils/source.helper";
import {BASE_URL} from "../../../constants";
import {loginSuccess} from "../affects";

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
				console.log(userDetails);
				dispatch(actions.loginSuccess(userDetails));
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
				console.log(userDetails);
				dispatch(actions.registrationSuccess(userDetails));
			} catch (e) {
				LoaderService.hide();
				throwErrorToast(e);
			}
		};
