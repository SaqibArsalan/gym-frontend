import {
	IloginResponse,
	ILoginResponseNormalized,
	IAbilityScopes,
} from '../Auth.interface';

export const generateAbilityFromScopes = (
	subject: string,
	action: string,
	isSelf: boolean,
	userId: string
) => ({
	subject,
	action,
	conditions: isSelf ? { userId } : null,
});

export const loginPayloadNormalizer = (
	res: IloginResponse
): ILoginResponseNormalized => {
	const response: ILoginResponseNormalized = {
		isLoggedIn: true,
		auth: {
			token: res.token || null,
			expiresAt: res.expiresAt || null,
			refreshToken: res.refreshToken || null,
		},
		roles: res.roles || [],
		scopes: res.scopes
			? res.scopes.map(scope => {
					const parts = scope.split('.');
					let result: IAbilityScopes = {} as any;
					if (scope.includes('*')) {
						result = {
							subject: parts[0],
							action: parts[1],
						};
					} else {
						result = generateAbilityFromScopes(
							parts[1],
							parts[3],
							parts[2] === 'self',
							res.userInfo.id
						);
					}
					return result;
			  })
			: [],
		userInfo: res.userInfo || null,
	};
	return response;
};
