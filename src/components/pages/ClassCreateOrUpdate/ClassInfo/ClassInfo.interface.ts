import { IAuthInitialState } from 'redux/components/Auth';
import React from "react";
import {IFieldWrapper} from "../../../shared/FieldWrapper/FieldWrapper.interface";
import {IAutoCompleteFieldWrapperProps} from "./AutoCompleteFieldWrapper/AutoCompleteFieldWrapper.interface";
import {IMultiSelectFieldWrapperProps} from "./MultiSelectFieldWrapper/MultiSelectFieldWrapper.interface";
import {ITextFieldWrapperProps} from "./TextFieldWrapper/TextFieldWrapper.interface";
import {IDateFieldWrapperProps} from "./DateFieldWrapper/DateFieldWrapper.interface";
import {IStepComponentProps} from "../ClassCreateOrUpdate.interface";
import {IUsersDropdown} from "../../../../redux/components/User";
import {ICreateOrUpdateClass} from "../../../../redux/components/Gym Class";
import {IDropdownResponse} from "../../../../redux/components/Staff";

export interface IClassInfoProps extends IStepComponentProps {
	staffByNameList: IDropdownResponse[];
	classCreationPayload: ICreateOrUpdateClass;
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

export type IClassCreationFieldComponentProps =
	| IAutoCompleteFieldWrapperProps
	| IMultiSelectFieldWrapperProps
	| ITextFieldWrapperProps
	| IDateFieldWrapperProps;

export interface IClassCreationField {
	wrapperProps: IFieldWrapper;
	components?: Array<React.FunctionComponent<any>>;
	componentProps?: Array<IClassCreationFieldComponentProps>;
}

export interface IStaffCreation {
	userId: string;
	name: string;
	salary: number;
	hireDate: string;
}
