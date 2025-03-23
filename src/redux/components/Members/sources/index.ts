// // Lib
import { Dispatch } from 'react';

// // Client Helper
import { GymHttpClient } from 'redux/client';
import { throwErrorToast } from 'redux/utils/source.helper';

import LoaderService from 'services/LoaderService';

// // Interfaces
import { IPaginationOption } from 'redux/interfaces';
import {
	GET_MEMBERS_SUBSCRIPTIONS

} from '../Members.constants';

// // Actions
import {actions, IMembersSubscriptions} from '../index';
import { IWarehouse } from '../Members.interface';

export const fetchMembers = () => {
	const client = new GymHttpClient({ dispatchError: false });
	return client.get<IMembersSubscriptions[]>(GET_MEMBERS_SUBSCRIPTIONS);
};
export const fetchMembersSubscriptions = () => async (dispatch: Dispatch<any>) => {
	try {
		const membershipSubscriptions = await Promise.resolve(fetchMembers());
		dispatch(actions.fetchMembersSubscriptionsSuccess(membershipSubscriptions));
	} catch (e) {
		throwErrorToast(e);
	}
};
