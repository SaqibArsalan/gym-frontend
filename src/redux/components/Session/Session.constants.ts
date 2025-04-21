import { BASE_URL } from 'redux/constants';

export const reducerName = 'session';

// urls
// add urls here
export const GET_SESSION_LIST = `${BASE_URL}/v1/sessions`;
export const GET_CLASS_DETAIL = `${BASE_URL}/v1/sessions/userId`;
export const CREATE_SESSION = `${BASE_URL}/v1/sessions/classes/classId`;
