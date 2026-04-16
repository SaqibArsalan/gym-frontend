import { IAuthInitialState } from 'redux/components/Auth';
import { IAttendanceTodayStats, IGymVisit } from 'redux/components/Attendance';
import { IDropdownResponse } from 'redux/components/Staff';

export interface IAttendancePageProps {
	auth: IAuthInitialState;
	visits: IGymVisit[];
	todayStats: IAttendanceTodayStats;
	membersForDropdown: IDropdownResponse[];
}

export interface ItableColumnsMap {
	headerTitle: string;
	valueKey: string;
}

