import { IReduxActionResponse } from 'redux/interfaces';
import {
	IMembersInitialState, IMembersSubscriptions,
	IWarehouse,
} from '../Members.interface';

export const fetchMembersSubscriptionsSuccess = (
	state: IMembersInitialState,
	action: IReduxActionResponse<IMembersSubscriptions[]>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, membersSubscriptions: payload};
	}
	return state;
};

export const fetchMemberDetailsSuccess = (
	state: IMembersInitialState,
	action: IReduxActionResponse<IMembersSubscriptions>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, memberDetails: payload };
	}

	return state;
}
