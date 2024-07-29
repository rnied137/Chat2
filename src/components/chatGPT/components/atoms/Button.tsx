import React from "react";

type Props = {
	children?: React.ReactNode | null;
	text?: string;
	onClick?: () => void;
};
export const Button = ({ children, onClick, text = "Get Started" }: Props) => {
	return (
		<button
			onClick={() => onClick()}
			className="text-white h-[53px] text-sm bg-chatButton w-full rounded-full border-transparent font-semibold"
		>
			{text}
			{children}
		</button>
	);
};
