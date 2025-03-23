import { IChildModuleInfo } from 'config/interface';
import React from 'react';
import { IAuthInitialState } from 'redux/components/Auth';
import {IMembersSubscriptions} from "../../../redux/components/Members";

export interface IMembersProps {
	auth: IAuthInitialState;
	membersSubscriptions: IMembersSubscriptions[];
	// tourNotifications: ITourNotificationResponse[];
	// tourList: ITour[];
}

export interface ItableColumnsMap {
	headerTitle: string;
	valueKey: string;
}
