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
	CREATE_CLASS,
	GET_CLASS_LIST
} from '../GymClass.constants';

// // Actions
import {actions, IClassInfo, ICreateOrUpdateClass} from '../index';
import NavigationService from "../../../../services/NavigationService";
import {prepareRouteForNavigation} from "../../../../utils/Route";


export const fetchAllClasses = () => async (dispatch: Dispatch<any>) => {
	const client = new GymHttpClient({ dispatchError: false });
	try {
		LoaderService.show();
		const classList =  await Promise.resolve(client.get<IClassInfo[]>(GET_CLASS_LIST));
		LoaderService.hide();

		dispatch(actions.fetchClassListSuccess(classList));
	} catch (e) {
		throwErrorToast(e);
	}
}

export const createClass = (classCreation: ICreateOrUpdateClass) => async () => {
	const client = new GymHttpClient({ dispatchError: false });

	try {
		LoaderService.show();
		await client.post<void>(CREATE_CLASS, classCreation);

		LoaderService.hide();
		throwSuccessToast('Class Created');

		setTimeout(() => {
			LoaderService.hide();
			NavigationService.navigate(prepareRouteForNavigation(ROUTES.CLASS_LISTING));
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

