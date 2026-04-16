import { BASE_URL } from 'redux/constants';

export const reducerName = 'attendance';

// urls
export const CHECK_IN_URL = `${BASE_URL}/v1/attendance/check-in`;
export const CHECK_OUT_URL = `${BASE_URL}/v1/attendance/visitId/check-out`;
export const GET_VISITS_BY_DATE_URL = `${BASE_URL}/v1/attendance`;
export const GET_TODAY_STATS_URL = `${BASE_URL}/v1/attendance/stats/today`;

