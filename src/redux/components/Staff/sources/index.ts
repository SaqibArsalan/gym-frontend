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
	CREATE_STAFF,
	GET_STAFF_DETAIL,
	GET_STAFF_LIST

} from '../Staff.constants';

// // Actions
import {actions, IStaff} from '../index';
import { IWarehouse } from '../Staff.interface';
import {IStaffCreation} from "../../../../components/pages/StaffCreateOrUpdate/StaffInfo/StaffInfo.interface";
import {prepareRouteForNavigation} from "../../../../utils/Route";
import NavigationService from "../../../../services/NavigationService";
import ToastService from "../../../../services/ToastService";

export const fetchStaff = () => {
	const client = new GymHttpClient({ dispatchError: false });
	return client.get<IStaff[]>(GET_STAFF_LIST);
};
export const fetchStaffList = () => async (dispatch: Dispatch<any>) => {
	try {
		const staffList = await Promise.resolve(fetchStaff());
		dispatch(actions.fetchStaffListSuccess(staffList));
	} catch (e) {
		LoaderService.hide();
		throwErrorToast(e);
	}
};

export const fetchStaffDetail = (userId: string) => async (dispatch: Dispatch<any>) => {
	try {
		const client = new GymHttpClient({ dispatchError: false });
		const staffDetail =  await Promise.resolve(client.get<IStaff>(GET_STAFF_DETAIL.replace("userId", userId)));
		dispatch(actions.fetchStaffDetailsSuccess(staffDetail));
	} catch (e) {
		LoaderService.hide();
		throwErrorToast(e);
	}
}

export const createStaff = (staffCreation: IStaffCreation) => async () => {
	const client = new GymHttpClient({ dispatchError: false });

	try {
		LoaderService.show();
		await client.post<void>(CREATE_STAFF, staffCreation);

		LoaderService.hide();
		throwSuccessToast('Staff Created');

		setTimeout(() => {
			LoaderService.hide();
			NavigationService.navigate(prepareRouteForNavigation(ROUTES.STAFF_LISTING));
		}, 1000);

	} catch (e) {
		LoaderService.hide();
		throwErrorToast(e)
	}
}
