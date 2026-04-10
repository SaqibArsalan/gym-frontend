import { IReduxAction } from 'redux/interfaces';

export interface IEnrollmentInitialState {
	enrollments: IEnrollment[];
}

export interface IEnrollmentActions {
	fetchEnrollmentsSuccess: IReduxAction<IEnrollment[]>;
}

export interface IEnrollment {
	id: string;
	sessionId: string;
	membershipId: string;
	memberName: string;
	enrolledAt: string;
}

export interface ICreateEnrollment {
	sessionId: string;
	membershipId: string;
}

