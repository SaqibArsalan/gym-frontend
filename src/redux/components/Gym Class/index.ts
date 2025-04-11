import { createActionAndReducers } from 'redux/utils/reducer.helper';

import {IClassActions} from './GymClass.interface';

import { reducerName } from './GymClass.constants';

import classInitialState from './initalState';

import * as classEffects from './affects';

export * from './GymClass.interface';

export * from './GymClass.constants';

const { actions, reducer } = createActionAndReducers<IClassActions>(
	reducerName,
	classInitialState,
	classEffects
);

export { actions, classInitialState, reducer };
