import { IChildWrappedProps } from 'components/shared/FieldWrapper/FieldWrapper.interface';

export interface IDateFieldWrapperProps extends IChildWrappedProps {
	onChange?: (id: string, value: string) => void;
}
