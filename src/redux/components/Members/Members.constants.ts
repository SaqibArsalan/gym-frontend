import { BASE_URL } from 'redux/constants';

export const reducerName = 'members';

// urls
// add urls here
export const GET_MEMBERS_SUBSCRIPTIONS = `${BASE_URL}/v1/memberships`;
export const GET_MEMBER_DETAILS = `${BASE_URL}/v1/memberships/memberId`;
export const GET_MEMBERSHIP_PLANS = `${BASE_URL}/v1/memberships/plans`;
export const GET_MEMBERSHIP_PLANS_DROPDOWN = `${BASE_URL}/v1/memberships/plans/dropdown`;
export const CREATE_MEMBERS_SUBSCRIPTIONS = `${BASE_URL}/v1/memberships`;