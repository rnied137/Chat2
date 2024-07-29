import { Route, Router, Switch } from "wouter";
import { Conversation } from "./components/chatGPT/screens/Conversation";
import { ChatMain } from "./components/chatGPT/screens/ChatMain";
import { About } from "./pages/About";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export const queryClient = new QueryClient();

export function App() {
	return (
		<Router>
			<Switch>
				<Route path="/about" component={About} />
			</Switch>

			<QueryClientProvider client={queryClient}>
				<Conversation />
			</QueryClientProvider>
		</Router>
	);
}
