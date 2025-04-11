import { IChildWrappedProps } from 'components/shared/FieldWrapper/FieldWrapper.interface';

export interface IDateTimeFieldWrapperProps extends IChildWrappedProps {
	onChange?: (id: string, value: string) => void;
}
