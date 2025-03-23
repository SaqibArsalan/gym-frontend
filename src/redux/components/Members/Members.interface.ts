import { IReduxAction } from 'redux/interfaces';

export interface IMembersInitialState {
	membersSubscriptions: IMembersSubscriptions[];
}
export interface IMembersActions {
	fetchWarehousesSuccess: IReduxAction<IWarehouse[]>;
	fetchMembersSubscriptionsSuccess: IReduxAction<IMembersSubscriptions[]>;
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

export interface IMembersSubscriptions {
	userId: string;
	membershipPlanId: string;
	memberName: string;
	joinDate: string;
	expiryDate: string;
	membershipPlanName: string;
	price: number
}
