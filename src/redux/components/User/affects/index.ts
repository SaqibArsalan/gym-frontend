import { IReduxActionResponse } from 'redux/interfaces';
import {
	IUserInfo,
	IUserInitialState, IUsersDropdown
} from '../User.interface';

export const fetchUsersByNameListSuccess = (
	state: IUserInitialState,
	action: IReduxActionResponse<IUsersDropdown[]>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, usersByNameList: payload};
	}
	return state;
};

export const fetchUsersListSuccess = (
	state: IUserInitialState,
	action: IReduxActionResponse<IUserInfo[]>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, usersList: payload};
	}
	return state;
};

export const fetchUserDetailsSuccess = (
	state: IUserInitialState,
	action: IReduxActionResponse<IUserInfo>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, userDetail: payload };
	}
	return state;
}
