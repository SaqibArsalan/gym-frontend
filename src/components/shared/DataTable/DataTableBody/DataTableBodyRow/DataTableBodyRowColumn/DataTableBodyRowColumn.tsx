import React from 'react';

import { TableCell, tableCellClasses } from '@mui/material';

import { styled } from '@mui/material/styles';

import { ITableBodyRowColumn } from '../../../DataTable.interface';

const StyledTableCell = styled(TableCell)(() => ({
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const DataTableBodyRowColumn: React.FunctionComponent<ITableBodyRowColumn> = (
	props: ITableBodyRowColumn
) => {
	const { text, component, componentProps, tableCellProps, defaultCell } = props;
	const CellChildComponent = component as any;

	const onClick = () => {
		const { onRowColumnClick, ...others } = props;
		if (onRowColumnClick) {
			onRowColumnClick(others);
		}
	};

	const TableCellComponent = defaultCell ? TableCell : StyledTableCell;
	return (
		<TableCellComponent onClick={onClick} {...tableCellProps}>
			{component ? <CellChildComponent {...componentProps} /> : text}
		</TableCellComponent>
	);
};

export default DataTableBodyRowColumn;
