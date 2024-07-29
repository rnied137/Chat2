import { useState } from "react";

import { RegisterPage } from "./RegisterPage";
import { GetStarted } from "./GetStarted";
import { LoginPage } from "./LoginPage";
import { Chats } from "./Chats";
import { useChatRouteStore } from "../hooks/store";
import { Conversation } from "./Conversation";

export const ChatMain = () => {
	//const [route, setRoute] = useState("/");
	const route = useChatRouteStore((state) => state.route);
	switch (route) {
		case "/login":
			return <LoginPage />;
		case "/register":
			return <RegisterPage />;
		case "/conversation":
			return <Conversation />;
		case "/":
			return <GetStarted />;
		default:
			return <GetStarted />;
	}
};
