import { IChildWrappedProps } from 'components/shared/FieldWrapper/FieldWrapper.interface';

export interface ISelectFieldWrapperProps extends IChildWrappedProps {
	onChange?: (id: string, value: string) => void;
	items: any[];
}
