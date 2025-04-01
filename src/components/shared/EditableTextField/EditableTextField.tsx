import { FormControl, FormLabel, styled, TextField } from '@mui/material';
import React from 'react';
import NumberField from '../NumberField/NumberField';
import { IEditableTextFieldProps } from './EditableTextField.interface';

const StyledTextField = styled(TextField)({
	width: '100%',
	'.MuiOutlinedInput-root': {
		fontSize: '14px',
	},
});

function EditableTextField(props: IEditableTextFieldProps) {
	const {
		label,
		placeholder,
		id,
		onChange,
		isDisabled,
		defaultValue,
		isNumeric,
		numericType,
		value,
		error,
		helperText,
	} = props;

	return (
		<FormControl fullWidth>
			{label ? (
				<FormLabel sx={{ marginBottom: '6px' }} component='legend'>
					{label}
				</FormLabel>
			) : null}
			{isNumeric ? (
				<NumberField
					textFieldStyles={{ backgroundColor: isDisabled ? '#F5F7FA' : '#fff' }}
					placeholder={placeholder}
					disabled={isDisabled}
					onChange={onChange}
					parentValue={value as number}
					type={numericType}
					errorText={error ? helperText || '' : ''}
					defaultValue={defaultValue as any}
				/>
			) : (
				<StyledTextField
					error={error}
					helperText={helperText || ''}
					style={{ backgroundColor: isDisabled ? '#F5F7FA' : '#fff' }}
					disabled={isDisabled}
					placeholder={placeholder}
					id={id}
					onChange={onChange}
					defaultValue={defaultValue}
					value={value}
				/>
			)}
		</FormControl>
	);
}

export default EditableTextField;
