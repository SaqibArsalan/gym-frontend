import { IReduxActionResponse } from 'redux/interfaces';
import { IEnrollment, IEnrollmentInitialState } from '../Enrollment.interface';

export const fetchEnrollmentsSuccess = (
	state: IEnrollmentInitialState,
	action: IReduxActionResponse<IEnrollment[]>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, enrollments: payload };
	}
	return state;
};

