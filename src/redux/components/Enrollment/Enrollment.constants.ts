import { BASE_URL } from 'redux/constants';

export const reducerName = 'enrollment';

// urls
export const ENROLL_MEMBER_IN_SESSION = `${BASE_URL}/v1/enrollments`;
export const GET_ENROLLMENTS_BY_SESSION = `${BASE_URL}/v1/enrollments/session/sessionId`;
export const GET_ENROLLMENTS_BY_MEMBER = `${BASE_URL}/v1/enrollments/member/membershipId`;

