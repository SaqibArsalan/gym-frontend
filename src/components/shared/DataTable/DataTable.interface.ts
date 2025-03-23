import { TableCellProps } from '@mui/material';
import React from 'react';
import { ITableSearchBarProps } from '../TableSearchBar/TableSearchBar.interface';

// Types

/* eslint-disable-next-line */
type OnRowClick = (value: ITableBodyRow) => void;
/* eslint-disable-next-line */
type OnRowColumnClick = (value: ITableBodyRowColumn) => void;

// Data table interface

export interface IDataTableProps {
	header: ITableHeadProps;
	body: ITableBodyProps;
	customFooter?: any;
	tableStyles?: Object;
	isBorderless?: boolean;
	isStriped?: boolean;
	isStickyHeader?: boolean;
	tableLabel?: string;
	showSearchBar?: boolean;
	searchBarProps?: ITableSearchBarProps;
	containerStyles?: any;
	showLoadMore?: boolean;
	onLoadMore?: () => void;
}

// Table Head Interface

export interface ITableHeadProps {
	columns: ITableHeadColumn[];
}

export interface ITableHeadColumn {
	title?: string;
	defaultCell?: boolean;
	component?: React.Component<any> | React.FunctionComponent<any>;
	componentProps?: any;
	tableCellProps?: TableCellProps;
}

// Table Body Interface

export interface ITableBodyProps {
	rows: ITableBodyRow[];
	bodyStyles?: Object;
}

export interface ITableBodyRow {
	rowIndex?: number;
	onRowClick?: OnRowClick;
	rowStyles?: Object;
	columns: ITableBodyRowColumn[];
}

export interface ITableBodyRowColumn {
	columnIndex?: number;
	onRowColumnClick?: OnRowColumnClick;
	text?: string;
	component?: React.Component<any> | React.FunctionComponent<any>;
	componentProps?: any;
	defaultCell?: boolean;
	tableCellProps?: TableCellProps;
}
