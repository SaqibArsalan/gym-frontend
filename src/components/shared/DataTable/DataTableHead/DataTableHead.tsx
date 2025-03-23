import React from 'react';

import { TableHead, TableRow } from '@mui/material';

import { styled } from '@mui/material/styles';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { ITableHeadColumn, ITableHeadProps } from '../DataTable.interface';

const StyledTableCell = styled(TableCell)(() => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#F0F1F2',
		color: '#69767B',
		fontSize: 14,
	},
}));

const DataTableHead: React.FunctionComponent<ITableHeadProps> = (
	props: ITableHeadProps
) => {
	const { columns } = props;
	return (
		<TableHead>
			<TableRow>
				{columns.map((column: ITableHeadColumn, index: number) => {
					const { title, defaultCell, tableCellProps, component, componentProps } =
						column;
					const CellChildComponent = component as any;
					const tableProps = tableCellProps || {};
					const CellComponent = defaultCell ? TableCell : StyledTableCell;
					return (
						<CellComponent key={`dt-head-col-${index}`} {...tableProps}>
							{component ? <CellChildComponent {...componentProps} /> : title}
						</CellComponent>
					);
				})}
			</TableRow>
		</TableHead>
	);
};

export default DataTableHead;
