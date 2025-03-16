import { IReduxActionResponse } from 'redux/interfaces';
import authInitialState from '../initialState';
import { IAuthInitialState, ILoginResponseNormalized } from '../Auth.interface';

export const loginSuccess = (
	state: IAuthInitialState,
	action: IReduxActionResponse<ILoginResponseNormalized>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, isLoading: false, ...payload };
	}
	return state;
};

export const logout = (
	state: IAuthInitialState,
	action: IReduxActionResponse<void>
) => ({ ...authInitialState });
