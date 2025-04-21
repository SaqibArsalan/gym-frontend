import { IAuthInitialState } from 'redux/components/Auth';
import React from "react";
import {IFieldWrapper} from "../../../shared/FieldWrapper/FieldWrapper.interface";
import {IAutoCompleteFieldWrapperProps} from "./AutoCompleteFieldWrapper/AutoCompleteFieldWrapper.interface";
import {IMultiSelectFieldWrapperProps} from "./MultiSelectFieldWrapper/MultiSelectFieldWrapper.interface";
import {ITextFieldWrapperProps} from "./TextFieldWrapper/TextFieldWrapper.interface";
import {IDateFieldWrapperProps} from "./DateFieldWrapper/DateFieldWrapper.interface";
import {IStepComponentProps} from "../SessionCreateOrUpdate.interface";
import {IDropdownResponse} from "../../../../redux/components/Staff";
import {IDateTimeFieldWrapperProps} from "./DateTimeFieldWrapper/DateTimeFieldWrapper.interface";
import {ICreateOrUpdateSession} from "../../../../redux/components/Session";

export interface ISessionInfoProps extends IStepComponentProps {
	staffByNameList: IDropdownResponse[];
	sessionCreationPayload: ICreateOrUpdateSession;
	classListForDropdown: IDropdownResponse[];
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

export type ISessionCreationFieldComponentProps =
	| IAutoCompleteFieldWrapperProps
	| IMultiSelectFieldWrapperProps
	| ITextFieldWrapperProps
	| IDateFieldWrapperProps
 	| IDateTimeFieldWrapperProps;

export interface ISessionCreationField {
	wrapperProps: IFieldWrapper;
	components?: Array<React.FunctionComponent<any>>;
	componentProps?: Array<ISessionCreationFieldComponentProps>;
}

export interface IStaffCreation {
	userId: string;
	name: string;
	salary: number;
	hireDate: string;
}
