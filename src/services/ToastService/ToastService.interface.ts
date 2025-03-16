import React from 'react';

export interface IToastService {
	on: (event: string, callback: Function) => void;
	show: (
		component: React.FunctionComponent<any> | React.ComponentClass<any>,
		props: IToastComponentProps,
		options: IToastOptions
	) => number;
	hide: (id: number) => void;
	success: (props: IToastComponentProps, options: IToastOptions) => void;
	error: (props: IToastComponentProps, options: IToastOptions) => void;
	info: (props: IToastComponentProps, options: IToastOptions) => void;
}

export interface IToastProps {
	id: number;
	closeToastHandler: () => void;
	text: string;
	toastTypeClass?: string;
}

export interface IToastComponentProps {
	text: string;
	toastTypeClass?: string;
}

export interface IToastOptions {
	timeout?: number;
	disableTimeout?: boolean;
}
