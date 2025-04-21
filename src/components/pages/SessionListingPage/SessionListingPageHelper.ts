import {IDataTableProps, ITableBodyRow,} from 'components/shared/DataTable/DataTable.interface';
import {format} from 'date-fns';
import dayjs from "dayjs";
import {defaultBodyColumnsConfigs, tableColumnsMap,} from './SessionListingPage.configs';
import {ItableColumnsMap} from './SessionListingPage.interface';
import {IMembersSubscriptions} from "../../../redux/components/Members";
import {IClassResponseInfo} from "../../../redux/components/Gym Class";

export const generateTableHeaderColumns = () =>
	tableColumnsMap.map((record: ItableColumnsMap) => ({
		title: record.headerTitle,
	}));

export const generateRowColumnsForItem = (
	item: IClassResponseInfo,
	rowIndex: number
) =>
	tableColumnsMap.map((record: ItableColumnsMap) => {
		const { valueKey } = record;
		const value: string = (item as any)[valueKey];

		const result: any = {
			text: value || 'Not available',
			...defaultBodyColumnsConfigs,
		};

		if (valueKey === 'sessionDate' && result.text !== 'Not available') {
			result.text = dayjs(value).format("DD MMMM, YYYY HH:mm:ss");
		}

		return result;
	});

export const generateTableData = (
	sessionList: IClassResponseInfo[],
	otherProps: any
): IDataTableProps => ({
	isStickyHeader: true,
	header: {
		columns: generateTableHeaderColumns(),
	},
	body: {
		rows: sessionList.map((sessions: IClassResponseInfo, index: number) => ({
			columns: generateRowColumnsForItem(sessions, index),
			onRowClick: otherProps.onRowClick || undefined
		})) as ITableBodyRow[],
	},
	...otherProps,
});
