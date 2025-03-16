export interface IActionMap {
	key: string;
	actionFunctionKey: string;
	reducerFunction?: Function;
}

export interface IPaginationOption {
	size?: number;
	page?: number;
	searchKey?: string;
	name?: string;
}


export interface IReduxActionResponse<T> {
	type: string;
	payload?: T;
}

// eslint-disable-next-line
export type IReduxAction<T> = (payload?: T) => IReduxActionResponse<T>;

export interface IDefaultObjectOfStrings {
	[key: string]: string;
}
