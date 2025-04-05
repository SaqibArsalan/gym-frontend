import { IChildWrappedProps } from 'components/shared/FieldWrapper/FieldWrapper.interface';

export interface ITextFieldWrapperProps extends IChildWrappedProps {
	onChange?: (id: string, value: string) => void;
}
