import { ItableColumnsMap } from './AttendancePage.interface';

export const tableColumnsMap: ItableColumnsMap[] = [
	{ headerTitle: 'Member Name', valueKey: 'memberName' },
	{ headerTitle: 'Checked In', valueKey: 'checkInAt' },
	{ headerTitle: 'Checked Out', valueKey: 'checkOutAt' },
	{ headerTitle: 'Status', valueKey: 'status' },
	{ headerTitle: 'Action', valueKey: 'action' },
];

export const defaultBodyColumnsConfigs = {
	tableCellProps: {
		align: 'left' as const,
		sx: { width: '18%' },
	},
};

