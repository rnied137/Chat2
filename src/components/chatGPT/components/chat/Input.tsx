import { useState } from "react";
import { PiMicrophone as MicrophoneIcon } from "react-icons/pi";
import { BsFillSendFill as SendIcon } from "react-icons/bs";

export const Input = ({ sendMessage }: any) => {
	const [message, setMessage] = useState("");
	const handleChange = (e) => {
		setMessage(e.target.value);
	};
	return (
		<div className="bg-chatInputBackground rounded-3xl grid grid-cols-12 gap-2 w-[430px] h-[137px] absolute bottom-0 content-center place-items-center">
			<div className="pl-6 w-full h-[83px] text-sm text-white text-left bg-chatBackground border-0 col-span-9 rounded-2xl relative">
				<textarea
					className="w-full bg-transparent h-full pr-24 pt-2 pl-2"
					onChange={handleChange}
				/>
				<MicrophoneIcon
					color="white"
					className="absolute right-6 bottom-6 p-2 bg-gray-400 w-[35px] h-[35px] rounded-full"
				/>
			</div>
			<div
				onClick={() => sendMessage(message)}
				className="w-[54px] h-[53px] bg-red-600 grid place-items-center rounded-full col-span-3"
			>
				<SendIcon color="white" size="3rem" className="p-1" />
			</div>
		</div>
	);
};
