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
	CREATE_SESSION,
	GET_SESSION_LIST
} from '../Session.constants';

// // Actions
import {actions, ISessionInfo, ICreateOrUpdateSession} from '../index';
import NavigationService from "../../../../services/NavigationService";
import {prepareRouteForNavigation} from "../../../../utils/Route";
import {GET_STAFF_BY_NAME_LIST, IStaff} from "../../Staff";
import {normalizeStaffByName} from "../../Staff/normalizers";
import {normalizeClassesForDropdown} from "../normalizers";
import {GET_CLASS_FOR_DROPDOWN} from "../../Gym Class";


export const fetchAllSessions = () => async (dispatch: Dispatch<any>) => {
	const client = new GymHttpClient({ dispatchError: false });
	try {
		LoaderService.show();
		const sessionList =  await Promise.resolve(client.get<ISessionInfo[]>(GET_SESSION_LIST));
		LoaderService.hide();

		dispatch(actions.fetchSessionListSuccess(sessionList));
	} catch (e) {
		throwErrorToast(e);
	}
}

export const createSession = (classCreation: ICreateOrUpdateSession, classId: string) => async () => {
	const client = new GymHttpClient({ dispatchError: false });

	try {
		LoaderService.show();
		await client.post<void>(CREATE_SESSION.replace("classId", classId), classCreation);

		LoaderService.hide();
		throwSuccessToast('Session Created');

		setTimeout(() => {
			LoaderService.hide();
			NavigationService.navigate(prepareRouteForNavigation(ROUTES.SESSION_LISTING));
		}, 1000);

	} catch (e) {
		LoaderService.hide();
		throwErrorToast(e)
	}
}

// export const fetchUserDetail = (userId: string) => async (dispatch: Dispatch<any>) => {
// 	const client = new GymHttpClient({ dispatchError: false });
// 	try {
// 		LoaderService.show();
// 		const userDetail =  await Promise.resolve(client.get<IUserInfo>(GET_USER_DETAIL.replace("userId", userId)));
// 		LoaderService.hide();
// 		dispatch(actions.fetchUserDetailsSuccess(userDetail));
// 	} catch (e) {
// 		LoaderService.hide();
// 		throwErrorToast(e);
// 	}
// }

