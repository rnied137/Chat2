const SERVER_URL = "http://localhost:5282/chat";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ChatMessage } from "../models/ChatMessage";

export const useHttpClient = () => {
	const queryClient = useQueryClient();
	const getMessages = () => {
		return useQuery({
			queryKey: ["chatMessages"],
			queryFn: async (): Promise<Array<ChatMessage>> => {
				const response = await fetch(SERVER_URL);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return await response.json();
			},
		});
	};

	const addMessage = () => {
		return useMutation(
			async (newMessage: ChatMessage) => {
				const response = await fetch(SERVER_URL, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newMessage),
				});
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return await response.json();
			},
			{
				onSuccess: () => {
					queryClient.invalidateQueries(["chatMessages"]);
				},
			}
		);
	};
	return {
		getMessages,
		addMessage,
	};
};
