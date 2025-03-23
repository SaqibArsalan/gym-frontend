import React, { useState } from 'react';

import { Paper, TextFieldProps, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import { IFilterDropdown, IFilterOption, ITableSearchBarProps } from './TableSearchBar.interface';

import {
	StyledTextField,
	StyledToolbar,
	CustomFab,
} from './TableSearchBar.styles';
import './TableSearchBar.scss';
import { applyFilterHOC, InputAdornmentConfiguration } from './TableSearchBar.configs';

const FlteredTextFieldComponent = applyFilterHOC(StyledTextField as React.FC<TextFieldProps>);

const TableSearchBar = (props: ITableSearchBarProps) => {
	const {
		customInputComponent,
		customInputComponentProps,
		showAddButton,
		onAddButtonClick,
		onRemove,
		onChange,
		showRemoveIcon,
		removeIcon,
		searchIcon,
		placeholder,
		defaultValue,
		enableFilter,
		onFilterChange,
		filterOptions,
		defaultSelectedFilterOption
	} = props;

	const [value, setValue] = useState<string>(defaultValue || '');
	const [filterOption, setFilterOption] = useState<IFilterOption | null>(defaultSelectedFilterOption || null);

	const onValueChange = (e: any) => {
		if (e.currentTarget) {
			const text = e.currentTarget.value || '';
			if (onChange) {
				onChange(text, filterOption);
			}
			setValue(text);
		}
	};

	const onRemoveIconClick = () => {
		if (onRemove) {
			onRemove();
		}
		setValue('');
	};

	const onFilterSelection = (filterOption: IFilterOption) => {
		if(onFilterChange) {
			onFilterChange(filterOption);
		}
		if (onChange && value) {
			onChange(value, filterOption);
		}
		setFilterOption(filterOption);
	}

	const inputProps = InputAdornmentConfiguration(
		Boolean(showRemoveIcon && value), 
		onRemoveIconClick, 
		removeIcon, 
		searchIcon
	);
	
	const placeholderValue = enableFilter ? `Search By ${filterOption?.name}` : placeholder;

	const defaultTextFieldProps: TextFieldProps = {
		variant:'outlined',
		id:'search-text',
		placeholder: placeholderValue,
		InputProps: inputProps,
		onChange: onValueChange,
		value,
	};

	const filterProps: IFilterDropdown = {
		options: filterOptions as any,
		onFilterChange: onFilterSelection,
		defaultValue: defaultSelectedFilterOption
	};

	const DefaultFieldWrapper = enableFilter ? 
		FlteredTextFieldComponent
	: StyledTextField;

	const defaultFieldProps = enableFilter ? {
		textFieldProps: defaultTextFieldProps, filterProps
	}: defaultTextFieldProps;

	const ComponentToRender = customInputComponent;

	return (
		<Paper variant='outlined' square>
			<StyledToolbar>
				<div className='toolbar-content-wrapper'>
					<Typography component='div' className='textfield-wrapper'>
						{ComponentToRender ? (
							<ComponentToRender {...customInputComponentProps} />
						) : (
							<DefaultFieldWrapper {...defaultFieldProps as any} />
						)}
					</Typography>
					{showAddButton ? (
						<Typography component='div' className='add-button-wrapper'>
							<CustomFab onClick={onAddButtonClick} color='primary' aria-label='add'>
								<AddIcon />
							</CustomFab>
						</Typography>
					) : null}
				</div>
			</StyledToolbar>
		</Paper>
	);
};

export default TableSearchBar;
