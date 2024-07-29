import { BiMenuAltLeft as MenuLeft } from "react-icons/bi";
import { BsThreeDotsVertical as ContextMenuIcon } from "react-icons/bs";

export const Menu = () => {
	return (
		<div className="grid grid-cols-12 gap-4 py-4">
			<div className="col-span-1">
				<MenuLeft color="white" size="2rem" />
			</div>
			<div className="col-span-8 text-center text-white">ChatAI</div>
			<div className="col-span-2">
				<ContextMenuIcon size="1.5rem" color="white" />
			</div>
		</div>
	);
};
