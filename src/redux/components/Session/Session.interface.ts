import { IReduxAction } from 'redux/interfaces';

export interface ISessionInitialState {
	sessionList: ISessionInfo[];
	sessionDetails: ISessionInfo | null;
}
export interface ISessionActions {
	fetchSessionListSuccess: IReduxAction<ISessionInfo[]>;
	fetchSessionDetailsSuccess: IReduxAction<ISessionInfo>;
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
	className: string;
	description: string;
	trainerId: string;
	capacity: number;
	sessionDate: string;
}