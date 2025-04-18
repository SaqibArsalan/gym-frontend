import { IReduxAction } from 'redux/interfaces';

export interface IGymClassInitialState {
	classList: ISessionInfo[];
	classDetails: ISessionInfo | null;
}
export interface IClassActions {
	fetchClassListSuccess: IReduxAction<ISessionInfo[]>;
	fetchClassDetailsSuccess: IReduxAction<ISessionInfo>;
}

export interface ISessionInfo {
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