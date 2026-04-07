import { createActionAndReducers } from 'redux/utils/reducer.helper';
import { IChatActions } from './Chat.interface';
import { reducerName } from './Chat.constants';
import chatInitialState from './initalState';
import * as chatEffects from './affects';

export * from './Chat.interface';
export * from './Chat.constants';

const { actions, reducer } = createActionAndReducers<IChatActions>(
	reducerName,
	chatInitialState,
	chatEffects
);

export { actions, chatInitialState, reducer };

