import { BASE_URL, GATEWAY_URL } from '../../constants';

// urls
export const reducerName = 'auth';

export const LOGIN_URL = `${BASE_URL}/auth/login`;

export const RENEW_ACCESS_TOKEN_URL = `${BASE_URL}/v3/auth/token/renew`;

// Auth Secrets

export const BAZAAR_HEADER_KEY = 'X-Bazaar-Client-Key';
export const BAZAAR_SECRET_KEY = process.env.BAZAAR_SECRET_KEY || '';
