import { createActionAndReducers } from 'redux/utils/reducer.helper';

import {ISessionActions} from './Session.interface';

import { reducerName } from './Session.constants';

import sessionInitialState from './initalState';

import * as sessionEffects from './affects';

export * from './Session.interface';

export * from './Session.constants';

const { actions, reducer } = createActionAndReducers<ISessionActions>(
	reducerName,
	sessionInitialState,
	sessionEffects
);

export { actions, sessionInitialState, reducer };
