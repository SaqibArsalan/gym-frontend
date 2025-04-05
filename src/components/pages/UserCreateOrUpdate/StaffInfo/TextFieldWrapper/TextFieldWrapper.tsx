import React, { useState } from 'react';
import EditableTextField from 'components/shared/EditableTextField/EditableTextField';
import styles from './TextFieldWrapper.module.scss';
import { ITextFieldWrapperProps } from './TextFieldWrapper.interface';

export default function TextFieldWrapper(props: ITextFieldWrapperProps) {
	const {
		onChange,
		label,
		placeholder,
		disabled,
		errorText,
		fieldKey,
		selectedPayload,
	} = props;

	const defaultValue = selectedPayload ? (selectedPayload as any)[fieldKey] : '';
	const [value, setValue] = useState<string>(defaultValue);
	const onChangeTrigger = (id: string) => (e: any) => {
		const newValue = e.target.value;
		if (onChange) {
			onChange(id, newValue);
		}
		setValue(newValue);
	};

	return (
		<div className={styles.dropdownWrapper}>
			<EditableTextField
				id={fieldKey}
				label={label}
				placeholder={placeholder}
				value={value}
				onChange={onChangeTrigger(fieldKey)}
				error={!!errorText}
				helperText={errorText}
				isDisabled={disabled}
			/>
		</div>
	);
}
