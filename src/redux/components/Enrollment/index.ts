import { createActionAndReducers } from 'redux/utils/reducer.helper';
import { IEnrollmentActions } from './Enrollment.interface';
import { reducerName } from './Enrollment.constants';
import enrollmentInitialState from './initialState';
import * as enrollmentEffects from './affects';

export * from './Enrollment.interface';
export * from './Enrollment.constants';

const { actions, reducer } = createActionAndReducers<IEnrollmentActions>(
	reducerName,
	enrollmentInitialState,
	enrollmentEffects
);

export { actions, enrollmentInitialState, reducer };

