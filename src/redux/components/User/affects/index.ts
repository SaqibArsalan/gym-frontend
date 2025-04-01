import { IReduxActionResponse } from 'redux/interfaces';
import {
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
