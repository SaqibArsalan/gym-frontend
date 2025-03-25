import { createActionAndReducers } from 'redux/utils/reducer.helper';

import {IStaffActions} from './Staff.interface';

import { reducerName } from './Staff.constants';

import staffInitialState from './initalState';

import * as membersEffects from './affects';

export * from './Staff.interface';

export * from './Staff.constants';

const { actions, reducer } = createActionAndReducers<IStaffActions>(
	reducerName,
	staffInitialState,
	membersEffects
);

export { actions, staffInitialState, reducer };
