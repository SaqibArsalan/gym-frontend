import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NUMBER_FIELD_TYPE, regexMatch } from './NumberField.configs';
import {validateValueBasedOnType} from "./NumberField.helpers";
/* eslint-disable */
interface INumberFieldProps {
	defaultValue?: number;
	onChange?: (value: string) => void;
	itemData?: any;
	type?: NUMBER_FIELD_TYPE;
	parentValue?: number;
	placeholder?: string;
	textFieldStyles?: any;
	disabled?: boolean;
	errorText?: string;
}

function NumberField(props: INumberFieldProps) {
	const {
		defaultValue,
		type,
		placeholder,
		textFieldStyles,
		onChange,
		disabled,
		errorText,
		parentValue,
	} = props;
	const defaultType = type || NUMBER_FIELD_TYPE.NUMERIC;
	const [currentValue, setCurrentValue] = useState<string>(
		`${defaultValue || 0}`
	);

	useEffect(() => {
		if (parentValue !== undefined) {
			const valueInString = parentValue.toString();
			const isValid = validateValueBasedOnType(valueInString, defaultType);
			if (isValid) setCurrentValue(valueInString);
		}
	}, [parentValue]);

	const handleChange = (event: any) => {
		const rawValue = event.target.value;
		 const isValid = validateValueBasedOnType(rawValue, defaultType);
		 if (isValid) {

		setCurrentValue(rawValue);
			if (onChange) {
				onChange(rawValue);
			}
		}
	};

	const handleFocus = () => {
		if (currentValue === '0') {
			setCurrentValue('');
		}
	};

	const handleBlur = () => {
		if (!currentValue) {
			setCurrentValue('0');
		}
	};

	return (
		<TextField
			value={currentValue}
			onChange={handleChange}
			onBlur={handleBlur}
			onFocus={handleFocus}
			placeholder={placeholder}
			sx={textFieldStyles || {}}
			disabled={disabled}
			error={!!errorText}
			helperText={errorText || ''}
			inputProps={{ inputMode: defaultType as any }}
		/>
	);
}

export default NumberField;
