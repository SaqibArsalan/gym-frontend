import { createActionAndReducers } from 'redux/utils/reducer.helper';

import { IMiscellaneousActions } from './Miscellaneous.interface';

import { reducerName } from './Miscellaneous.constants';

import miscellaneousInitialState from './initalState';

import * as miscellaneousEffects from './affects';

export * from './Miscellaneous.interface';

export * from './Miscellaneous.constants';

const { actions, reducer } = createActionAndReducers<IMiscellaneousActions>(
	reducerName,
	miscellaneousInitialState,
	miscellaneousEffects
);

export { actions, miscellaneousInitialState, reducer };
