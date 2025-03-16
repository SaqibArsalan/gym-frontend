// Generated with util/create-component.js
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import NavBar from './NavBar';
import { INavBarProps } from './NavBar.types';
import LinkTab from '../LinkTab/LinkTab';

describe('NavBar Component', () => {
	let wrapper: ReactWrapper<
		any,
		Readonly<{}>,
		React.Component<INavBarProps, {}, any>
	>;

	beforeEach(() => {
		wrapper = mount(
			<NavBar>
				<LinkTab label='link tab active' href='#' />
				<LinkTab label='link tab' href='#' />
			</NavBar>
		);
	});

	test('component should successfully render', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should render link tab inside navbar correctly', () => {
		const linkTab = wrapper.find('.MuiTabs-flexContainer .MuiTab-root').first();
		expect(linkTab).toHaveLength(1);
		expect(linkTab.text()).toBe('link tab active');
	});

	test('should test handleChange onClick and tabIndex of linkTab should update', () => {
		const linkTab = wrapper.find('.MuiTabs-flexContainer .MuiTab-root').last();

		expect(linkTab).toHaveLength(1);
		expect(linkTab.props().tabIndex).toBe(-1);

		const event: any = {};
		linkTab.simulate('click', event, 1);

		const updatedLinkTAb = wrapper
			.find('.MuiTabs-flexContainer .MuiTab-root')
			.last();
		expect(updatedLinkTAb.props().tabIndex).toBe(0);
	});
});
