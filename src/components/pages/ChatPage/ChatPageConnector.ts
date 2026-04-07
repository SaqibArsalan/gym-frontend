import * as React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'redux/rootReducer';
import { IChatInitialState } from 'redux/components/Chat';

const mapStateToProps = (state: IRootState & { chat: IChatInitialState }) => ({
	auth: state.auth,
	messages: state.chat.messages,
	isTyping: state.chat.isTyping,
});

const ChatPageConnector = (component: React.ComponentType<any>) =>
	connect(mapStateToProps)(component as any);

export default ChatPageConnector;
