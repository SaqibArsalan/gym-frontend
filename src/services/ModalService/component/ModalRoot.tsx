import React, { Component } from 'react';
import ModalService from '../index';
import { IModalParams } from '../ModalService.interface';

type ModalRootState = {
	modals: IModalParams[];
};

class ModalRoot extends Component<any, ModalRootState> {
	state: ModalRootState = {
		modals: [],
	};

	componentDidMount() {
		ModalService.on('openModal', (params: IModalParams) => {
			if (params) {
				this.updateModals(params);
			}
		});

		ModalService.on('forceCloseAll', (params: IModalParams) => {
			this.setState({
				modals: [],
			});
		});

		ModalService.on('closeModal', (params: IModalParams) => {
			const { modals } = this.state;
			this.setState({
				modals: modals.filter(
					(modal: IModalParams) => modal.name !== params.component.name
				),
			});
		});
	}

	/* eslint-disable func-names */
	modalClose = function (modal: IModalParams) {
		return function () {
			if (modal.props && modal.props.onClose) {
				// eslint-disable-next-line
				modal.props.onClose.apply(null, arguments);
			}
			ModalService.close(modal.component);
		};
	};

	updateModals = (params: IModalParams) => {
		const { component, props } = params;
		const name = `${component.name}`;
		const { modals } = this.state;
		this.setState({
			modals: [
				...modals,
				{
					name,
					component,
					props,
				},
			],
		});
	};

	render() {
		const { modals } = this.state;
		return (
			<>
				{modals.length ? (
					<section className='modal-wrapper'>
						{modals.map((modal: IModalParams) => {
							const ModalComponent = modal.component;
							return (
								<ModalComponent
									key={modal.name}
									{...modal.props}
									open
									closeModalHandler={this.modalClose(modal)}
								/>
							);
						})}
					</section>
				) : null}
			</>
		);
	}
}

export default ModalRoot;
