import React from "react";
import { ChatPaddingWrapper, ChatWindow } from "../components/atoms/ChatWindow";
import { FaGoogle, FaApple } from "react-icons/fa6";
import { FaFacebookF, FaUser } from "react-icons/fa";
import { IoMdUnlock } from "react-icons/io";
import { Button } from "../components/atoms/Button";
import { useChatRouteStore } from "../hooks/store";

export const LoginPage = () => {
	const route = useChatRouteStore((state) => state.route);
	const setRoute = useChatRouteStore((state) => state.setRoute);
	return (
		<ChatWindow className="bg-chatBackground bg-center py-2 border-2">
			<div className="pt-32 pb-20">
				<h2 className="text-center text-7xl text-white font-inter">ChatAI</h2>
				<p className="text-center text-chatHelperText text-sm py-2">Please Login to Your Account</p>
			</div>
			<div className="grid m-auto max-w-[280px] grid-cols-3 gap-3">
				<div className="w-[80px] h-[70px] rounded-3xl cursor-pointer bg-chatInputBackground grid place-content-center">
					<FaGoogle color="white" size="2.5rem" />
				</div>
				<div className="w-[80px] h-[70px] rounded-3xl cursor-pointer bg-chatInputBackground grid place-content-center">
					<FaFacebookF color="white" size="2.5rem" />
				</div>
				<div className="w-[80px] h-[70px] rounded-3xl cursor-pointer bg-chatInputBackground grid place-content-center">
					<FaApple color="white" size="2.5rem" />
				</div>
			</div>

			<div className="flex flex-row gap-10 w-full h-[53px] items-center justify-center color-white">
				<div>
					<hr className="border-white w-[86px] h-1/6 align-middle my-auto bg-white" />
				</div>

				<div className="text-white text-center inline-block align-middle my-auto">or</div>

				<div>
					<hr className="border-white w-[86px] h-1/6 align-middle inline-block bg-white" />
				</div>
			</div>
			<ChatPaddingWrapper>
				<div className="grid gap-12 pt-5">
					<div className="w-full relative">
						<input
							type="text"
							placeholder="Enter Your email"
							className="bg-chatInputBackground border-0 p-4 w-full rounded-full pl-32 text-chatInput"
						/>
						<FaUser color="red" size="1.5rem" className="absolute top-4 m-auto left-16" />
					</div>
					<div className="w-full relative">
						<input
							type="password"
							placeholder="Enter Your Password"
							className="bg-chatInputBackground border-0 p-4 w-full rounded-full pl-32 text-chatInput"
						/>
						<IoMdUnlock color="red" size="1.5rem" className="absolute top-4 m-auto left-16" />
					</div>
					<a
						className="pointer hover:border-0 text-red-600 text-base align-right text-right"
						onClick={() => setRoute("/forgotPassword")}
					>
						{" "}
						Forgot Password ?
					</a>
					<Button text="Login" onClick={() => setRoute("/conversation")} />
					<div className="text-white text-base text-center">
						{" "}
						Don't Have Account?{" "}
						<a className="ml-2 text-red-500 cursor-pointer" onClick={() => setRoute("/register")}>
							{" "}
							Sign up
						</a>
					</div>
				</div>
			</ChatPaddingWrapper>
		</ChatWindow>
	);
};
