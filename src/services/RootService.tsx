import React from 'react';
import LoaderRoot from './LoaderService/component/LoaderRoot';
import ModalRoot from './ModalService/component/ModalRoot';
import NavigationRoot from "./NavigationService/component/NavigationRoot";
import ToastRoot from "./ToastService/component/ToastRoot";

const RootService = () => (
	<>
		<ModalRoot />
		<NavigationRoot />
		<LoaderRoot />
		<ToastRoot />
	</>
);

export default RootService;
