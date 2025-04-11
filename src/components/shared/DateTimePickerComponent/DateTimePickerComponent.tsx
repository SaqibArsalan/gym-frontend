import * as React from 'react';
import { styled } from '@mui/system';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {IDateTimePickerComponentProps} from "./DateTimePickerComponent.interface";

export const StyledTextField = styled(TextField)({
	width: '100%',
	input: {
		padding: '12px 10px',
	},
}) as React.FC<TextFieldProps>;

const defaultDateTimeFormat = 'YYYY-MM-DDTHH:mm';

export default function DateTimePickerComponent(props: IDateTimePickerComponentProps) {
	const { defaultValue, onChange, dateFormat, isDisabled, forceOpen } = props;
	const [value, setValue] = React.useState<Dayjs | null>(
		defaultValue ? dayjs(defaultValue) : null
	);
	const [openDialog, setDialogStatus] = React.useState(false);

	const toggleDialogStatus = () => {
		setDialogStatus(!openDialog);
	};

	const handleChange = (newValue: Dayjs | null) => {
		if (onChange && newValue) {
			onChange(dayjs(newValue).format(dateFormat || defaultDateTimeFormat));
		}
		setValue(newValue);
	};

	const additionalProps: any = {};

	if (forceOpen) {
		additionalProps.open = true;
	}

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DateTimePicker
				value={value}
				onChange={handleChange}
				disabled={isDisabled}
				open={forceOpen ?? openDialog}
				onClose={() => setDialogStatus(false)}
				slotProps={{
					textField: {
						onClick: toggleDialogStatus,
						error: false,
						fullWidth: true,
						sx: {
							width: '100%',
							'& .MuiInputBase-input': {
								padding: '12px 10px',
							},
						},
					},
				}}
				{...additionalProps}
			/>
		</LocalizationProvider>
	);
}
