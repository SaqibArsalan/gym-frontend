// Generated with util/create-component.js
import React, { useState } from 'react';
import NavBar from './NavBar';
import LinkTab from '../LinkTab/LinkTab';
import { IconPositionEnum } from '../LinkTab';
// import SvgIconCustom from '../SvgIcon/SvgIcon';

export default {
	title: 'NavBar',
};

const iconImage = require('../../assets/images/cart-flatbed-boxes.svg');

// const icon1 = () => <SvgIconCustom src={iconImage} alt='icon-1' />;

const iconImage2 = require('../../assets/images/boxes-stacked.svg');

// const icon2 = () => <SvgIconCustom src={iconImage2} alt='icon-2' />;

export const WithMultipleTabs = () => (
	<NavBar>
		<LinkTab label='Link1' href='#' />
		<LinkTab
			label='Link2'
			href='#'
			iconPosition={IconPositionEnum.end}
		/>
		<LinkTab label='Link3' href='#' />
	</NavBar>
);

export const MultipleWithBorderRemoved = () => (
	<NavBar removeBorderBottom>
		<LinkTab
			label='Link2'
			href='#'
			iconPosition={IconPositionEnum.start}
		/>
		<LinkTab
			label='Custom Svg Icon'
			href='#'
			iconPosition={IconPositionEnum.start}
		/>
	</NavBar>
);

export const WithMultipleTabsAndCustomHandlers = () => {
	const [tabValue, setTabValue] = useState(4);
	return (
		<NavBar
			value={tabValue}
			onChange={(e, newValue) => {
				console.log('this is my custom handler', e);
				console.log('the new value here', newValue);
				setTabValue(newValue);
			}}
		>
			<LinkTab label='Link1' href='#' />
			<LinkTab
				label='Link2'
				href='#'
				iconPosition={IconPositionEnum.end}
			/>
			<LinkTab label='Link3' href='#' />
			<LinkTab label='Link4' href='#' />
			<LinkTab
				label='Link5'
				href='#'
				iconPosition={IconPositionEnum.end}
			/>
			<LinkTab label='Link6' href='#' />
		</NavBar>
	);
};
