import {IMemberCreation} from "./MemberInfo/MemberInfo.interface";

export const FIELD_KEYS = {
	MEMBER_NAME: 'memberName',
	DURATION: 'durationInMonths',
	JOINING_DATE: 'joinDate',
	USER: 'userId',
	PLAN: 'membershipPlanId'
};

export const emptyMemberCreationPayload: IMemberCreation = {
	userId: '',
	membershipPlanId: '',
	memberName: '',
	durationInMonths: 0,
	joinDate: '',
};
