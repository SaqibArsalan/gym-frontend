import { IReduxAction } from 'redux/interfaces';

export interface IUserInitialState {
	usersByNameList: IUsersDropdown[];
	usersList: IUserInfo[];
}
export interface IUserActions {
	fetchUsersByNameListSuccess: IReduxAction<IUsersDropdown[]>;
	fetchUsersListSuccess: IReduxAction<IUserInfo[]>;
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

export interface IUserCreateOrUpdate {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	phoneNumber: string;
	accountStatus: string;
	dateOfBirth: string;
}
