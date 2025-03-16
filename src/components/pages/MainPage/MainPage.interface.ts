import { IChildModuleInfo } from 'config/interface';
import React from 'react';
import { IAuthInitialState } from 'redux/components/Auth';

export interface IMainPage {
	auth: IAuthInitialState;
}

export interface IHEADER_LINKS_INFO {
	label:  string;
	moduleInfo?: IChildModuleInfo
	default?:  boolean;
	icon: React.FunctionComponent,
	route: string;
	isReplaceRoute?: boolean;
	markActive?: boolean;
	onClick: (navigate: Function, item: IHEADER_LINKS_INFO) => (event: React.MouseEvent<any>) => void;
}
