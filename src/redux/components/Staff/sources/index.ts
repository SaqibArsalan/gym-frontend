// // Lib
import { Dispatch } from 'react';

// // Client Helper
import { GymHttpClient } from 'redux/client';
import { throwErrorToast } from 'redux/utils/source.helper';

import LoaderService from 'services/LoaderService';

// // Interfaces
import { IPaginationOption } from 'redux/interfaces';
import {
	GET_STAFF_LIST

} from '../Staff.constants';

// // Actions
import {actions, IStaff} from '../index';
import { IWarehouse } from '../Staff.interface';

export const fetchStaff = () => {
	const client = new GymHttpClient({ dispatchError: false });
	return client.get<IStaff[]>(GET_STAFF_LIST);
};
export const fetchStaffList = () => async (dispatch: Dispatch<any>) => {
	try {
		const staffList = await Promise.resolve(fetchStaff());
		dispatch(actions.fetchStaffListSuccess(staffList));
	} catch (e) {
		throwErrorToast(e);
	}
};
