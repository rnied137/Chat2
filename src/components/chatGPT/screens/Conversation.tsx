import { useState } from "react";
import { ChatPaddingWrapper, ChatWindow } from "../components/atoms/ChatWindow";
import { useHttpClient } from "../hooks/useHttpClient";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { Input } from "../components/chat/Input";
import { Area } from "../components/chat/Area";
import { Menu } from "../components/chat/Menu";

export const Conversation = () => {
	const { getMessages, addMessage } = useHttpClient();
	const { data: messages } = getMessages();
	const [_, setNewMessage] = useState("");
	const useClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: addMessage,
		onSuccess: () => {
			useClient.refetchQueries({ queryKey: ["chatMessages"] });
		},
	});

	const sendMessage = async (m) => {
		mutation.mutate(m);
		setNewMessage("");
	};

	return (
		<ChatWindow className="bg-get-started py-20 px-0 relative">
			<ChatPaddingWrapper>
				<Menu />
				<Area messages={messages} />
			</ChatPaddingWrapper>
			<Input sendMessage={sendMessage} />
		</ChatWindow>
	);
};
