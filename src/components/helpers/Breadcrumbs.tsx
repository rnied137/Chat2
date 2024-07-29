import { Link, useLocation } from "wouter";

const Breadcrumbs = () => {
	const [location] = useLocation();
	const pathnames = location.split("/").filter((x) => x);

	return (
		<>
			{pathnames.map((value, index) => {
				const to = `/${pathnames.slice(0, index + 1).join("/")}`;
				const isLast = index === pathnames.length - 1;

				return (
					<div key={to} className="inline-block">
						{isLast ? (
							<div className="text-zinc-500">/{value}</div>
						) : (
							<Link className="inline-block" href={to}>
								/{value}
							</Link>
						)}
					</div>
				);
			})}
		</>
	);
};

export default Breadcrumbs;
