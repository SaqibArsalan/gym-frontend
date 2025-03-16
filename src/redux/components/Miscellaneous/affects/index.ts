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
