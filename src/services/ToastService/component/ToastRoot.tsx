import React, { Component } from 'react';
import { IToastOptions } from '../ToastService.interface';
import ToastService from '../index';
import './ToastComponent.scss';

interface IToastParams {
	id: number;
	component: React.FunctionComponent;
	props?: any;
	options?: IToastOptions;
}

type ToastRootState = {
	toasts: IToastParams[];
};

class ToastRoot extends Component<any, ToastRootState> {
	state: ToastRootState = {
		toasts: [],
	};

	componentDidMount() {
		ToastService.on('showToast', (params: IToastParams) => {
			const { toasts } = this.state;
			this.setState({
				toasts: [...toasts, params],
			});

			// setting timer
			if (params.options && !params.options.disableTimeout) {
				setTimeout(this.ToastClose(params), params.options.timeout || 0);
			}
		});

		ToastService.on('hideToast', (toastId: number) => {
			const { toasts } = this.state;
			this.setState({
				toasts: toasts.filter((Toast: IToastParams) => Toast.id !== toastId),
			});
		});
	}

	/* eslint-disable func-names */
	ToastClose = function (Toast: IToastParams) {
		return function () {
			if (Toast.props && Toast.props.onClose) {
				// eslint-disable-next-line
				Toast.props.onClose.apply(null, arguments);
			}
			ToastService.hide(Toast.id);
		};
	};

	render() {
		const { toasts } = this.state;
		return (
			<>
				{toasts.length ? (
					<section className='toast-wrapper'>
						{toasts.map((Toast: IToastParams) => {
							const ToastComponent = Toast.component;
							return (
								<div>
									<ToastComponent
										key={Toast.id}
										{...Toast.props}
										closeToastHandler={this.ToastClose(Toast)}
									/>
								</div>
							);
						})}
					</section>
				) : null}
			</>
		);
	}
}

export default ToastRoot;
