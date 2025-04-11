import { IReduxAction } from 'redux/interfaces';

// Add your new action payload in interface below
export interface IAuthActions {
	loginSuccess: IReduxAction<IAuthenticationResponse>;
	logout: IReduxAction<void>;
	registrationSuccess: IReduxAction<IRegistration>
}

export interface IAuthInitialState {
	isLoading: boolean;
	isError: boolean;
	error: null | string | object;
	auth: null | object;
	scopes: any[] | null;
	userInfo: any | null;
	mfa: any | null;
	isValidateMFASuccess: boolean;
	roles: string[];
	userDetails: IAuthenticationResponse | null;
}

export interface ILoginSuccessPayload {
	scopes: any[] | null;
}

export interface ILoginUserInfo {
	id: string;
	fullName: string;
	phoneNumber: string;
	nationalId: string;
	countryCode: string;
	accountStatus: string;
}
export interface IloginResponse {
	token: string;
	legacyToken: string;
	scopes: string[];
	userInfo: ILoginUserInfo;
	refreshToken: string;
	expiresAt?: string;
	accessToken: string;
	roles: string[];
}

export interface IAuth {
	token: string | null;
	expiresAt: string | null;
	refreshToken: string | null;
}

export interface ILoginResponseNormalized {
	auth: IAuth;
	isLoggedIn: boolean;
	scopes: IAbilityScopes[];
	userInfo: ILoginUserInfo;
	roles: string[];
}

export interface IAbilityScopes {
	subject: string;
	action: string;
	conditons?: IAbilitySelf;
}

interface IAbilitySelf {
	userId: string;
}
export interface IRoles {
	[key: string]: boolean;
}

export interface IRegistration {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	dateOfBirth: string;
	email: string;
	password: string;
}

export interface ILoginUserInfoDto {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	accountStatus: string;
}

export interface IAuthenticationResponse {
	token: string;
	legacyToken: string;
	userInfoDto: ILoginUserInfoDto;
	expiresAt: string;
	refreshToken: string;
	roles: string[];
}
