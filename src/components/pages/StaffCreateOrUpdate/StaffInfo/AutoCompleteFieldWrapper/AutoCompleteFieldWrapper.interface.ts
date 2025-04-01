import { IChildWrappedProps } from 'components/shared/FieldWrapper/FieldWrapper.interface';

export interface IAutoCompleteFieldWrapperProps extends IChildWrappedProps {
	onChange?: (id: string, value: string) => void;
	onSearch?: (text: string) => void;
	items: any[];
	isAsync?: boolean;
}
