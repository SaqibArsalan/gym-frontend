import { BASE_URL } from 'redux/constants';

export const reducerName = 'gymClass';

// urls
// add urls here
export const GET_CLASS_LIST = `${BASE_URL}/v1/classes`;
export const GET_CLASS_DETAIL = `${BASE_URL}/v1/classes/userId`;
export const CREATE_CLASS = `${BASE_URL}/v1/classes`;
