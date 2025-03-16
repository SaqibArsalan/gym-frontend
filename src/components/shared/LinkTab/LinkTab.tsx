// Generated with util/create-component.js
import React from 'react';
import Tab from '@mui/material/Tab';

import { IconPositionEnum, ILinkTabProps } from './LinkTab.types';

import './LinkTab.scss';

const LinkTab: React.FC<ILinkTabProps> = (props: ILinkTabProps) => (
	<Tab {...props} />
);

LinkTab.defaultProps = {
	onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();
	},
	iconPosition: IconPositionEnum.start,
};

export default LinkTab;
