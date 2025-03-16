import { createSlice } from '@reduxjs/toolkit';

/* eslint-disable import/prefer-default-export */
export function convertArrayToObject(array: Array<any>, key?: string, transformItemFunction?: (item: any) => any) {
	return array.reduce((prevValue: any, item: any) => {
		if (item) {
			const wrappedValue = transformItemFunction ? transformItemFunction(item): item;
			const itemKey = key ? item[key]: wrappedValue;
			/* eslint-disable-next-line */
			prevValue[itemKey] = wrappedValue;
		}
		return prevValue;
	}, {});
}

export function insertItemInArray(array: any[], item: any, rowIndex: number) {
	return [...array.slice(0, rowIndex), item, ...array.slice(rowIndex + 1)];
}

export const createActionAndReducers = <T extends {}>(
	reducerName: string,
	initialState: any,
	affects: any
): { actions: T; reducer: any } => {
	const slice = createSlice({
		name: reducerName,
		initialState,
		reducers: {
			...affects,
		},
	});
	const { actions, reducer } = slice;
	return {
		actions: actions as T,
		reducer,
	};
};
