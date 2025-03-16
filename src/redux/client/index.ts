import axiosInterceptorInstance from './interceptor';

// Configs
import { normalizeCatchErrors } from './client.configs';

interface GymHttpClientConfigs {
	dispatchError?: boolean;
	normalizeError?: boolean;
}

const defaultConfigs: GymHttpClientConfigs = {
	dispatchError: true,
	normalizeError: true,
};
export class GymHttpClient {
	configs: GymHttpClientConfigs;

	constructor(configs: GymHttpClientConfigs = {}) {
		this.configs = { ...defaultConfigs, ...configs };
	}

	get = <T>(url: string, options?: Object): Promise<T> =>
		new Promise((resolve, reject) => {
			let apiOptions = {};
			apiOptions = options ? { ...apiOptions, ...options } : apiOptions;
			axiosInterceptorInstance
				.get(url, apiOptions)
				.then((response: any) => {
					resolve(response ? response.data : null);
				})
				.catch((error: any) => {
					const errorPayload = this.configs.normalizeError
						? normalizeCatchErrors(error.response)
						: error.response;
					// Global dispatch Error to ErrorReducer
					reject(errorPayload);
				});
		});

	post = <T>(url: string, data: any, options?: Object): Promise<T> =>
		new Promise((resolve, reject) => {
			let apiOptions = {};
			apiOptions = options ? { ...apiOptions, ...options } : apiOptions;
			axiosInterceptorInstance
				.post(url, data, apiOptions)
				.then(response => {
					resolve(response ? response.data : null);
				})
				.catch(error => {
					const errorPayload = this.configs.normalizeError
						? normalizeCatchErrors(error.response)
						: error.response;
					reject(errorPayload);
				});
		});

	put = <T>(url: string, data: any, options?: Object): Promise<T> =>
		new Promise((resolve, reject) => {
			let apiOptions = {};
			apiOptions = options ? { ...apiOptions, ...options } : apiOptions;
			axiosInterceptorInstance
				.put(url, data, apiOptions)
				.then(response => {
					resolve(response ? response.data : null);
				})
				.catch(error => {
					const errorPayload = this.configs.normalizeError
						? normalizeCatchErrors(error.response)
						: error.response;
					reject(errorPayload);
				});
		});

	patch = <T>(url: string, data: any, options?: Object): Promise<T> =>
		new Promise((resolve, reject) => {
			let apiOptions = {};
			apiOptions = options ? { ...apiOptions, ...options } : apiOptions;
			axiosInterceptorInstance
				.patch(url, data, apiOptions)
				.then(response => {
					resolve(response ? response.data : null);
				})
				.catch(error => {
					const errorPayload = this.configs.normalizeError
						? normalizeCatchErrors(error.response)
						: error.response;
					reject(errorPayload);
				});
		});
}
