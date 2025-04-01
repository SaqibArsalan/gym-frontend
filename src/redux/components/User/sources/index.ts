// // Lib
import { Dispatch } from 'react';

// // Client Helper
import { GymHttpClient } from 'redux/client';
import { throwErrorToast } from 'redux/utils/source.helper';

import LoaderService from 'services/LoaderService';

// // Interfaces
import { IPaginationOption } from 'redux/interfaces';
import {
	GET_STAFF_BY_NAME_LIST

} from '../User.constants';

// // Actions
import {actions, IUserInfo} from '../index';
import {normalizeUsersByName} from "../normalizers";

export const fetchUsersByName = (name: string) => async (dispatch: Dispatch<any>) => {
	try {
		const client = new GymHttpClient({ dispatchError: false });
		const users =  await Promise.resolve(client.get<IUserInfo[]>(GET_STAFF_BY_NAME_LIST, {
			params: {
				name,
			}
		}));
		dispatch(actions.fetchUsersByNameListSuccess(normalizeUsersByName(users)));
	} catch (e) {
		throwErrorToast(e);
	}
}
