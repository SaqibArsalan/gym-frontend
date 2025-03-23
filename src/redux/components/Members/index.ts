import { createActionAndReducers } from 'redux/utils/reducer.helper';

import {IMembersActions} from './Members.interface';

import { reducerName } from './Members.constants';

import membersInitialState from './initalState';

import * as membersEffects from './affects';

export * from './Members.interface';

export * from './Members.constants';

const { actions, reducer } = createActionAndReducers<IMembersActions>(
	reducerName,
	membersInitialState,
	membersEffects
);

export { actions, membersInitialState, reducer };
