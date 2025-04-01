import * as React from 'react';
import { styled } from '@mui/system';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { IDatePickerComponentProps } from './DatePickerComponent.interface';

export const StyledTextField  = (styled(TextField)({
	width: '100%',
	input: {
		padding: '12px 10px',
	},
}) as React.FC<TextFieldProps>);

const defaultDateFormat: string = 'YYYY-MM-DD';

export default function DatePickerComponent(props: IDatePickerComponentProps) {
	const { defaultValue, onChange, dateFormat, isDisabled, forceOpen } = props;
	const [value, setValue] = React.useState<Dayjs | null>(
		defaultValue ? dayjs(defaultValue, defaultDateFormat) : null
	);
	const [openDialog, setDialogStatus] = React.useState(false);
	const handleChange = (newValue: any) => {
		if (onChange) {
			const formattedDate = dayjs(newValue).format(
				dateFormat || defaultDateFormat
			);
			onChange(formattedDate);
		}
		setValue(newValue);
	};

	const toggleDialogStatus = () => {
		setDialogStatus(!openDialog);
	};

	const additionalProps: any = {};
	if (forceOpen) {
		additionalProps.open = true;
	}
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				open={openDialog}
				value={value}
				onClose={() => setDialogStatus(false)}
				minDate={dayjs().startOf("day")}
				onChange={handleChange}
				disabled={isDisabled}
				inputFormat={dateFormat || defaultDateFormat}
				renderInput={(params: TextFieldProps) => (
					<StyledTextField onClick={toggleDialogStatus} {...params} error={false} />
				)}
				{...additionalProps}
			/>
		</LocalizationProvider>
	);
}
