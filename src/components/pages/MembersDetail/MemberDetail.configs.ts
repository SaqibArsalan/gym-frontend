import { ItableColumnsMap } from './MemberDetail.interface';

export const tableColumnsMap: ItableColumnsMap[] = [
	{
		headerTitle: 'Staff Name',
		valueKey: 'name',
	},
	{
		headerTitle: 'Hire Date',
		valueKey: 'hireDate',
	},
	{
		headerTitle: 'Salary',
		valueKey: 'salary',
	}
];


export const defaultBodyColumnsConfigs = {
	tableCellProps: {
		align: 'left',
		sx: { width: '16%' },
	},
};

