import { IReduxAction } from 'redux/interfaces';

export type MarkedBy = 'ADMIN' | 'SELF';

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
	membershipId: string;
	memberName: string;
	checkInAt: string;
	checkOutAt: string | null;
	markedBy: MarkedBy;
	notes?: string;
}

export interface IAttendanceTodayStats {
	presentToday: number;
	currentlyInside: number;
}

export interface ICheckInPayload {
	userId: string;
	membershipId: string;
	attendeeType: string;
	markedBy: MarkedBy;
	notes?: string;
}

