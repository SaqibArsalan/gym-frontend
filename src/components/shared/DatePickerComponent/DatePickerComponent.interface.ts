export interface IDatePickerComponentProps {
	defaultValue?: string;
	dateFormat?: string;
	isDisabled?: boolean;
	onChange?: (value: string) => void;
	forceOpen?: boolean;
}
