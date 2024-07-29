import React from "react";
import { ChatWindow } from "../components/atoms/ChatWindow";
import { Button } from "../components/atoms/Button";
import { Link } from "wouter";
import { useChatRouteStore } from "../hooks/store";

export const GetStarted = () => {
	const setRoute = useChatRouteStore((state) => state.setRoute);
	return (
		<ChatWindow className="bg-get-started bg-cover relative bg-center">
			<div className="gap-16 flex flex-col items-start px-[20px] m-auto pb-[10px] absolute bottom-[50px]">
				<h2 className="text-white text-3xl leading-7">
					The Future of Chat is Here With AI Technology
				</h2>
				<p className="text-white text-lg font-light">
					"The future of chat is here with AI technology" implies that the integration of AI into
					chat technology is already happening and that it's an exciting development for the way we
					communicate. AI-powered chatbots are becoming increasingly sophisticated and are able to
					understand and respond to natural language,
				</p>

				<button
					onClick={() => setRoute("/register")}
					className="w-full bg-red-600 rounded-lg h-[53px] text-center text-white align-middle leading-[53px]"
				>
					Get Started{" "}
				</button>
			</div>
		</ChatWindow>
	);
};
