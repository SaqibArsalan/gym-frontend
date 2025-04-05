import {
	IDataTableProps,
	ITableBodyRow,
} from 'components/shared/DataTable/DataTable.interface';
import { format, parseISO } from 'date-fns';
import {
	tableColumnsMap,
	defaultBodyColumnsConfigs,
} from './UserPage.configs';
import { ItableColumnsMap } from './UserPage.interface';
import {IMembersSubscriptions} from "../../../redux/components/Members";
import {IStaff} from "../../../redux/components/Staff";
import {IUserInfo} from "../../../redux/components/User";

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

		return result;
	});

export const generateTableData = (
	userList: IUserInfo[],
	otherProps: any
): IDataTableProps => ({
	isStickyHeader: true,
	header: {
		columns: generateTableHeaderColumns(),
	},
	body: {
		rows: userList.map((subscriptions: any, index: number) => ({
			columns: generateRowColumnsForItem(subscriptions, index),
			onRowClick: otherProps.onRowClick || undefined
		})) as ITableBodyRow[],
	},
	...otherProps,
});
