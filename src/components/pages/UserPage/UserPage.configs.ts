import { ItableColumnsMap } from './UserPage.interface';

export const tableColumnsMap: ItableColumnsMap[] = [
	{
		headerTitle: 'First Name',
		valueKey: 'firstName',
	},
	{
		headerTitle: 'Last Name',
		valueKey: 'lastName',
	},
	{
		headerTitle: 'Email',
		valueKey: 'email',
	},
	{
		headerTitle: 'Phone Number',
		valueKey: 'phoneNumber',
	},
	{
		headerTitle: 'Account Status',
		valueKey: 'accountStatus',
	}
];


export const defaultBodyColumnsConfigs = {
	tableCellProps: {
		align: 'left',
		sx: { width: '16%' },
	},
};

