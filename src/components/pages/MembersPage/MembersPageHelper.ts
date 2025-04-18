import {
	IDataTableProps,
	ITableBodyRow,
} from 'components/shared/DataTable/DataTable.interface';
import { format, parseISO } from 'date-fns';
import {
	tableColumnsMap,
	defaultBodyColumnsConfigs,
} from './MembersPage.configs';
import { ItableColumnsMap } from './MembersPage.interface';
import {IMembersSubscriptions} from "../../../redux/components/Members";

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

		if (valueKey === 'joinDate' && result.text !== 'Not available') {
			result.text = format(new Date(value), 'dd MMMM, yyyy');
		}

		if (valueKey === 'expiryDate' && result.text !== 'Not available') {
			result.text = format(new Date(value), 'dd MMMM, yyyy');
		}

		return result;
	});

export const generateTableData = (
	membersSubscriptions: IMembersSubscriptions[],
	otherProps: any
): IDataTableProps => ({
	isStickyHeader: true,
	header: {
		columns: generateTableHeaderColumns(),
	},
	body: {
		rows: membersSubscriptions.map((subscriptions: any, index: number) => ({
			columns: generateRowColumnsForItem(subscriptions, index),
			onRowClick: otherProps.onRowClick || undefined,
		})) as ITableBodyRow[],
	},
	...otherProps
});
