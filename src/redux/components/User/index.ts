import { createActionAndReducers } from 'redux/utils/reducer.helper';

import {IUserActions} from './User.interface';

import { reducerName } from './User.constants';

import userInitialState from './initalState';

import * as userEffects from './affects';

export * from './User.interface';

export * from './User.constants';

const { actions, reducer } = createActionAndReducers<IUserActions>(
	reducerName,
	userInitialState,
	userEffects
);

export { actions, userInitialState, reducer };
