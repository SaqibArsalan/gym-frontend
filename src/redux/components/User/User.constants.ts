import { BASE_URL } from 'redux/constants';

export const reducerName = 'user';

// urls
// add urls here
export const GET_USERS_BY_NAME_LIST = `${BASE_URL}/v1/identity/users/search`;
export const GET_USERS_LIST = `${BASE_URL}/v1/identity/users`;
export const CREATE_USER = `${BASE_URL}/v1/identity/users`;
export const GET_USER_DETAIL = `${BASE_URL}/v1/identity/users/userId`;
