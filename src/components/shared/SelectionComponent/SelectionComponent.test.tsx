import React from 'react';
import "@testing-library/react/dont-cleanup-after-each";
import {cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import SelectionComponent from './SelectionComponent';

let renderWrapper: RenderResult;


describe("SelectionComponent tests", () => {
    beforeAll(() => {
        renderWrapper = render(<SelectionComponent values={[
            {id: 1, name: 'test1'},
            {id: 2, name: 'test2'}
        ]} />);
    });
    afterAll(() => {
        cleanup();
    });
    test("default renders successfully", () => {
        expect(renderWrapper.container).not.toBeNull();
        expect(renderWrapper.container).toMatchSnapshot();
    });
})