import { useRef, useEffect } from "react";
import { Message } from "./Message";

export const Area = ({ messages = [] }) => {
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
				<Message message={m.message} key={m.id} isCurrentUser={currentUserId === m.userId} />
			))}
			<div ref={messagesEndRef}></div>
		</div>
	);
};
