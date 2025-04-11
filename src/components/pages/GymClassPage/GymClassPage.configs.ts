import { ItableColumnsMap } from './GymClassPage.interface';

export const tableColumnsMap: ItableColumnsMap[] = [
	{
		headerTitle: 'Class Name',
		valueKey: 'className',
	},
	{
		headerTitle: 'Description',
		valueKey: 'description',
	},
	{
		headerTitle: 'Capacity',
		valueKey: 'capacity',
	},
	{
		headerTitle: 'Start Time',
		valueKey: 'startTime',
	},
	{
		headerTitle: 'End Time',
		valueKey: 'endTime',
	}
];


export const defaultBodyColumnsConfigs = {
	tableCellProps: {
		align: 'left',
		sx: { width: '16%' },
	},
};

