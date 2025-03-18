// // Lib
import { Dispatch } from 'react';

// // Client Helper
import { GymHttpClient } from 'redux/client';
import { throwErrorToast } from 'redux/utils/source.helper';

import LoaderService from 'services/LoaderService';

// // Interfaces
import { IPaginationOption } from 'redux/interfaces';
import {
	GET_ACTIVE_MEMBERS_COUNT,
	GET_ACTIVE_SUBSCRIPTION_COUNT, GET_NEW_SIGNUPS_THIS_MONTH,
	GET_WAREHOUSE_LOCATIONS
} from '../Miscellaneous.constants';

// // Actions
import { actions } from '../index';
import { IWarehouse } from '../Miscellaneous.interface';

export const fetchMembersCount = () => {
	const client = new GymHttpClient({ dispatchError: false });
	return client.get<number>(GET_ACTIVE_MEMBERS_COUNT);
};
export const fetchActiveMembersCount = () => async (dispatch: Dispatch<any>) => {
	try {
		const totalMembers = await Promise.resolve(fetchMembersCount());
		dispatch(actions.fetchActiveMembersCountSuccess(totalMembers));
	} catch (e) {
		throwErrorToast(e);
	}
};

export const fetchActiveSubscriptionsCount = () => async (dispatch: Dispatch<any>) => {
	try {
		const client = new GymHttpClient({ dispatchError: false });
		const totalSubscriptions = await Promise.resolve(client.get<number>(GET_ACTIVE_SUBSCRIPTION_COUNT));
		dispatch(actions.fetchActiveSubscriptionsCountSuccess(totalSubscriptions));
	} catch (e) {
		throwErrorToast(e);
	}
}

export const fetchNewSignupsThisMonth = () => async (dispatch: Dispatch<any>) => {
	try {
		const client = new GymHttpClient({ dispatchError: false });
		const newSignups = await Promise.resolve(client.get<number>(GET_NEW_SIGNUPS_THIS_MONTH));
		dispatch(actions.fetchNewSignupsCountSuccess(newSignups));
	} catch (e) {
		throwErrorToast(e);
	}
}