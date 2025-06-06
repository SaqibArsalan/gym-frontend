import {
	IDataTableProps,
	ITableBodyRow,
} from 'components/shared/DataTable/DataTable.interface';
import { format, parseISO } from 'date-fns';
import {
	tableColumnsMap,
	defaultBodyColumnsConfigs,
} from './StaffPage.configs';
import { ItableColumnsMap } from './StaffPage.interface';
import {IMembersSubscriptions} from "../../../redux/components/Members";
import {IStaff} from "../../../redux/components/Staff";

export const generateTableHeaderColumns = () =>
	tableColumnsMap.map((record: ItableColumnsMap) => ({
		title: record.headerTitle,
	}));

export const generateRowColumnsForItem = (
	item: IMembersSubscriptions,
	rowIndex: number
) =>
	tableColumnsMap.map((record: ItableColumnsMap) => {
		const { valueKey } = record;
		const value: string = (item as any)[valueKey];

		const result: any = {
			text: value || 'Not available',
			...defaultBodyColumnsConfigs,
		};

		if (valueKey === 'hireDate' && result.text !== 'Not available') {
			result.text = format(new Date(value), 'dd MMMM, yyyy');
		}

		return result;
	});

export const generateTableData = (
	staffList: IStaff[],
	otherProps: any
): IDataTableProps => ({
	isStickyHeader: true,
	header: {
		columns: generateTableHeaderColumns(),
	},
	body: {
		rows: staffList.map((subscriptions: any, index: number) => ({
			columns: generateRowColumnsForItem(subscriptions, index),
			onRowClick: otherProps.onRowClick || undefined
		})) as ITableBodyRow[],
	},
	...otherProps,
});
