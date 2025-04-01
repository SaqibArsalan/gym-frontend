import { IReduxAction } from 'redux/interfaces';

export interface IUserInitialState {
	usersByNameList: IUsersDropdown[];
}
export interface IUserActions {
	fetchUsersByNameListSuccess: IReduxAction<IUsersDropdown[]>;
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

export interface IUserInfo {
	id: string;
	firstName: string;
	lastName: number;
	email: string;
	phoneNumber: string;
	accountStatus: string;
}

export interface IUsersDropdown{
	id: string;
	name: string;
	email: string;
}
