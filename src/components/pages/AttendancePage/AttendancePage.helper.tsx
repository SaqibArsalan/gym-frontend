import React from 'react';
import { Button, Chip, Typography } from '@mui/material';
import { format } from 'date-fns';
import { IDataTableProps, ITableBodyRow } from 'components/shared/DataTable/DataTable.interface';
import { IGymVisit } from 'redux/components/Attendance';
import { IUsersDropdown } from 'redux/components/User';
import { tableColumnsMap, defaultBodyColumnsConfigs } from './AttendancePage.configs';
import { ItableColumnsMap } from './AttendancePage.interface';

// ── Inline cell components ────────────────────────────────────────────────────

export const AttendanceStatusChip: React.FC<{ checkOutTime: string | null }> = ({
	checkOutTime,
}) => {
	if (checkOutTime) {
		return <Chip label="Left" size="small" variant="outlined" color="default" />;
	}
	return <Chip label="Inside" size="small" color="success" />;
};

export const CheckOutButton: React.FC<{
	visitId: string;
	checkOutTime: string | null;
	onCheckOut: (id: string) => void;
}> = ({ visitId, checkOutTime, onCheckOut }) => {
	if (checkOutTime) {
		return (
			<Typography variant="caption" color="text.secondary">
				—
			</Typography>
		);
	}
	return (
		<Button
			size="small"
			variant="outlined"
			color="primary"
			onClick={(e) => {
				e.stopPropagation();
				onCheckOut(visitId);
			}}
		>
			Check Out
		</Button>
	);
};

// ── Table helpers ─────────────────────────────────────────────────────────────

const formatTime = (iso: string | null): string => {
	if (!iso) return '—';
	try {
		return format(new Date(iso), 'dd MMM, hh:mm a');
	} catch {
		return iso;
	}
};

export const generateTableHeaderColumns = () =>
	tableColumnsMap.map((record: ItableColumnsMap) => ({ title: record.headerTitle }));

export const generateRowColumnsForItem = (
	item: IGymVisit,
	onCheckOut: (id: string) => void,
	usersMap: Record<string, string>
) =>
	tableColumnsMap.map((record: ItableColumnsMap) => {
		const { valueKey } = record;

		if (valueKey === 'memberName') {
			return {
				...defaultBodyColumnsConfigs,
				text: usersMap[item.userId] || item.userId,
			};
		}

		if (valueKey === 'status') {
			return {
				...defaultBodyColumnsConfigs,
				component: AttendanceStatusChip,
				componentProps: { checkOutTime: item.checkOutTime },
			};
		}

		if (valueKey === 'action') {
			return {
				...defaultBodyColumnsConfigs,
				component: CheckOutButton,
				componentProps: {
					visitId: item.id,
					checkOutTime: item.checkOutTime,
					onCheckOut,
				},
			};
		}

		if (valueKey === 'checkInAt') {
			return { ...defaultBodyColumnsConfigs, text: formatTime(item.checkInTime) };
		}

		if (valueKey === 'checkOutAt') {
			return { ...defaultBodyColumnsConfigs, text: formatTime(item.checkOutTime) };
		}

		return {
			...defaultBodyColumnsConfigs,
			text: (item as any)[valueKey] || 'Not available',
		};
	});

export const generateTableData = (
	visits: IGymVisit[],
	onCheckOut: (id: string) => void,
	usersForDropdown: IUsersDropdown[],
	otherProps: any
): IDataTableProps => {
	const usersMap: Record<string, string> = {};
	usersForDropdown.forEach((u) => {
		usersMap[u.id] = u.name;
	});

	return {
		isStickyHeader: true,
		header: { columns: generateTableHeaderColumns() },
		body: {
			rows: visits.map((visit, index) => ({
				columns: generateRowColumnsForItem(visit, onCheckOut, usersMap),
				rowIndex: index,
			})) as ITableBodyRow[],
		},
		...otherProps,
	};
};

