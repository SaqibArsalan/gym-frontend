import { IReduxAction } from 'redux/interfaces';

export type MarkedBy = 'ADMIN' | 'SELF';
export type AttendeeType = 'MEMBER' | 'STAFF';

export interface IAttendanceInitialState {
	visits: IGymVisit[];
	todayStats: IAttendanceTodayStats;
}

export interface IAttendanceActions {
	fetchVisitsByDateSuccess: IReduxAction<IGymVisit[]>;
	checkInSuccess: IReduxAction<IGymVisit>;
	checkOutSuccess: IReduxAction<IGymVisit>;
	fetchTodayStatsSuccess: IReduxAction<IAttendanceTodayStats>;
}

export interface IGymVisit {
	id: string;
	userId: string;
	attendeeType: AttendeeType;
	checkInTime: string;
	checkOutTime: string | null;
	markedBy: MarkedBy;
	notes?: string;
}

export interface IAttendanceTodayStats {
	presentToday: number;
	currentlyInside: number;
}

export interface ICheckInPayload {
	userId: string;
	attendeeType: AttendeeType;
	markedBy: MarkedBy;
	notes?: string;
}
