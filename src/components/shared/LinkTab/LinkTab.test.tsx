// Generated with util/create-component.js
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import LinkTab from './LinkTab';
import { ILinkTabProps } from './LinkTab.types';

describe('Link Tab Component', () => {
	const props: ILinkTabProps = {
		href: '#',
		label: 'link tab',
	};
	let wrapper: ReactWrapper<
		any,
		Readonly<{}>,
		React.Component<ILinkTabProps, {}, any>
	>;

	beforeEach(() => {
		wrapper = mount(<LinkTab {...props} />);
	});

	test('component should successfully render', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should contain tab text', () => {
		const tabText = wrapper.find('a').first();
		// console.log('tabText', tabText.text);
		expect(tabText.text()).toEqual(props.label);
	});
});
