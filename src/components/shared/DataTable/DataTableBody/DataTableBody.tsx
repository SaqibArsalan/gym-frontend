import React from 'react';

import { TableBody } from '@mui/material';

import { ITableBodyProps, ITableBodyRow } from '../DataTable.interface';
import DataTableBodyRow from './DataTableBodyRow/DataTableBodyRow';

const DataTableBody: React.FunctionComponent<ITableBodyProps> = (
	props: ITableBodyProps
) => {
	const { rows } = props;
	return (
		<TableBody>
			{rows.map((row: ITableBodyRow, index: number) => (
				<DataTableBodyRow key={`dt-row-${index}`} rowIndex={index} {...row} />
			))}
		</TableBody>
	);
};

export default DataTableBody;
