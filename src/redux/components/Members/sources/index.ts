// // Lib
import { Dispatch } from 'react';

// // Client Helper
import { GymHttpClient } from 'redux/client';
import { throwErrorToast } from 'redux/utils/source.helper';

import LoaderService from 'services/LoaderService';

// // Interfaces
import { IPaginationOption } from 'redux/interfaces';
import {
	GET_MEMBER_DETAILS,
	GET_MEMBERS_SUBSCRIPTIONS

} from '../Members.constants';

// // Actions
import {actions, IMembersSubscriptions} from '../index';
import { IWarehouse } from '../Members.interface';
import {GET_STAFF_DETAIL, IStaff} from "../../Staff";

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

export const fetchMemberDetail = (memberId: string) => async (dispatch: Dispatch<any>) => {
	try {
		const client = new GymHttpClient({ dispatchError: false });
		const memberDetail =  await Promise.resolve(client.get<IMembersSubscriptions>(GET_MEMBER_DETAILS.replace("memberId", memberId)));
		dispatch(actions.fetchMemberDetailsSuccess(memberDetail));
	} catch (e) {
		throwErrorToast(e);
	}
}
