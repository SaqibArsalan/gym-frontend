import { IAuthInitialState } from 'redux/components/Auth';
import React from "react";
import {IFieldWrapper} from "../../../shared/FieldWrapper/FieldWrapper.interface";
import {IAutoCompleteFieldWrapperProps} from "./AutoCompleteFieldWrapper/AutoCompleteFieldWrapper.interface";
import {IMultiSelectFieldWrapperProps} from "./MultiSelectFieldWrapper/MultiSelectFieldWrapper.interface";
import {ITextFieldWrapperProps} from "./TextFieldWrapper/TextFieldWrapper.interface";
import {IDateFieldWrapperProps} from "./DateFieldWrapper/DateFieldWrapper.interface";
import {IStepComponentProps} from "../MemberCreateOrUpdate.interface";
import {IUsersDropdown} from "../../../../redux/components/User";
import {IMembershipPlan} from "../../../../redux/components/Members";

export interface IMemberInfoProps extends IStepComponentProps {
	usersByNameList: IUsersDropdown[];
	memberCreationPayload: IMemberCreation;
	membershipPlans: IMembershipPlan[];
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

export type IMemberCreationFieldComponentProps =
	| IAutoCompleteFieldWrapperProps
	| IMultiSelectFieldWrapperProps
	| ITextFieldWrapperProps
	| IDateFieldWrapperProps;

export interface IMemberCreationField {
	wrapperProps: IFieldWrapper;
	components?: Array<React.FunctionComponent<any>>;
	componentProps?: Array<IMemberCreationFieldComponentProps>;
}

export interface IMemberCreation {
	userId: string;
	membershipPlanId: string;
	memberName: string;
	joinDate: string;
	durationInMonths: number;
}
