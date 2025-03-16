import React from 'react';
import LoaderRoot from './LoaderService/component/LoaderRoot';
import ModalRoot from './ModalService/component/ModalRoot';
import ToastRoot from './ToastService/component/ToastRoot';
import NavigationRoot from './NavigationService/component/NavigationRoot';

const RootService = () => (
	<>
		<ModalRoot />
		<ToastRoot />
		<LoaderRoot />
		<NavigationRoot />
	</>
);

export default RootService;
