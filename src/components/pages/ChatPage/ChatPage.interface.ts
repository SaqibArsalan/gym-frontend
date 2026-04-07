import { IAuthInitialState } from 'redux/components/Auth';
import { IChatMessage } from 'redux/components/Chat';

export interface IChatPageProps {
	auth: IAuthInitialState;
	messages: IChatMessage[];
	isTyping: boolean;
}

