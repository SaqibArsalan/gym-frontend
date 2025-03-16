/* eslint-disable no-unused-vars */
import React from 'react';

// Generated with util/create-component.js
// eslint-disable-next-line no-shadow
export enum IconPositionEnum {
	top = 'top',
	start = 'start',
	end = 'end',
	bottom = 'bottom',
}

export interface ILinkTabProps {
	label: string;
	href: string;
	onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
	children?: any;
	icon?:
		| string
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>;
	iconPosition?: IconPositionEnum;
	value?: number;
}
