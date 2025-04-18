import { IReduxActionResponse } from 'redux/interfaces';
import {
	ISessionInfo,
	ISessionInitialState
} from '../Session.interface';


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
