import { IReduxAction } from 'redux/interfaces';

export interface IStaffInitialState {
	staffList: IStaff[];
	staffDetail: IStaff | null;
	staffByNameList: IDropdownResponse[];
}
export interface IStaffActions {
	fetchWarehousesSuccess: IReduxAction<IWarehouse[]>;
	fetchStaffListSuccess: IReduxAction<IStaff[]>;
	fetchStaffDetailsSuccess: IReduxAction<IStaff>;
	fetchStaffByNameListSuccess: IReduxAction<IDropdownResponse[]>;
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

export interface IStaff {
	id: string;
	userId: string;
	name: string;
	salary: number;
	hireDate: string;
}

export interface IDropdownResponse {
	id: string;
	name: string;
}
