import { IReduxActionResponse } from 'redux/interfaces';
import {
	IDropdownResponse,
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

export const fetchStaffByNameListSuccess = (
	state: IStaffInitialState,
	action: IReduxActionResponse<IDropdownResponse[]>
)=> {
	const { payload } = action;
	if (payload) {
		state = { ...state, staffByNameList: payload}
	}
	return state;
}