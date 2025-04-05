import { IAuthInitialState } from 'redux/components/Auth';
import React from "react";
import {IFieldWrapper} from "../../../shared/FieldWrapper/FieldWrapper.interface";
import {IAutoCompleteFieldWrapperProps} from "./AutoCompleteFieldWrapper/AutoCompleteFieldWrapper.interface";
import {IMultiSelectFieldWrapperProps} from "./MultiSelectFieldWrapper/MultiSelectFieldWrapper.interface";
import {ITextFieldWrapperProps} from "./TextFieldWrapper/TextFieldWrapper.interface";
import {IDateFieldWrapperProps} from "./DateFieldWrapper/DateFieldWrapper.interface";
import {IStepComponentProps} from "../UserCreateOrUpdate.interface";
import {IUserCreateOrUpdate, IUsersDropdown} from "../../../../redux/components/User";

export interface IUserInfoProps extends IStepComponentProps {
	userCreationPayload: IUserCreateOrUpdate;
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

export type IUserCreationFieldComponentProps =
	| IAutoCompleteFieldWrapperProps
	| IMultiSelectFieldWrapperProps
	| ITextFieldWrapperProps
	| IDateFieldWrapperProps;

export interface IUserCreationField {
	wrapperProps: IFieldWrapper;
	components?: Array<React.FunctionComponent<any>>;
	componentProps?: Array<IUserCreationFieldComponentProps>;
}

export interface IStaffCreation {
	userId: string;
	name: string;
	salary: number;
	hireDate: string;
}
