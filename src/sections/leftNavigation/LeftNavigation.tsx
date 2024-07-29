import { AiFillAccountBook, AiFillAlert, AiFillFile } from "react-icons/ai";
import { Link, useLocation } from "wouter";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navElements = [
	{
		title: "Index",
		icon: AiFillFile,
		link: "/",
	},
	{
		title: "Dashboard",
		icon: AiFillAlert,
		link: "/dashboard",
	},
	{
		title: "Settings",
		icon: AiFillAccountBook,
		link: "/settings",
	},
	{
		title: "About",
		icon: AiFillAccountBook,
		link: "/about",
	},
];

type MenuItemProps = {
	Icon?: any;
	link: string;
	title: string;
	active: boolean;
};

const MenuItem = ({ Icon, title = "Products", link = "###", active = false }: MenuItemProps) => {
	let currentClassName = "h5 w5";
	const className = (currentClassName += active ? " " : " opacity-45");
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Link
					href={link}
					className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:rounded-none hover:opacity-75"
				>
					{Icon && <Icon className={className} />}
					<span className="sr-only">{title}</span>
				</Link>
			</TooltipTrigger>
			<TooltipContent side="right">{title}</TooltipContent>
		</Tooltip>
	);
};

export const LeftNavigation = () => {
	const [currentLocation] = useLocation();
	return (
		<div className="flex max-h-screen w-full flex-col bg-muted/40">
			<aside className="fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background sm:flex mt-8">
				<nav className="flex flex-col items-center gap-4 w-16 px-2 sm:py-4">
					<TooltipProvider>
						{navElements.map((menuItem) => (
							<MenuItem
								key={menuItem.title}
								Icon={menuItem.icon}
								title={menuItem.title}
								link={menuItem.link}
								active={menuItem.link == currentLocation}
							/>
						))}
					</TooltipProvider>
				</nav>
			</aside>
			<div></div>
		</div>
	);
};
