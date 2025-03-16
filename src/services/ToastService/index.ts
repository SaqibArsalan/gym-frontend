import React from 'react';
import ToastComponent from './component/ToastComponent';
import { ToastClasses } from './ToastService.constants';
import {
	IToastComponentProps,
	IToastOptions,
	IToastService,
} from './ToastService.interface';

const defaultOptions: IToastOptions = {
	timeout: 3000,
	disableTimeout: false,
};

// Class
class ToastService implements IToastService {
	on = (event: string, callback: Function) => {
		document.addEventListener(event, (e: any) => callback(e.detail));
	};

	show = (
		component: React.FunctionComponent<any> | React.ComponentClass<any>,
		props: IToastComponentProps,
		options: IToastOptions = defaultOptions
	) => {
		const toastId: number = Date.now();
		document.dispatchEvent(
			new CustomEvent('showToast', {
				detail: { id: toastId, component, props, options },
			})
		);
		return toastId;
	};

	hide = (id: number) => {
		document.dispatchEvent(new CustomEvent('hideToast', { detail: id }));
	};

	success = (
		props: IToastComponentProps,
		options: IToastOptions = defaultOptions
	) =>
		this.show(
			ToastComponent,
			{ ...props, toastTypeClass: ToastClasses.SUCCESS },
			options
		);

	error = (
		props: IToastComponentProps,
		options: IToastOptions = defaultOptions
	) =>
		this.show(
			ToastComponent,
			{ ...props, toastTypeClass: ToastClasses.ERROR },
			options
		);

	info = (
		props: IToastComponentProps,
		options: IToastOptions = defaultOptions
	) =>
		this.show(
			ToastComponent,
			{ ...props, toastTypeClass: ToastClasses.INFO },
			options
		);
}

export default new ToastService();
