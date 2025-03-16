import { createActionAndReducers } from 'redux/utils/reducer.helper';

import { IAuthActions } from './Auth.interface';

import { reducerName } from './Auth.constants';

import authInitialState from './initialState';

import * as authEffects from './affects';

export * from './Auth.interface';

export * from './Auth.constants';

const { actions, reducer } = createActionAndReducers<IAuthActions>(
	reducerName,
	authInitialState,
	authEffects
);

export { actions, authInitialState, reducer };
