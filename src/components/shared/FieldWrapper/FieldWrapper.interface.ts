export interface IFieldWrapper {
	containerColumns?: number;
	infoWidth?: number;
	heading: string;
	subHeading: string;
	fieldLabel?: string;
	fieldPlaceholder?: string;
	children?: React.ReactNode;
}

export interface IChildWrappedProps {
	disabled?: boolean;
	label?: string;
	placeholder?: string;
	errorText?: string;
	fieldKey: string;
	selectedPayload?: any;
}
