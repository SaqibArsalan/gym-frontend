import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { TextFieldProps, Grid, InputAdornment, IconButton, MenuItem, FormControl } from "@mui/material";
import { StyledSelectField } from './TableSearchBar.styles';
import { IFilterDropdown, IFilterOption } from './TableSearchBar.interface';

export const FilterDropdown = (props: IFilterDropdown) => {
	const { defaultValue, onFilterChange, options } = props;
	const [value, setValue] = useState<string>(defaultValue ? defaultValue.value : "");
	const handleChange = (event: any) => {
		const changedValue = event.target.value as string;
		setValue(changedValue);
		if(onFilterChange) {
			const option = options.find((item: IFilterOption) => item.value === changedValue);
			if(option) {
				onFilterChange(option);
			}
		}
	  };
	return (
		<FormControl fullWidth>
			<StyledSelectField
				value={value}
				onChange={handleChange}
			>
				{options ? options.map((item: any, index: number) => <MenuItem key={index} value={item.value}>{item.name}</MenuItem>): null}
			</StyledSelectField>
		</FormControl>
	);
}


export const applyFilterHOC = (TextField: React.FunctionComponent<TextFieldProps>) => 
	(props: {textFieldProps: TextFieldProps, filterProps: IFilterDropdown}) => {
	const {textFieldProps, filterProps} = props;
	return (
		<Grid
			container
			className='table-search-bar-container'
			columns={12}
			spacing={0}
		>
				<Grid item sm={9} md={9} lg={10} xs={12}>
					<TextField
						{...textFieldProps}
					/>
				</Grid>
				<Grid className='filter-dropdown' item sm={3} lg={2} md={3} xs={12}>
					<FilterDropdown {...filterProps} />
				</Grid>
		</Grid>
	);
}

export const InputAdornmentConfiguration = (
	showRemove: boolean, 
	onRemoveIconClick: React.MouseEventHandler<HTMLAnchorElement>, 
	removeIcon?: any, 
	searchIcon?: any
) => {
	const RemoveIconElement: any = removeIcon || ClearIcon;
	const SearchIconElement: any = searchIcon || SearchIcon;
return {
	startAdornment: (
		<InputAdornment position='start'>
			<SearchIconElement />
		</InputAdornment>
	),
	endAdornment:
		showRemove ? (
			<>
				<InputAdornment position='end'>
					<IconButton
						id='remove-button'
						aria-label='remove value'
						component='span'
						onClick={onRemoveIconClick}
					>
						<RemoveIconElement />
					</IconButton>
				</InputAdornment>
			</>
		) : null,
}};