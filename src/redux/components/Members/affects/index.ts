import { IReduxActionResponse } from 'redux/interfaces';
import {
	IMembershipPlan,
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

export const fetchMembershipPlanSuccess = (
	state: IMembersInitialState,
	action: IReduxActionResponse<IMembershipPlan[]>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, membershipPlans: payload};
	}
	return state;
};
