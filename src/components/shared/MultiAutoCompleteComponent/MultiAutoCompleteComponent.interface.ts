export interface IMultiAutoCompleteComponentProps {
	options?: any[];
	label?: string;
	placeholder?: string;
	defaultValue?: any;
	errorText?: string;
	itemDisplayKey?: string;
	isAsync?: boolean;
	isDisabled?: boolean;
	enableSearchIcon?: boolean;
	removeValueAfterSelection?: boolean;
	onInputChange?: (value: any) => void;
	onSelection?: (selectedItem: any[]) => void;
	textFieldProps?: any;
	renderOptionGenerator?: (
		props: any,
		option: any,
		options: { selected: boolean }
	) => void;
}
