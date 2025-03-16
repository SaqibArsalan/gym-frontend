// Generated with util/create-component.js
import React, { useState } from 'react';
import { Tabs } from '@mui/material';
import styled from '@emotion/styled';

import { INavBarProps } from './NavBar.types';

import './NavBar.scss';

const CustomizedTabs = styled(Tabs)(() => ({
	'.MuiTabs-indicator': {
		display: 'none',
	},
}));

const NavBar: React.FC<INavBarProps> = (props: INavBarProps) => {
	const [tabValue, setValue] = useState(props.value != null ? props.value : 0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return props.removeBorderBottom ? (
		<CustomizedTabs
			{...props}
			value={props.value != null ? props.value : tabValue}
			onChange={props.onChange || handleChange}
			aria-label='nav tabs example'
		>
			{props.children}
		</CustomizedTabs>
	) : (
		<Tabs
			{...props}
			value={props.value != null ? props.value : tabValue}
			onChange={props.onChange || handleChange}
			aria-label='nav tabs example'
		>
			{props.children}
		</Tabs>
	);
};

NavBar.defaultProps = {
	removeBorderBottom: false,
	value: null,
	onChange: undefined,
};

export default NavBar;
