import { BASE_URL } from 'redux/constants';

export const reducerName = 'staff';

// urls
// add urls here
export const GET_STAFF_BY_NAME_LIST = `${BASE_URL}/v1/staff/search`;
export const GET_STAFF_LIST = `${BASE_URL}/v1/staff`;
export const GET_STAFF_DETAIL = `${BASE_URL}/v1/staff/userId`;
export const CREATE_STAFF = `${BASE_URL}/v1/staff`;