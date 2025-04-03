import React, {useCallback, useState} from 'react';
import styles from './AutoCompleteFieldWrapper.module.scss';
import {IAutoCompleteFieldWrapperProps } from './AutoCompleteFieldWrapper.interface';
import AutoCompleteComponent from "../../../../shared/AutoCompleteComponent/AutoCompleteComponent";


export default function AutoCompleteFieldWrapper(props: IAutoCompleteFieldWrapperProps) {
	const {
		onSearch,
		onChange,
		items,
		disabled,
		label,
		placeholder,
		errorText,
		fieldKey,
		selectedPayload,
		isAsync,
	} = props;

	const onChangeTrigger = (inputId: string, value: string) => {
		if (onSearch) onSearch(value);
	};

	const onSelectSelection = (value: any) => {
		if(onChange) onChange(fieldKey, value);
	};

	const defaultValue = selectedPayload ? selectedPayload[fieldKey] : null;

	return (
		<div className={styles.dropdownWrapper}>
			<AutoCompleteComponent
				isDisabled={disabled}
				label={label}
				defaultValue={defaultValue}
				options={items || []}
				placeholder={placeholder}
				isAsync={isAsync}
				onChange={onChangeTrigger}
				onSelection={onSelectSelection}
			/>
		</div>
	);
}
