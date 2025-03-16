import React from 'react';

export interface IModalService {
	on: (event: string, callback: Function) => void;
	open: (component: React.FunctionComponent<any>, props: any) => void;
	close: (component: React.FunctionComponent<any>) => void;
}

export interface IModalServiceProps {
	open: boolean;
	closeModalHandler: () => void;
}

export interface IModalParams {
	name: string;
	component: React.FunctionComponent;
	props?: any;
}
