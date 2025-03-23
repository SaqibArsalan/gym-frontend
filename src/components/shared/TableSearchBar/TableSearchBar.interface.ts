// Types

import React from 'react';

/* eslint-disable-next-line */
type onChange = (value: string, filterOption?: any) => void;
/* eslint-disable-next-line */
type PlaceholderFunction = () => void;

// Table Search Bar interface

export interface ITableSearchBarProps {
	enableFilter?: boolean;
	filterOptions?: IFilterOption[];
	defaultSelectedFilterOption?: IFilterOption;
	onFilterChange?: (item: any) => void;
	defaultValue?: string;
	placeholder?: string;
	onChange?: onChange;
	searchIcon?: any;
	showAddButton?: boolean;
	onAddButtonClick?: PlaceholderFunction;
	removeIcon?: any;
	showRemoveIcon?: boolean;
	onRemove?: PlaceholderFunction;
	customInputComponent?: React.FC<any>;
	customInputComponentProps?: any;
}


export interface IFilterDropdown {
	options: IFilterOption[]; defaultValue: any; onFilterChange: (option: IFilterOption) => void;
}

export interface IFilterOption {
	name: string;
	value: string;
}