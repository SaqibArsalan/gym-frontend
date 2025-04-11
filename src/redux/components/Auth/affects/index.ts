import { IReduxActionResponse } from 'redux/interfaces';
import authInitialState from '../initialState';
import {IAuthenticationResponse, IAuthInitialState, ILoginResponseNormalized} from '../Auth.interface';

export const loginSuccess = (
	state: IAuthInitialState,
	action: IReduxActionResponse<IAuthenticationResponse>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, isLoading: false, userDetails: payload };
	}
	return state;
};

export const logout = (
	state: IAuthInitialState,
	action: IReduxActionResponse<void>
) => ({ ...authInitialState });
