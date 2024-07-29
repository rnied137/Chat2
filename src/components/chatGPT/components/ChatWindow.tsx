import React from "react";
import { cn } from "@/lib/utils";

type Props = {
	children?: React.ReactNode | null;
	className?: string;
};
export const ChatWindow = ({ children, className }: Props) => {
	return <div className={cn("w-[430px] h-[932px] font-inter", className)}>{children}</div>;
};

export const ChatPaddingWrapper = ({ children }) => {
	return <div className="px-[38px]">{children}</div>;
};
