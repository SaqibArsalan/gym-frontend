import { IReduxAction } from 'redux/interfaces';
import { IDropdownResponse } from '../Staff';

export interface ISessionInitialState {
	sessionList: ISessionInfo[];
	sessionDetails: ISessionInfo | null;
	sessionListForDropdown: IDropdownResponse[];
}
export interface ISessionActions {
	fetchSessionListSuccess: IReduxAction<ISessionInfo[]>;
	fetchSessionDetailsSuccess: IReduxAction<ISessionInfo>;
	fetchSessionListForDropdownSuccess: IReduxAction<IDropdownResponse[]>;
}

export interface ISessionInfo {
	id: string;
	classId: string;
	className: string;
	trainerId: string;
	capacity: number;
	sessionDate: string;
}

export interface ICreateOrUpdateSession {
	classId: string;
	trainerId: string;
	capacity: number;
	sessionDate: string;
}