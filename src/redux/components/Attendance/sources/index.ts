import { Dispatch } from 'react';
import { GymHttpClient } from 'redux/client';
import { throwErrorToast, throwSuccessToast } from 'redux/utils/source.helper';
import LoaderService from 'services/LoaderService';
import {
	CHECK_IN_URL,
	CHECK_OUT_URL,
	GET_VISITS_BY_DATE_URL,
	GET_TODAY_STATS_URL,
} from '../Attendance.constants';
import { actions, IAttendanceTodayStats, ICheckInPayload, IGymVisit } from '../index';

export const fetchVisitsByDate =
	(date: string) => async (dispatch: Dispatch<any>) => {
		const client = new GymHttpClient({ dispatchError: false });
		try {
			LoaderService.show();
			const visits = await Promise.resolve(
				client.get<IGymVisit[]>(`${GET_VISITS_BY_DATE_URL}?date=${date}`)
			);
			LoaderService.hide();
			dispatch(actions.fetchVisitsByDateSuccess(visits));
		} catch (e) {
			LoaderService.hide();
			throwErrorToast(e);
		}
	};

export const fetchTodayStats = () => async (dispatch: Dispatch<any>) => {
	const client = new GymHttpClient({ dispatchError: false });
	try {
		const stats = await Promise.resolve(
			client.get<IAttendanceTodayStats>(GET_TODAY_STATS_URL)
		);
		dispatch(actions.fetchTodayStatsSuccess(stats));
	} catch (e) {
		throwErrorToast(e);
	}
};

export const checkIn =
	(payload: ICheckInPayload) => async (dispatch: Dispatch<any>) => {
		const client = new GymHttpClient({ dispatchError: false });
		try {
			LoaderService.show();
			const visit = await Promise.resolve(
				client.post<IGymVisit>(CHECK_IN_URL, payload)
			);
			LoaderService.hide();
			throwSuccessToast('Member checked in successfully');
			dispatch(actions.checkInSuccess(visit));
		} catch (e) {
			LoaderService.hide();
			throwErrorToast(e);
		}
	};

export const checkOut =
	(visitId: string) => async (dispatch: Dispatch<any>) => {
		const client = new GymHttpClient({ dispatchError: false });
		try {
			LoaderService.show();
			const visit = await Promise.resolve(
				client.patch<IGymVisit>(
					CHECK_OUT_URL.replace('visitId', visitId),
					{}
				)
			);
			LoaderService.hide();
			throwSuccessToast('Member checked out successfully');
			dispatch(actions.checkOutSuccess(visit));
		} catch (e) {
			LoaderService.hide();
			throwErrorToast(e);
		}
	};

