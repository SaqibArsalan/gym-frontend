// // Lib
import { Dispatch } from 'react';

// // Client Helper
import { GymHttpClient } from 'redux/client';
import { throwErrorToast } from 'redux/utils/source.helper';

import LoaderService from 'services/LoaderService';

// // Interfaces
import { IPaginationOption } from 'redux/interfaces';
import { GET_WAREHOUSE_LOCATIONS } from '../Miscellaneous.constants';

// // Actions
import { actions } from '../index';
import { IWarehouse } from '../Miscellaneous.interface';

export const fetchWarehouseList = (params?: IPaginationOption) => {
	const client = new GymHttpClient({ dispatchError: false });
	const url = GET_WAREHOUSE_LOCATIONS;
	return client.get<IWarehouse[]>(url, { params });
};
export const fetchWarehouseData = () => async (dispatch: Dispatch<any>) => {
	try {
		const warehouses = await Promise.resolve(fetchWarehouseList());
		dispatch(actions.fetchWarehousesSuccess(warehouses));
	} catch (e) {
		throwErrorToast(e);
	}
};
