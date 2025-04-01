import React, { useState } from 'react';

import {
	FormControl,
	FormHelperText,
	FormLabel,
	MenuItem,
	OutlinedInput,
	Select,
} from '@mui/material';
import { ISelectionComponentProps } from './SelectionComponent.interface';

export default function SelectionComponent(props: ISelectionComponentProps) {
	const {
		id,
		label,
		placeholder,
		values,
		onChange,
		defaultValue,
		keyValue,
		itemDisplayKey,
		overrideSelectStyles,
		overrideInputStyles,
	} = props;
	const itemKey: string = itemDisplayKey || 'name';
	const [value, setValue] = useState<string>(defaultValue || '');

	const renderValue = (selected: string) => {
		if (!selected && placeholder) {
			return <span style={{ color: 'gray' }}>{placeholder}</span>;
		}
		return selected;
	};

	const onSelection = (event: any) => {
		if (event && event.target) {
			const currentValue = (event.target as HTMLInputElement).value;

			if (onChange && keyValue) {
				onChange({
					[keyValue]: currentValue,
				});
			} else if (onChange) {
				onChange(currentValue);
			}
			setValue(currentValue);
		}
	};

	return (
		<FormControl fullWidth>
			{label ? <FormLabel component='legend'>{label}</FormLabel> : null}
			<Select
				id={id || 'selection-component'}
				input={<OutlinedInput sx={overrideInputStyles || {}} />}
				renderValue={renderValue}
				displayEmpty
				value={value}
				sx={overrideSelectStyles || {}}
				data-testid='selection-test-component'
				onChange={onSelection}
			>
				{values && values.length
					? values.map((item: any, index: number) => (
							<MenuItem key={`selection-value-${index}`} value={item.id}>
								{item[itemKey]}
							</MenuItem>
					  ))
					: []}
			</Select>
		</FormControl>
	);
}
