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
	CREATE_MEMBERS_SUBSCRIPTIONS,
	GET_MEMBER_DETAILS,
	GET_MEMBERS_SUBSCRIPTIONS, GET_MEMBERSHIP_PLANS_DROPDOWN, UPDATE_MEMBERS_SUBSCRIPTIONS

} from '../Members.constants';

// // Actions
import {actions, IMembershipPlan, IMembersSubscriptions} from '../index';
import NavigationService from "../../../../services/NavigationService";
import {prepareRouteForNavigation} from "../../../../utils/Route";
import {IMemberCreation} from "../../../../components/pages/MemberCreateOrUpdate/MemberInfo/MemberInfo.interface";

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

export const fetchMembershipPlans = () => async (dispatch: Dispatch<any>) => {
	const client = new GymHttpClient({ dispatchError: false });
	try {
		LoaderService.show();
		const membershipPlan =  await Promise.resolve(client.get<IMembershipPlan[]>(GET_MEMBERSHIP_PLANS_DROPDOWN));
		LoaderService.hide();
		dispatch(actions.fetchMembershipPlanSuccess(membershipPlan));
	} catch (e) {
		LoaderService.hide();
		throwErrorToast(e);
	}
}

export const createMember = (memberCreation: IMemberCreation) => async () => {
	const client = new GymHttpClient({ dispatchError: false });

	try {
		LoaderService.show();
		await client.post<void>(CREATE_MEMBERS_SUBSCRIPTIONS, memberCreation);

		LoaderService.hide();
		throwSuccessToast('Member Created');

		setTimeout(() => {
			LoaderService.hide();
			NavigationService.navigate(prepareRouteForNavigation(ROUTES.MEMBERSHIP_LISTING));
		}, 1000);

	} catch (e) {
		LoaderService.hide();
		throwErrorToast(e)
	}
}


export const updateMember = (memberId: string, memberCreation: IMemberCreation) => async () => {
	const client = new GymHttpClient({ dispatchError: false });

	try {
		LoaderService.show();
		await client.patch<void>(UPDATE_MEMBERS_SUBSCRIPTIONS.replace('memberId', memberId), memberCreation);

		LoaderService.hide();
		throwSuccessToast('Member Updated');

		setTimeout(() => {
			LoaderService.hide();
			NavigationService.navigate(prepareRouteForNavigation(ROUTES.MEMBERSHIP_LISTING));
		}, 1000);

	} catch (e) {
		LoaderService.hide();
		throwErrorToast(e)
	}
}
