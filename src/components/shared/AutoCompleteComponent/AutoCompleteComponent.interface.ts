
type onSelectionWithFieldKey = (fieldKey: string, selectedItem: any) => void;

export interface IAutoCompleteComponentProps {
	key?: string;
	options?: any[];
	label?: string;
	placeholder?: string;
	defaultValue?: any;
	itemDisplayKey?: string;
	isAsync?: boolean;
	fieldKey?: string;
	isDisabled?: boolean;
	enableSearchIcon?: boolean;
	removeValueAfterSelection?: boolean;
	onChange?: (id: string, value: string) => void;
	onSelection?: onSelectionWithFieldKey;
	textFieldProps?: any;
	renderOptionGenerator?: (
		props: any,
		option: any,
		options: { selected: boolean }
	) => void;
}
