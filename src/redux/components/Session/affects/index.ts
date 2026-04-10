import { IReduxActionResponse } from 'redux/interfaces';
import {
	ISessionInfo,
	ISessionInitialState
} from '../Session.interface';
import { IDropdownResponse } from '../../Staff';


export const fetchSessionListSuccess = (
	state: ISessionInitialState,
	action: IReduxActionResponse<ISessionInfo[]>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, sessionList: payload};
	}
	return state;
};

export const fetchSessionListForDropdownSuccess = (
	state: ISessionInitialState,
	action: IReduxActionResponse<IDropdownResponse[]>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, sessionListForDropdown: payload };
	}
	return state;
};

// export const fetchUserDetailsSuccess = (
// 	state: IGymClassInitialState,
// 	action: IReduxActionResponse<IUserInfo>
// ) => {
// 	const { payload } = action;
// 	if (payload) {
// 		state = { ...state, userDetail: payload };
// 	}
// 	return state;
// }
