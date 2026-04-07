import { IReduxActionResponse } from 'redux/interfaces';
import { IChatInitialState, IChatMessage } from '../Chat.interface';

export const addMessageSuccess = (
	state: IChatInitialState,
	action: IReduxActionResponse<IChatMessage>
) => {
	const { payload } = action;
	if (payload) {
		state = { ...state, messages: [...state.messages, payload] };
	}
	return state;
};

export const setTyping = (
	state: IChatInitialState,
	action: IReduxActionResponse<boolean>
) => {
	state = { ...state, isTyping: action.payload ?? false };
	return state;
};

export const clearChat = (state: IChatInitialState) => {
	state = { ...state, messages: [], isTyping: false };
	return state;
};

