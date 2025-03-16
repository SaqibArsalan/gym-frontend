import axios from 'axios';
import store from 'redux/store';
import {
	actions as AuthActions,
	BAZAAR_HEADER_KEY,
	BAZAAR_SECRET_KEY,
	IloginResponse,
	ILoginResponseNormalized,
	RENEW_ACCESS_TOKEN_URL,
} from 'redux/components/Auth';

import { BASE_URL } from 'redux/constants';

// import { removeFromLocal, getFromLocal, saveToLocal } from 'utils/Cache';
import { loginPayloadNormalizer } from 'redux/components/Auth/normalizers/Auth.normalizer';
import { throwErrorToast } from 'redux/utils/source.helper';
import { normalizeCatchErrors } from './client.configs';

const axiosInterceptorInstance = axios.create();

export interface IRenewAccessTokenPayload {
	username: string;
	token: string;
}

export const refreshAccessToken = (payload: IRenewAccessTokenPayload) =>
	new Promise<ILoginResponseNormalized>((resolve, reject) => {
		const headers = {
			[BAZAAR_HEADER_KEY]: BAZAAR_SECRET_KEY,
		};
		axios
			.post(RENEW_ACCESS_TOKEN_URL, payload, { headers })
			.then(response => {
				if (response) {
					const { data } = response;
					const normalizedPayload = loginPayloadNormalizer(data as IloginResponse);
					// Updating the ability context

					if (!normalizedPayload.auth.refreshToken) {
						normalizedPayload.auth.refreshToken = payload.token;
					}

					resolve(normalizedPayload);
				} else {
					reject();
				}
			})
			.catch(error => {
				const errorPayload = normalizeCatchErrors(error.response);
				reject(errorPayload);
			});
	});

// Response interceptor
/* eslint-disable no-underscore-dangle */
axiosInterceptorInstance.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config;
		const storageKey = process.env.STORAGE_KEY || 'auth';
		// Push to login and clear storage if refresh call fails
		if (
			error.response.status !== 200 &&
			originalRequest.url.includes('auth/token/renew')
		) {
			// removeFromLocal(storageKey);
			window.location.href = `/`;
		}

		// If token expired and API returns 401
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			// const refreshToken: ILoginResponseNormalized = getFromLocal(storageKey);
			try {
				// const loginResponse: ILoginResponseNormalized = await refreshAccessToken({
				// 	username: refreshToken.userInfo.phoneNumber,
				// 	token: refreshToken.auth.refreshToken as string,
				// });
				// Saving auth to local storage (cache)
				// saveToLocal(loginResponse, storageKey);
				// store.dispatch(AuthActions.loginSuccess(loginResponse));
				// originalRequest.headers.Authorization = `Bearer ${loginResponse.auth.token}`;
				return axiosInterceptorInstance(originalRequest);
			} catch (e) {
				throwErrorToast(e);
				// removeFromLocal(storageKey);
				setTimeout(() => {
					window.location.href = `/`;
				}, 200);
			}
		}
		return Promise.reject(error);
	}
);

export default axiosInterceptorInstance;
