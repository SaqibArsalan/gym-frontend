import React from 'react';

import {
	TableContainer,
	Paper,
	Table,
	TableFooter,
	TableRow,
} from '@mui/material';

import { IDataTableProps } from './DataTable.interface';
import DataTableHead from './DataTableHead/DataTableHead';
import DataTableBody from './DataTableBody/DataTableBody';
import CardLabel from '../CardLabel/CardLabel';

import './DataTable.scss';
import TableSearchBar from '../TableSearchBar/TableSearchBar';

/* eslint-disable */
const DataTable: React.FunctionComponent<IDataTableProps> = (
	props: IDataTableProps
) => {
	const {
		tableStyles,
		isStickyHeader,
		header,
		body,
		tableLabel,
		showSearchBar,
		searchBarProps,
		containerStyles,
		showLoadMore,
		onLoadMore,
	} = props;

	// sx: {
	// 	width: '50%',
	// },

	return (
		<Paper className='data-table-paper' variant='outlined'>
			<TableContainer sx={containerStyles || {}}>
				{tableLabel ? <CardLabel label={tableLabel} /> : null}
				{showSearchBar ? <TableSearchBar {...(searchBarProps || {})} /> : null}
				<Table sx={tableStyles || {}} stickyHeader={isStickyHeader}>
					<DataTableHead {...header} />
					<DataTableBody {...body} />
				</Table>
				{showLoadMore ? (
					<div className='load-more' onClick={onLoadMore}>
						Load More
					</div>
				) : null}
			</TableContainer>
		</Paper>
	);
};

export default DataTable;
