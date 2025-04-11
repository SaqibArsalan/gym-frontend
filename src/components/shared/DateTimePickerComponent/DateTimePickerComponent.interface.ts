export interface IDateTimePickerComponentProps {
	defaultValue?: string | null;
	onChange: (value: string) => void;
	dateFormat?: string;
	isDisabled?: boolean;
	forceOpen?: boolean;
}