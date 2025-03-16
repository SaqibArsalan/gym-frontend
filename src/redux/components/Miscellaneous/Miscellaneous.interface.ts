import { IReduxAction } from 'redux/interfaces';

export interface IMiscellaneousInitialState {
	warehouses: IWarehouse[];
}
export interface IMiscellaneousActions {
	fetchWarehousesSuccess: IReduxAction<IWarehouse[]>;
}

export interface IWarehouse {
	id: string;
	externalWarehouseId: string;
	name: string;
	latitude: number;
	longitude: number;
	description?: string;
	cities: string[];
}
