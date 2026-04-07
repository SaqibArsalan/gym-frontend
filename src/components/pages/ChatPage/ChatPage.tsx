import React, { useState, useRef, useEffect, useCallback, KeyboardEvent } from 'react';
import {
	Box,
	Paper,
	TextField,
	IconButton,
	Typography,
	Tooltip,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { useDispatch } from 'react-redux';
import { actions as chatActions, IChatMessage } from 'redux/components/Chat';
import { sendMessage } from 'redux/components/Chat/sources';
import { IChatPageProps } from './ChatPage.interface';
import ChatPageConnector from './ChatPageConnector';
import styles from './ChatPage.module.scss';

const formatTime = (iso: string) => {
	const d = new Date(iso);
	return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

function ChatPageComponent(props: IChatPageProps) {
	const { messages, isTyping } = props;
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState('');
	const bottomRef = useRef<HTMLDivElement>(null);

	// Auto-scroll on new messages or typing indicator
	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages, isTyping]);

	const handleSend = useCallback(() => {
		const trimmed = inputValue.trim();
		if (!trimmed || isTyping) return;
		setInputValue('');
		dispatch(sendMessage(trimmed, messages));
	}, [inputValue, isTyping, messages, dispatch]);

	const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	const handleClear = () => {
		dispatch(chatActions.clearChat());
	};

	return (
		<Paper elevation={2} className={styles.chatContainer}>
			{/* Header */}
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					px: 2,
					py: 1.5,
					borderBottom: '1px solid #e0e0e0',
					backgroundColor: '#fafafa',
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					<SmartToyOutlinedIcon color="primary" />
					<Typography variant="h6" fontSize={16} fontWeight={600}>
						AI Assistant
					</Typography>
				</Box>
				<Tooltip title="Clear conversation">
					<span>
						<IconButton onClick={handleClear} disabled={messages.length === 0} size="small">
							<DeleteOutlineIcon fontSize="small" />
						</IconButton>
					</span>
				</Tooltip>
			</Box>

			{/* Message List */}
			<Box className={styles.messageList}>
				{messages.length === 0 && !isTyping && (
					<Box className={styles.emptyState}>
						<SmartToyOutlinedIcon sx={{ fontSize: 48 }} />
						<Typography variant="body1" fontWeight={500}>
							How can I help you today?
						</Typography>
						<Typography variant="body2">
							You can ask me to list classes, book a session, or anything about the gym.
						</Typography>
					</Box>
				)}

				{messages.map((msg: IChatMessage) => (
					<Box
						key={msg.id}
						sx={{ display: 'flex', flexDirection: 'column' }}
					>
						<Box
							className={`${styles.messageBubble} ${
								msg.role === 'user' ? styles.userBubble : styles.assistantBubble
							}`}
						>
							{msg.content}
						</Box>
						<Typography
							className={styles.timestamp}
							sx={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start' }}
						>
							{formatTime(msg.timestamp)}
						</Typography>
					</Box>
				))}

				{isTyping && (
					<Box className={styles.typingBubble}>AI is typing…</Box>
				)}

				<div ref={bottomRef} />
			</Box>

			{/* Input Bar */}
			<Box className={styles.inputBar}>
				<TextField
					fullWidth
					multiline
					maxRows={4}
					size="small"
					placeholder="Ask anything — e.g. 'Book me a yoga class on Friday'"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={handleKeyDown}
					disabled={isTyping}
					sx={{ backgroundColor: '#fafafa', borderRadius: 2 }}
				/>
				<Tooltip title="Send (Enter)">
					<span>
						<IconButton
							color="primary"
							onClick={handleSend}
							disabled={!inputValue.trim() || isTyping}
						>
							<SendIcon />
						</IconButton>
					</span>
				</Tooltip>
			</Box>
		</Paper>
	);
}

const ChatPage = ChatPageConnector(ChatPageComponent);
export default ChatPage;

