// // Lib
import { Dispatch } from 'react';

// // Client Helper
import { GymHttpClient } from 'redux/client';
import {throwErrorToast, throwSuccessToast} from 'redux/utils/source.helper';

import LoaderService from 'services/LoaderService';

// // Interfaces
import { IPaginationOption } from 'redux/interfaces';
import ROUTES from "config/constants";
import {
	CREATE_USER,
	GET_STAFF_BY_NAME_LIST, GET_USERS_LIST

} from '../User.constants';

// // Actions
import {actions, IUserCreateOrUpdate, IUserInfo} from '../index';
import {normalizeUsersByName} from "../normalizers";
import {IStaffCreation} from "../../../../components/pages/StaffCreateOrUpdate/StaffInfo/StaffInfo.interface";
import {CREATE_STAFF} from "../../Staff";
import NavigationService from "../../../../services/NavigationService";
import {prepareRouteForNavigation} from "../../../../utils/Route";

export const fetchUsersByName = (name: string) => async (dispatch: Dispatch<any>) => {
	const client = new GymHttpClient({ dispatchError: false });
	try {
		LoaderService.show();
		const users =  await Promise.resolve(client.get<IUserInfo[]>(GET_STAFF_BY_NAME_LIST, {
			params: {
				name,
			}
		}));
		LoaderService.hide();
		dispatch(actions.fetchUsersByNameListSuccess(normalizeUsersByName(users)));
	} catch (e) {
		throwErrorToast(e);
	}
}

export const fetchAllUsers = () => async (dispatch: Dispatch<any>) => {
	const client = new GymHttpClient({ dispatchError: false });
	try {
		LoaderService.show();
		const users =  await Promise.resolve(client.get<IUserInfo[]>(GET_USERS_LIST));
		LoaderService.hide();

		dispatch(actions.fetchUsersListSuccess(users));
	} catch (e) {
		throwErrorToast(e);
	}
}

export const createUser = (userCreation: IUserCreateOrUpdate) => async () => {
	const client = new GymHttpClient({ dispatchError: false });

	try {
		LoaderService.show();
		await client.post<void>(CREATE_USER, userCreation);

		LoaderService.hide();
		throwSuccessToast('User Created');

		setTimeout(() => {
			LoaderService.hide();
			NavigationService.navigate(prepareRouteForNavigation(ROUTES.USER_LISTING));
		}, 1000);

	} catch (e) {
		LoaderService.hide();
		throwErrorToast(e)
	}
}

