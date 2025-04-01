import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import {
	Autocomplete,
	Chip,
	FormControl,
	FormLabel,
	TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IMultiAutoCompleteComponentProps } from './MultiAutoCompleteComponent.interface';
import styles from './MultiAutoCompleteComponent.module.scss';

const StyledTextField = styled(TextField)({
	width: '100%',
	'.MuiOutlinedInput-root': {
		padding: '4px',
		fontSize: '14px',
	},
});

export default function MultiAutoCompleteComponent(
	props: IMultiAutoCompleteComponentProps
) {
	const [open, setOpen] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const {
		label,
		errorText,
		placeholder,
		itemDisplayKey,
		options,
		defaultValue,
		onInputChange,
		onSelection,
		isAsync,
		renderOptionGenerator,
		textFieldProps,
		isDisabled,
	} = props;

	useEffect(() => {
		if (isAsync) {
			setLoading(false);
		}
	}, [options]);

	const itemKey: string = itemDisplayKey || 'name';
	const [selectedValues, setSelectedValues] = useState<any>(defaultValue || []);
	const [filteredOptions, setFilteredOptions] = useState<any[] | null>(null);

	const renderValue = (option: any) => option[itemKey];

	const onDropDownSelection = (_e: any, value: any[], _reasons: any) => {
		if (onSelection) {
			onSelection(value);
		}
		setSelectedValues(value || []);
	};

	const toggleOpen = () => {
		setOpen(!open);
	};

	const onInputChangeTrigger = (_e: any, value: string, reasons: string) => {
		if (value && reasons === 'input') {
			if (isAsync && onInputChange) {
				onInputChange(value);
				setLoading(true);
			} else if (options && options.length) {
				const filteredOptionValues = options.filter((option: any) =>
					option[itemKey].toLowerCase().startsWith(value.toLowerCase())
				);
				setFilteredOptions(filteredOptionValues);
			}
		}
		if (!value && filteredOptions && !isAsync) {
			setFilteredOptions(null);
		}
	};

	const optionsToLoad = filteredOptions || options || [];
	const additionalProps: any = {};

	if (renderOptionGenerator) {
		additionalProps.renderOption = renderOptionGenerator;
	}
	return (
		<FormControl fullWidth className={styles.multiAutocompleteWrapper}>
			{label ? (
				<FormLabel component='legend' sx={{ paddingBottom: '2px' }}>
					{label}
				</FormLabel>
			) : null}
			<Autocomplete
				multiple
				open={open}
				onOpen={toggleOpen}
				onClose={toggleOpen}
				getOptionLabel={renderValue}
				disabled={isDisabled}
				options={optionsToLoad}
				loading={loading}
				value={selectedValues}
				filterSelectedOptions
				onChange={onDropDownSelection}
				onInputChange={onInputChangeTrigger}
				renderTags={(value: readonly any[], getTagProps) =>
					value.map((option: any, index: number) => (
						<Chip
							variant='outlined'
							label={option.name}
							{...getTagProps({ index })}
							deleteIcon={<CloseIcon />}
						/>
					))
				}
				renderInput={params => (
					<StyledTextField
						{...params}
						placeholder={placeholder}
						{...textFieldProps}
						error={!!errorText}
						helperText={errorText || ''}
					/>
				)}
				{...additionalProps}
			/>
		</FormControl>
	);
}
