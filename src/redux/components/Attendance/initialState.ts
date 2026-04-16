import { IAttendanceInitialState } from './Attendance.interface';

const attendanceInitialState: IAttendanceInitialState = {
	visits: [],
	todayStats: {
		presentToday: 0,
		currentlyInside: 0,
	},
};

export default attendanceInitialState;

