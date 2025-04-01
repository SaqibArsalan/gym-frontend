import React from 'react';
import SelectionComponent from 'components/shared/SelectionComponent/SelectionComponent';
import styles from './SelectFieldWrapper.module.scss';
import { ISelectFieldWrapperProps } from './SelectFieldWrapper.interface';

export default function SelectFieldWrapper(props: ISelectFieldWrapperProps) {
	const {
		onChange,
		items,
		disabled,
		label,
		placeholder,
		errorText,
		fieldKey,
		selectedPayload,
	} = props;

	const onChangeTrigger = (id: string) => (value: string) => {
		if (onChange) onChange(id, value);
	};

	const onSelectSelection = (value: any) => {
		onChangeTrigger(fieldKey)(value[fieldKey]);
	};

	const defaultValue = selectedPayload ? selectedPayload[fieldKey] : null;

	return (
		<div className={styles.dropdownWrapper}>
			<SelectionComponent
				keyValue={fieldKey}
				disabled={disabled}
				label={label}
				defaultValue={defaultValue}
				errorText={errorText}
				values={items || []}
				placeholder={placeholder}
				onChange={onSelectSelection}
			/>
		</div>
	);
}
