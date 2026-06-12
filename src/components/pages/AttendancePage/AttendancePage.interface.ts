import { IAuthInitialState } from 'redux/components/Auth';
import { IAttendanceTodayStats, IGymVisit } from 'redux/components/Attendance';
import { IUsersDropdown } from 'redux/components/User';

export interface IAttendancePageProps {
	auth: IAuthInitialState;
	visits: IGymVisit[];
	todayStats: IAttendanceTodayStats;
	usersForDropdown: IUsersDropdown[];
}

export interface ItableColumnsMap {
	headerTitle: string;
	valueKey: string;
}
