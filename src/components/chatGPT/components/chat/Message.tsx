import { cn } from "@/lib/utils";

type Props = {
	message: string;
	isCurrentUser: boolean;
};

export const Message = ({ message, isCurrentUser = false }: Props) => {
	const messageOwner = isCurrentUser ? "bg-red-600" : " ml-auto bg-chatInputBackground";
	const className = `${messageOwner}`;
	return (
		<div className={cn("max-w-[235px] p-6 text-white rounded-t-3xl bg-red-600", className)}>
			{message}
		</div>
	);
};
