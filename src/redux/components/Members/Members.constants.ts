import { BASE_URL } from 'redux/constants';

export const reducerName = 'members';

// urls
// add urls here
export const GET_MEMBERS_SUBSCRIPTIONS = `${BASE_URL}/v1/memberships`;
export const GET_MEMBER_DETAILS = `${BASE_URL}/v1/memberships/memberId`;