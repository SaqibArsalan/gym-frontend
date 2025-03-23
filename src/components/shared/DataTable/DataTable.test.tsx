import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import { cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import DataTable from './DataTable';

let renderWrapper: RenderResult;

// const mockHookDispatch = jest.fn();

// jest.mock('react-redux', () => ({
// 	...jest.requireActual('react-redux'),
// 	useDispatch: () => mockHookDispatch,
// }));

describe('MultiSelectComponent tests', () => {
	beforeAll(() => {
		renderWrapper = render(
			<DataTable
				header={{ columns: [{ title: 'test' }] }}
				body={{ rows: [{ columns: [{ text: '' }] }] }}
			/>
		);
	});
	afterAll(() => {
		cleanup();
	});
	test('default renders successfully', () => {
		expect(renderWrapper.container).not.toBeNull();
		expect(renderWrapper.container).toMatchSnapshot();
	});
});
