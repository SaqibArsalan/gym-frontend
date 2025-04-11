import {IAuthenticationResponse, IAuthInitialState} from './Auth.interface';

const authInitialState: IAuthInitialState = {
	isLoading: false,
	isError: false,
	error: null,
	auth: null,
	scopes: null,
	userInfo: null,
	mfa: null,
	isValidateMFASuccess: false,
	roles: [],
	userDetails: null
};

export default authInitialState;
