import React from 'react';
import "@testing-library/react/dont-cleanup-after-each";
import {cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import CardLabel from './CardLabel';

let renderWrapper: RenderResult;


describe("CardLabel tests", () => {
    beforeAll(() => {
        renderWrapper = render(<CardLabel label='test' />);
    });
    afterAll(() => {
        cleanup();
    });
    test("default renders successfully", () => {
        expect(renderWrapper.container).not.toBeNull();
        expect(renderWrapper.container).toMatchSnapshot();
    });
})