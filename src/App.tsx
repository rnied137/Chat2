import { Link, Route, Router, Switch } from "wouter";

import Breadcrumbs from "./components/helpers/Breadcrumbs";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { LeftNavigation } from "./sections/leftNavigation/LeftNavigation";
import { Chat } from "./components/chat/Chat";
import { ChatHistory } from "./components/chatGPT/screens/Chats";
import { Conversation } from "./components/chatGPT/screens/Conversation";
import { LoginPage } from "./components/chatGPT/screens/LoginPage";
import { RegisterPage } from "./components/chatGPT/screens/RegisterPage";
import { GetStarted } from "./components/chatGPT/screens/GetStarted";
import { ChatMain } from "./components/chatGPT/screens/ChatMain";
import { About } from "./pages/About";
import { useChatRouteStore } from "./components/chatGPT/hooks/store";
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";

const PageWrapper = ({ children }: React.PropsWithChildren) => {
	return <div className="ml-20 mt-8">{children}</div>;
};

export function App() {
	const route = useChatRouteStore((state) => state.route);
	const queryClient = new QueryClient();
	return (
		<Router>
			{/* <LeftNavigation /> */}
			{/* <PageWrapper> */}
			{/* <Breadcrumbs /> */}
			{/* <Link href="/dashboard" /> */}
			<Switch>
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/about" component={About} />
			</Switch>
			{/* <ChatMain /> */}
			{/* <ChatHistory />
				<Conversation />
				<LoginPage />
				<RegisterPage /> */}
			{/* {route} */}
			{/* <ChatMain /> */}
			<QueryClientProvider client={queryClient}>
				<Conversation />
			</QueryClientProvider>
			{/* <GetStarted />
				
				<LoginPage />
				<RegisterPage /> */}
			{/* <Conversation /> */}
			{/* </PageWrapper> */}
		</Router>
	);
}
