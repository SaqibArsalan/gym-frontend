import { IReduxActionResponse } from 'redux/interfaces';
import {
	IAttendanceInitialState,
	IAttendanceTodayStats,
	IGymVisit,
} from '../Attendance.interface';

export const fetchVisitsByDateSuccess = (
	state: IAttendanceInitialState,
	action: IReduxActionResponse<IGymVisit[]>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, visits: payload };
	}
	return state;
};

export const checkInSuccess = (
	state: IAttendanceInitialState,
	action: IReduxActionResponse<IGymVisit>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, visits: [payload, ...state.visits] };
	}
	return state;
};

export const checkOutSuccess = (
	state: IAttendanceInitialState,
	action: IReduxActionResponse<IGymVisit>
) => {
	const { payload } = action;
	if (payload) {
		state = {
			...state,
			visits: state.visits.map((v) => (v.id === payload.id ? payload : v)),
		};
	}
	return state;
};

export const fetchTodayStatsSuccess = (
	state: IAttendanceInitialState,
	action: IReduxActionResponse<IAttendanceTodayStats>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, todayStats: payload };
	}
	return state;
};

