import { IReduxActionResponse } from 'redux/interfaces';
import {
	IClassInfo,
	IGymClassInitialState
} from '../GymClass.interface';


export const fetchClassListSuccess = (
	state: IGymClassInitialState,
	action: IReduxActionResponse<IClassInfo[]>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, classList: payload};
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
