import { IReduxAction } from 'redux/interfaces';

export interface IStaffInitialState {
	staffList: IStaff[];
	staffDetail: IStaff | null;
}
export interface IStaffActions {
	fetchWarehousesSuccess: IReduxAction<IWarehouse[]>;
	fetchStaffListSuccess: IReduxAction<IStaff[]>;
	fetchStaffDetailsSuccess: IReduxAction<IStaff>;
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
	userId: string;
	name: string;
	salary: number;
	hireDate: string;
}
