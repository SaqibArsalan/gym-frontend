export interface ISelectionComponentProps {
	id?: string;
	keyValue?: string;
	label?: string;
	placeholder?: string;
	defaultValue?: string;
	values?: any[];
	disabled?: boolean;
	itemDisplayKey?: string;
	errorText?: string;
	onChange?: (value: { [key: string]: string } | string) => void;
	overrideInputStyles?: any;
	overrideSelectStyles?: any;
}
