import { ItableColumnsMap } from './MembersPage.interface';

export const tableColumnsMap: ItableColumnsMap[] = [
	{
		headerTitle: 'Member Name',
		valueKey: 'memberName',
	},
	{
		headerTitle: 'Join Date',
		valueKey: 'joinDate',
	},
	{
		headerTitle: 'Expiry Date',
		valueKey: 'expiryDate',
	},
	{
		headerTitle: 'Plan Name',
		valueKey: 'planName',
	}
];


export const defaultBodyColumnsConfigs = {
	tableCellProps: {
		align: 'left',
		sx: { width: '16%' },
	},
};

