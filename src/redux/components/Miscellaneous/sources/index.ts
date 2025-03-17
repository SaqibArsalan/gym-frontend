// // Lib
import { Dispatch } from 'react';

// // Client Helper
import { GymHttpClient } from 'redux/client';
import { throwErrorToast } from 'redux/utils/source.helper';

import LoaderService from 'services/LoaderService';

// // Interfaces
import { IPaginationOption } from 'redux/interfaces';
import {GET_ACTIVE_MEMBERS_COUNT, GET_WAREHOUSE_LOCATIONS} from '../Miscellaneous.constants';

// // Actions
import { actions } from '../index';
import { IWarehouse } from '../Miscellaneous.interface';

export const fetchMembersCount = () => {
	const client = new GymHttpClient({ dispatchError: false });
	const url = GET_ACTIVE_MEMBERS_COUNT;
	return client.get<number>(url);
};
export const fetchActiveMembersCount = () => async (dispatch: Dispatch<any>) => {
	try {
		const totalMembers = await Promise.resolve(fetchMembersCount());
		dispatch(actions.fetchActiveMembersCountSuccess(totalMembers));
	} catch (e) {
		throwErrorToast(e);
	}
};
