import { IReduxActionResponse } from 'redux/interfaces';
import {
	IClassResponseInfo,
	IGymClassInitialState
} from '../GymClass.interface';
import {IDropdownResponse} from "../../Staff";


export const fetchClassListSuccess = (
	state: IGymClassInitialState,
	action: IReduxActionResponse<IClassResponseInfo[]>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, classList: payload};
	}
	return state;
};

export const fetchClassForDropdownListSuccess = (
	state: IGymClassInitialState,
	action: IReduxActionResponse<IDropdownResponse[]>
)=> {
	const { payload } = action;
	if (payload) {
		state = { ...state, classListForDropdown: payload };
	}
	return state;
}

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
