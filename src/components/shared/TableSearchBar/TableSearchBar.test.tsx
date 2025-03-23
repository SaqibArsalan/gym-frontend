import React from 'react';
import "@testing-library/react/dont-cleanup-after-each";
import {cleanup, fireEvent, prettyDOM, queryByAttribute, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import TableSearchBar from './TableSearchBar';
import { ITableSearchBarProps } from './TableSearchBar.interface';

let renderWrapper: RenderResult;

const getById = queryByAttribute.bind(null, 'id');

const tableSearchProps: ITableSearchBarProps = {
    onChange: jest.fn(),
    onRemove: jest.fn(),
    showRemoveIcon: true,
    defaultValue: "test"
}

describe("TableSearchBar tests", () => {
    beforeAll(() => {
        renderWrapper = render(<TableSearchBar {...tableSearchProps} />);
    });
    afterAll(() => {
        cleanup();
    });
    test("default renders successfully", () => {
        expect(renderWrapper.container).not.toBeNull();
        expect(renderWrapper.container).toMatchSnapshot();
    });
    test("default render successfully with wrapper and StyledTextField", () => {
        const paperElement = renderWrapper.container.getElementsByClassName('MuiPaper-root').length;
        const toolbarRoot = renderWrapper.container.getElementsByClassName('MuiToolbar-root').length;
        const searchBar = getById(renderWrapper.container, "search-text");
        expect(paperElement).not.toBe(0);
        expect(toolbarRoot).not.toBe(0);
        expect(searchBar).not.toBeNull();
    });

    test("render with onChange trigger", () => {
        const searchBar = getById(renderWrapper.container, "search-text");
        fireEvent.change(searchBar as HTMLElement, {target: {value: 'tests'}});
        expect(tableSearchProps.onChange).toBeCalled();
    });

    test("render with onRemove trigger", () => {
        const removeButton = getById(renderWrapper.container, "remove-button");
        fireEvent.click(removeButton as HTMLElement);
        expect(tableSearchProps.onRemove).toBeCalled();
    });
})