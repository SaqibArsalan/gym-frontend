import { IAuthInitialState } from 'redux/components/Auth';
import React from "react";
import {IStaff} from "../../../redux/components/Staff";
import {IUsersDropdown} from "../../../redux/components/User";
import {IMembershipPlan} from "../../../redux/components/Members";

export interface IMemberCreateOrUpdateProps {
	auth: IAuthInitialState;
	usersByNameList: IUsersDropdown[];
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


export interface IStepComponentProps {
	totalSteps: number;
	onBack?: () => void;
	onSubmit?: () => void;
	activeStep: number;
	onContinue?: ()=> void;
}