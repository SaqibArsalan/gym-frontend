import {IDataTableProps, ITableBodyRow,} from 'components/shared/DataTable/DataTable.interface';
import {format} from 'date-fns';
import {defaultBodyColumnsConfigs, tableColumnsMap,} from './GymClassPage.configs';
import {ItableColumnsMap} from './GymClassPage.interface';
import {IMembersSubscriptions} from "../../../redux/components/Members";
import {IClassResponseInfo} from "../../../redux/components/Gym Class";

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

		if (valueKey === 'date') {
			const date: string = (item as any).startTime;
			if (date) {
				result.text = format(new Date(date), 'dd MMMM, yyyy');
			} else {
				result.text = 'Not available';
			}
		}

		if (valueKey === 'startTime' && result.text !== 'Not available') {
			result.text = format(new Date(value), "hh:mm a");
		}
		if (valueKey === 'endTime' && result.text !== 'Not available') {
			result.text = format(new Date(value), "hh:mm a");
		}

		return result;
	});

export const generateTableData = (
	classList: IClassResponseInfo[],
	otherProps: any
): IDataTableProps => ({
	isStickyHeader: true,
	header: {
		columns: generateTableHeaderColumns(),
	},
	body: {
		rows: classList.map((subscriptions: any, index: number) => ({
			columns: generateRowColumnsForItem(subscriptions, index),
			onRowClick: otherProps.onRowClick || undefined
		})) as ITableBodyRow[],
	},
	...otherProps,
});
