import { IAuthInitialState } from 'redux/components/Auth';
import React from "react";
import {IFieldWrapper} from "../../../shared/FieldWrapper/FieldWrapper.interface";
import {IAutoCompleteFieldWrapperProps} from "./AutoCompleteFieldWrapper/AutoCompleteFieldWrapper.interface";
import {IMultiSelectFieldWrapperProps} from "./MultiSelectFieldWrapper/MultiSelectFieldWrapper.interface";
import {ITextFieldWrapperProps} from "./TextFieldWrapper/TextFieldWrapper.interface";
import {IDateFieldWrapperProps} from "./DateFieldWrapper/DateFieldWrapper.interface";
import {IStepComponentProps} from "../StaffCreateOrUpdate.interface";
import {IUsersDropdown} from "../../../../redux/components/User";

export interface IStaffInfoProps extends IStepComponentProps {
	usersByNameList: IUsersDropdown[];
	staffCreationPayload: IStaffCreation;
}

export interface ItableColumnsMap {
	headerTitle: string;
	valueKey: string;
}

export interface IStep {
	id: number;
	title?: string;
	component: React.FC<any>;
	componentProps?: any;
}

export type IInvoiceCreationFieldComponentProps =
	| IAutoCompleteFieldWrapperProps
	| IMultiSelectFieldWrapperProps
	| ITextFieldWrapperProps
	| IDateFieldWrapperProps;

export interface IStaffCreationField {
	wrapperProps: IFieldWrapper;
	components?: Array<React.FunctionComponent<any>>;
	componentProps?: Array<IInvoiceCreationFieldComponentProps>;
}

export interface IStaffCreation {
	userId: string;
	name: string;
	salary: number;
	hireDate: string;
}
