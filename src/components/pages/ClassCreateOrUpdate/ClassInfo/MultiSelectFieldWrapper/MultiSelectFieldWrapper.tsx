import React from 'react';
import styles from './MultiSelectFieldWrapper.module.scss';
import { IMultiSelectFieldWrapperProps } from './MultiSelectFieldWrapper.interface';
import MultiAutoCompleteComponent from "../../../../shared/MultiAutoCompleteComponent/MultiAutoCompleteComponent";

export default function MultiSelectFieldWrapper(
	props: IMultiSelectFieldWrapperProps
) {
	const {
		onChange,
		label,
		items,
		disabled,
		errorText,
		fieldKey,
		selectedPayload,
		returnKey,
	} = props;

	const onSelection = (values: any[]) => {
		if (onChange) {
			const returnValues = returnKey
				? values.map(item => item[returnKey])
				: values;
			onChange(fieldKey, returnValues);
		}
	};

	const defaultValue = selectedPayload ? selectedPayload[fieldKey] : null;

	return (
		<div className={styles.dropdownWrapper}>
			<MultiAutoCompleteComponent
				label={label}
				options={items || []}
				defaultValue={defaultValue}
				onSelection={onSelection}
				errorText={errorText || ''}
				isDisabled={disabled}
			/>
		</div>
	);
}
