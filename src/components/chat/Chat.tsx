import { useState } from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

type Props = {
	setActive: () => {};
	active: boolean;
	messages: number;
};

const HiddenChat = ({ showChat, active = false, messages = 1 }) => {
	return (
		<div
			onClick={() => showChat()}
			className="fixed transparent w-[75px] h-[75px] rounded-full flex items-center justify-center bottom-5 right-1/3 border-gray-900 border hover:scale-110"
		>
			<IoChatbubbleOutline size="3rem" />
			{messages > 0 && (
				<>
					&nbsp; <div>{messages}</div>
				</>
			)}
		</div>
	);
};

const VisibleChat = ({ hideChat }) => {
	return (
		<div className="fixed transparent w-[426px] h-[455px] bottom-5 right-1/3 border-gray-900 border rounded-lg">
			<div className="flex flex-row justify-between border-b-2 border-gray-900">
				<div></div>
				<div onClick={() => hideChat()}>
					<IoMdCloseCircle size="4rem" />
				</div>
			</div>
		</div>
	);
};

export const Chat = () => {
	const [showed, setShowed] = useState(false);

	return (
		<>
			{showed ? (
				<VisibleChat hideChat={() => setShowed(false)} />
			) : (
				<HiddenChat showChat={() => setShowed(true)} />
			)}
		</>
	);
};
