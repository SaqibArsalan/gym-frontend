import { IChildWrappedProps } from 'components/shared/FieldWrapper/FieldWrapper.interface';

export interface IMultiSelectFieldWrapperProps extends IChildWrappedProps {
	onChange?: (id: string, value: string[]) => void;
	items?: any[];
	defaultValue?: any[];
	returnKey?: string;
}
