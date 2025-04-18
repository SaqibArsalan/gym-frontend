import { ItableColumnsMap } from './SessionListingPage.interface';

export const tableColumnsMap: ItableColumnsMap[] = [
	{
		headerTitle: 'Class Name',
		valueKey: 'className',
	},
	{
		headerTitle: 'Session Date & Time',
		valueKey: 'sessionDate',
	},
	{
		headerTitle: 'Capacity',
		valueKey: 'capacity',
	}
];


export const defaultBodyColumnsConfigs = {
	tableCellProps: {
		align: 'left',
		sx: { width: '16%' },
	},
};

