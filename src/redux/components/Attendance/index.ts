import { createActionAndReducers } from 'redux/utils/reducer.helper';
import { IAttendanceActions } from './Attendance.interface';
import { reducerName } from './Attendance.constants';
import attendanceInitialState from './initialState';
import * as attendanceEffects from './affects';

export * from './Attendance.interface';
export * from './Attendance.constants';

const { actions, reducer } = createActionAndReducers<IAttendanceActions>(
	reducerName,
	attendanceInitialState,
	attendanceEffects
);

export { actions, attendanceInitialState, reducer };

