import { IReduxAction } from 'redux/interfaces';

export interface IGymClassInitialState {
	classList: IClassInfo[];
	classDetails: IClassInfo | null;
}
export interface IClassActions {
	fetchClassListSuccess: IReduxAction<IClassInfo[]>;
	fetchClassDetailsSuccess: IReduxAction<IClassInfo>;
}

export interface IClassInfo {
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