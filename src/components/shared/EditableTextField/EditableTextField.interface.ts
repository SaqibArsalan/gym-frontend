import { NUMBER_FIELD_TYPE } from '../NumberField/NumberField.configs';

export interface IEditableTextFieldProps {
	id?: string;
	label?: string;
	placeholder?: string;
	isDisabled?: boolean;
	onChange?: (value: any) => void;
	onSelection?: (selectedItem: any) => void;
	textFieldProps?: any;
	renderOptionGenerator?: (
		props: any,
		option: any,
		options: { selected: boolean }
	) => void;
	defaultValue?: string;
	isNumeric?: boolean;
	numericType?: NUMBER_FIELD_TYPE;
	value?: number | string | null;
	error?: boolean;
	helperText?: string;
}
