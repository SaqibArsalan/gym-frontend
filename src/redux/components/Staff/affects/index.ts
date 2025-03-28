import { IReduxActionResponse } from 'redux/interfaces';
import {
	IStaff, IStaffInitialState,
	IWarehouse,
} from '../Staff.interface';

export const fetchStaffListSuccess = (
	state: IStaffInitialState,
	action: IReduxActionResponse<IStaff[]>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, staffList: payload};
	}
	return state;
};

export const fetchStaffDetailsSuccess = (
	state: IStaffInitialState,
	action: IReduxActionResponse<IStaff>
)=> {
	const { payload } = action;
	if (payload) {
		state = { ...state, staffDetail: payload};
	}
	return state;
}
