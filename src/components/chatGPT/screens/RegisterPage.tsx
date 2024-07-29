import React from "react";
import { IoMdUnlock } from "react-icons/io";
import { Button } from "../components/Button";
import { FaApple, FaGoogle, FaUser, FaMailchimp } from "react-icons/fa6";
import { ChatPaddingWrapper, ChatWindow } from "../components/ChatWindow";
import { IoMdMail } from "react-icons/io";
import { useChatRouteStore } from "../hooks/store";
import { FaFacebookF } from "react-icons/fa";

export const RegisterPage = () => {
	const route = useChatRouteStore((state) => state.route);
	const setRoute = useChatRouteStore((state) => state.setRoute);
	return (
		<ChatWindow className="bg-chatBackground bg-center py-2">
			<div className="pt-32 pb-20">
				<h2 className="text-center text-7xl text-white font-inter">ChatAI</h2>
				<p className="text-center text-chatHelperText text-sm py-2">
					Please Sign up to Your Account
				</p>
			</div>
			<div className="grid m-auto max-w-[280px] grid-cols-3 gap-3">
				{[
					{ icon: <FaGoogle color="white" size="2.5rem" />, key: "google" },
					{ icon: <FaFacebookF color="white" size="2.5rem" />, key: "facebook" },
					{ icon: <FaApple color="white" size="2.5rem" />, key: "apple" },
				].map(({ icon, key }) => (
					<div
						key={key}
						className="w-[80px] h-[70px] rounded-3xl cursor-pointer bg-chatInputBackground grid place-content-center"
					>
						{icon}
					</div>
				))}
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
							placeholder="Enter Your Name"
							className="bg-chatInputBackground border-0 p-4 w-full rounded-full pl-16 text-chatInput"
						/>
						<FaUser color="red" size="1.5rem" className="absolute top-4 m-auto left-8" />
					</div>
					<div className="w-full relative">
						<input
							type="email"
							placeholder="Enter Your Email"
							className="bg-chatInputBackground border-0 p-4 w-full rounded-full pl-16 text-chatInput"
						/>
						<IoMdMail color="red" size="1.5rem" className="absolute top-4 m-auto left-8" />
					</div>
					<div className="w-full relative">
						<input
							type="password"
							placeholder="Enter Your Password"
							className="bg-chatInputBackground border-0 p-4 w-full rounded-full pl-16 text-chatInput"
						/>
						<IoMdUnlock color="red" size="1.5rem" className="absolute top-4 m-auto left-8" />
					</div>

					<Button text="Register" onClick={() => setRoute("/conversation")} />
					<div className="text-white text-sm text-center">
						{" "}
						Already Have Account?{" "}
						<a className="ml-2 text-red-500" onClick={() => setRoute("/login")}>
							{" "}
							Login
						</a>
					</div>
				</div>
			</ChatPaddingWrapper>
		</ChatWindow>
	);
};
