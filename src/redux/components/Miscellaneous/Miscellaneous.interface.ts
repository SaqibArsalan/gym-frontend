import { IReduxAction } from 'redux/interfaces';

export interface IMiscellaneousInitialState {
	warehouses: IWarehouse[];
	activeMembersCount: number;
	activeSubscriptionsCount: number;
	newSignupsCount: number;
}
export interface IMiscellaneousActions {
	fetchWarehousesSuccess: IReduxAction<IWarehouse[]>;
	fetchActiveMembersCountSuccess: IReduxAction<number>;
	fetchActiveSubscriptionsCountSuccess: IReduxAction<number>;
	fetchNewSignupsCountSuccess: IReduxAction<number>;
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
