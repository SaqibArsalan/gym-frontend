import React from 'react';
import { FormControl, FormHelperText, FormLabel } from '@mui/material';
import DatePickerComponent from 'components/shared/DatePickerComponent/DatePickerComponent';
import styles from './DateFieldWrapper.module.scss';
import { IDateFieldWrapperProps } from './DateFieldWrapper.interface';

export default function DateFieldWrapper(props: IDateFieldWrapperProps) {
	const { onChange, label, disabled, errorText, fieldKey, selectedPayload } =
		props;

	const onChangeTrigger = (id: string) => (value: string) => {
		if (onChange) onChange(id, value);
	};

	const defaultValue = selectedPayload ? selectedPayload[fieldKey] : null;

	return (
		<div className={styles.dropdownWrapper}>
			<FormControl fullWidth error={!!errorText}>
				<FormLabel component='legend'>{label}</FormLabel>
				<DatePickerComponent
					onChange={onChangeTrigger(fieldKey)}
					defaultValue={defaultValue}
					isDisabled={disabled}
				/>
				{errorText ? <FormHelperText>{errorText}</FormHelperText> : null}
			</FormControl>
		</div>
	);
}
