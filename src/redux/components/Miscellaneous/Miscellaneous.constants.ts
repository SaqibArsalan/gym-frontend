import { GATEWAY_URL, BASE_URL } from 'redux/constants';

export const reducerName = 'miscellaneous';

// urls
// add urls here
export const GET_WAREHOUSE_LOCATIONS = `${GATEWAY_URL}/v1/inventory/warehouse`;
export const GET_ACTIVE_MEMBERS_COUNT = `${BASE_URL}/v1/memberships/members`;
export const GET_ACTIVE_SUBSCRIPTION_COUNT = `${BASE_URL}/v1/memberships/active-subscriptions`;
export const GET_NEW_SIGNUPS_THIS_MONTH = `${BASE_URL}/v1/memberships/new-signups`;