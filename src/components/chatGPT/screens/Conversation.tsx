import React, { useRef, useState, useEffect } from "react";
import { ChatPaddingWrapper, ChatWindow } from "../components/ChatWindow";
import { BiMenuAltLeft as MenuLeft } from "react-icons/bi";
import { BsThreeDotsVertical as ContextMenuIcon, BsFillSendFill as SendIcon } from "react-icons/bs";
import { PiMicrophone as MicrophoneIcon } from "react-icons/pi";
import { useHttpClient } from "../hooks/useHttpClient";
import { useMutation } from "@tanstack/react-query";

import { cn } from "@/lib/utils";

const CharArea = ({ messages = [] }) => {
	const currentUserId = 1;
	const roomId = 1;
	const messagesEndRef = useRef<null | HTMLDivElement>(null);
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);
	return (
		<div className="grid gap-6 py-12 max-h-[600px] overflow-y-auto pr-6">
			{messages.map((m) => (
				<Message text={m.text} key={m.text} isCurrentUser={currentUserId === m.userId} />
			))}
			<div ref={messagesEndRef}></div>
		</div>
	);
};

const Message = ({ text, isCurrentUser = false }) => {
	const messageOwner = isCurrentUser ? "bg-red-600" : " ml-auto bg-chatInputBackground";
	const className = `${messageOwner}`;
	return (
		<div className={cn("max-w-[235px] p-6 text-white rounded-t-3xl bg-red-600", className)}>
			{text}
		</div>
	);
};

const ChatInput = ({ sendMessage }) => {
	const [message, setMessage] = useState("");
	const handleChange = (e) => {
		setMessage(e.target.value);
	};
	return (
		<div className="bg-chatInputBackground rounded-3xl grid grid-cols-12 gap-2 w-[430px] h-[137px] absolute bottom-0 content-center place-items-center">
			<div className="pl-6 w-full h-[83px] text-sm text-white text-left bg-chatBackground border-0 col-span-9 rounded-2xl relative">
				<textarea
					className="w-full bg-transparent h-full pr-24 pt-2 pl-2"
					onChange={handleChange}
				/>
				<MicrophoneIcon
					color="white"
					className="absolute right-6 bottom-6 p-2 bg-gray-400 w-[35px] h-[35px] rounded-full"
				/>
			</div>
			<div
				onClick={() => sendMessage(message)}
				className="w-[54px] h-[53px] bg-red-600 grid place-items-center rounded-full col-span-3"
			>
				<SendIcon color="white" size="3rem" className="p-1" />
			</div>
		</div>
	);
};

export const Conversation = () => {
	const { getMessages, addMessage } = useHttpClient();
	const { data: messages, isLoading, error } = getMessages();
	const mutation = addMessage();
	const [newMessage, setNewMessage] = useState("");

	const sendMessage = async (m) => {
		mutation.mutate(m);
		const [newMessage, setNewMessage] = useState("");
	};

	return (
		<ChatWindow className="bg-get-started py-20 px-0 relative">
			<ChatPaddingWrapper>
				<div className="grid grid-cols-12 gap-4 py-4">
					<div className="col-span-1">
						<MenuLeft color="white" size="2rem" />
					</div>
					<div className="col-span-8 text-center text-white">ChatAI</div>
					<div className="col-span-2">
						<ContextMenuIcon size="1.5rem" color="white" />
					</div>
				</div>
				<CharArea messages={messages} />
			</ChatPaddingWrapper>
			<ChatInput sendMessage={sendMessage} />
		</ChatWindow>
	);
};
