import { Dispatch } from 'react';
import { GymHttpClient } from 'redux/client';
import { throwErrorToast } from 'redux/utils/source.helper';
import { CHAT_API_URL } from '../Chat.constants';
import { actions, IChatMessage, IChatRequest, IChatResponse } from '../index';

const generateId = () =>
	`${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

const now = () => new Date().toISOString();

export const sendMessage =
	(userInput: string, history: IChatMessage[]) =>
	async (dispatch: Dispatch<any>) => {
		const client = new GymHttpClient({ dispatchError: false });

		// 1. Immediately add the user's message to the store
		const userMessage: IChatMessage = {
			id: generateId(),
			role: 'user',
			content: userInput,
			timestamp: now(),
		};
		dispatch(actions.addMessageSuccess(userMessage));

		// 2. Show typing indicator
		dispatch(actions.setTyping(true));

		try {
			// Build the messages array to send (full conversation history + new message)
			// const payload: IChatRequest = {
			// 	messages: [
			// 		...history.map(({ role, content }) => ({ role, content })),
			// 		{ role: 'user', content: userInput },
			// 	],
			// };
			const payload = {
				message: userInput
			}

			const response = await client.post<IChatResponse>(CHAT_API_URL, payload);

			// 3. Add the assistant's reply
			const assistantMessage: IChatMessage = {
				id: generateId(),
				role: 'assistant',
				content: response.content,
				timestamp: now(),
			};
			dispatch(actions.addMessageSuccess(assistantMessage));
		} catch (e) {
			throwErrorToast(e);
		} finally {
			dispatch(actions.setTyping(false));
		}
	};

