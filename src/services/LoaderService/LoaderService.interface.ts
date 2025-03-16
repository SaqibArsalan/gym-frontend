import React from 'react';

export interface ILoaderService {
	on: (event: string, callback: Function) => void;
	show: (component: React.FunctionComponent<any>, props: any) => void;
	hide: (component: React.FunctionComponent<any>) => void;
}

export interface ILoaderParams {
	component?: React.FunctionComponent;
	props?: any;
}
