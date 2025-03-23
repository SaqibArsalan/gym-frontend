import React from 'react';

import { TableRow } from '@mui/material';

import { styled } from '@mui/material/styles';

import { ITableBodyRow, ITableBodyRowColumn } from '../../DataTable.interface';
import DataTableBodyRowColumn from './DataTableBodyRowColumn/DataTableBodyRowColumn';

import './DataTableBodyRow.scss';

const StyledTableRow = styled(TableRow)(() => ({
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const DataTableBodyRow: React.FunctionComponent<ITableBodyRow> = (
	props: ITableBodyRow
) => {
	const { columns, rowStyles } = props;

	const onClick = () => {
		const { onRowClick, ...others } = props;
		if (onRowClick) {
			onRowClick(others);
		}
	};

	return (
		<StyledTableRow
			className='data-table-row'
			onClick={onClick}
			sx={rowStyles || {}}
		>
			{columns.map((column: ITableBodyRowColumn, index: number) => (
				<DataTableBodyRowColumn
					key={`dt-row-col-${index}`}
					columnIndex={index}
					{...column}
				/>
			))}
		</StyledTableRow>
	);
};

export default DataTableBodyRow;
