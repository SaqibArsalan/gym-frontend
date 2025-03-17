import { IReduxAction } from 'redux/interfaces';

export interface IMiscellaneousInitialState {
	warehouses: IWarehouse[];
	activeMembersCount: number;
}
export interface IMiscellaneousActions {
	fetchWarehousesSuccess: IReduxAction<IWarehouse[]>;
	fetchActiveMembersCountSuccess: IReduxAction<Number>;
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
