import { IReduxAction } from 'redux/interfaces';

export type ChatMessageRole = 'user' | 'assistant';

export interface IChatMessage {
	id: string;
	role: ChatMessageRole;
	content: string;
	timestamp: string;
}

export interface IChatInitialState {
	messages: IChatMessage[];
	isTyping: boolean;
}

export interface IChatActions {
	addMessageSuccess: IReduxAction<IChatMessage>;
	setTyping: IReduxAction<boolean>;
	clearChat: IReduxAction<void>;
}

export interface IChatRequest {
	messages: { role: ChatMessageRole; content: string }[];
}

export interface IChatResponse {
	content: string;
}

