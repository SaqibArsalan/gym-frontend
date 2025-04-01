import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import {
	Autocomplete,
	CircularProgress,
	FormControl,
	FormLabel,
	InputAdornment,
	TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IAutoCompleteComponentProps } from './AutoCompleteComponent.interface';

const StyledTextField = styled(TextField)({
	width: '100%',
	'.MuiOutlinedInput-root': {
		padding: '4px',
		fontSize: '14px',
	},
});

export default function AutoCompleteComponent(
	props: IAutoCompleteComponentProps
) {
	const [open, setOpen] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const {
		key,
		label,
		placeholder,
		itemDisplayKey,
		options,
		defaultValue,
		onChange,
		onSelection,
		isAsync,
		enableSearchIcon,
		renderOptionGenerator,
		removeValueAfterSelection,
		textFieldProps,
		isDisabled,
		fieldKey
	} = props;

	useEffect(() => {
		if (isAsync) {
			setLoading(false);
		}
	}, [options]);

	const itemKey: string = itemDisplayKey || 'name';
	const [selectedValue, setSelectedValue] = useState<any>(defaultValue || null);
	const [filteredOptions, setFilteredOptions] = useState<any[] | null>(null);
	const renderValue = (option: any) => {

		if (!option || !Object.values(option).some(value => value)) return '';

		if (itemDisplayKey) {
			return `${option[itemDisplayKey]} (${option.name})`;
		}

		return option.name;
	};

	const onDropDownSelection = (e: any, value: any, reasons: string) => {

		if (onSelection && fieldKey) {
			onSelection(fieldKey, value);
		}
		setSelectedValue(!removeValueAfterSelection ? value : null);
	};

	const toggleOpen = () => {
		setOpen(!open);
	};

	const onInputChange = (e: any, value: string, reasons: string) => {
		if (value && reasons === 'input') {
			if (isAsync && onChange) {
				onChange(e.target.id, value);
				setLoading(true);
			} else if (options && options.length) {
				const filteredOptions = options.filter((option: any) =>
					option[itemKey].toLowerCase().startsWith(value.toLowerCase())
				);
				setFilteredOptions(filteredOptions);
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
		<FormControl fullWidth>
			{label ? (
				<FormLabel component='legend' sx={{ paddingBottom: '2px' }}>
					{label}
				</FormLabel>
			) : null}
			<Autocomplete
				id={fieldKey || 'autocomplete-component'}
				key={key}
				open={open}
				onOpen={toggleOpen}
				onClose={toggleOpen}
				isOptionEqualToValue={(option: any, selectedValue: any) =>
					option[itemKey] === selectedValue[itemKey]
				}
				getOptionLabel={renderValue}
				disabled={isDisabled}
				options={optionsToLoad}
				loading={loading}
				value={selectedValue}
				onChange={onDropDownSelection}
				onInputChange={onInputChange}
				renderInput={params => (
					<StyledTextField
						{...params}
						placeholder={placeholder}
						InputProps={{
							...params.InputProps,
							startAdornment: (
								<>
									{enableSearchIcon ? (
										<InputAdornment position='end'>
											<SearchIcon />
										</InputAdornment>
									) : null}
								</>
							),
							endAdornment: (
								<>
									{loading && isAsync ? (
										<CircularProgress color='inherit' size={20} />
									) : null}
									{params.InputProps.endAdornment}
								</>
							),
						}}
						{...textFieldProps}
					/>
				)}
				{...additionalProps}
			/>
		</FormControl>
	);
}
