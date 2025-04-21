import { IReduxAction } from 'redux/interfaces';
import {IDropdownResponse} from "../Staff";

export interface IGymClassInitialState {
	classList: IClassResponseInfo[];
	classDetails: IClassResponseInfo | null;
	classListForDropdown: IDropdownResponse[] | null;
}
export interface IClassActions {
	fetchClassListSuccess: IReduxAction<IClassResponseInfo[]>;
	fetchClassDetailsSuccess: IReduxAction<IClassResponseInfo>;
	fetchClassForDropdownListSuccess: IReduxAction<IDropdownResponse[]>;
}

export interface IClassResponseInfo {
	id: string;
	className: string;
	description: string;
	trainerId: string;
	capacity: number;
	startTime: string;
	endTime: string;
}

export interface ICreateOrUpdateClass {
	className: string;
	description: string;
	trainerId: string;
	capacity: number;
	startTime: string;
	endTime: string;
}