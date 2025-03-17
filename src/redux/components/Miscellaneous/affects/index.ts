import { IReduxActionResponse } from 'redux/interfaces';
import {
	IMiscellaneousInitialState,
	IWarehouse,
} from '../Miscellaneous.interface';

export const fetchWarehousesSuccess = (
	state: IMiscellaneousInitialState,
	action: IReduxActionResponse<IWarehouse[]>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, warehouses: payload || [] };
	}
	return state;
};

export const fetchActiveMembersCountSuccess = (
	state: IMiscellaneousInitialState,
	action: IReduxActionResponse<number>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, activeMembersCount: payload || 0 };
	}
	return state;
};
