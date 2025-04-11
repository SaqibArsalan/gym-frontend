import React from 'react';
import { FormControl, FormHelperText, FormLabel } from '@mui/material';
import styles from './DateTimeFieldWrapper.module.scss'; // reuse existing styles
import { IDateTimeFieldWrapperProps } from './DateTimeFieldWrapper.interface';
import DateTimePickerComponent from "../../../../shared/DateTimePickerComponent/DateTimePickerComponent";

export default function DateTimeFieldWrapper(props: IDateTimeFieldWrapperProps) {
	const { onChange, label, disabled, errorText, fieldKey, selectedPayload } = props;

	const onChangeTrigger = (id: string) => (value: string) => {
		if (onChange) onChange(id, value);
	};

	const defaultValue = selectedPayload ? selectedPayload[fieldKey] : null;

	return (
		<div className={styles.dropdownWrapper}>
			<FormControl fullWidth error={!!errorText}>
				<FormLabel component='legend'>{label}</FormLabel>
				<DateTimePickerComponent
					onChange={onChangeTrigger(fieldKey)}
					defaultValue={defaultValue}
					isDisabled={disabled}
				/>
				{errorText ? <FormHelperText>{errorText}</FormHelperText> : null}
			</FormControl>
		</div>
	);
}
