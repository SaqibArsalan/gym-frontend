import { IAuthInitialState } from 'redux/components/Auth';
import { IDropdownResponse } from 'redux/components/Staff';

export interface IEnrollMemberProps {
	auth: IAuthInitialState;
	sessionListForDropdown: IDropdownResponse[];
	membersSubscriptionsForDropdown: IDropdownResponse[];
}

export interface IEnrollMemberPayload {
	sessionId: string;
	membershipId: string;
}

