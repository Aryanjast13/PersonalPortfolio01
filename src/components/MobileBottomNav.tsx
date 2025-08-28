import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { HiHome, HiMail } from "react-icons/hi";

export default function MobileBottomNav() {
	const [active, setActive] = useState("home");

	const navItems = [
		{ id: "home", label: "Home", icon: <HiHome size={24} />, href: "#hero" },
		{
			id: "skills",
			label: "Skills",
			icon: <FaCode size={24} />,
			href: "#skills",
		},
		{
			id: "projects",
			label: "Projects",
			icon: <GoProjectSymlink size={24} />,
			href: "#projects",
		},
		{
			id: "contact",
			label: "Contact",
			icon: <HiMail size={24} />,
			href: "#contact",
		},
	];

	return (
		<nav className="bg-navbar/80 fixed right-2 bottom-2 left-2 py-2 z-50 rounded-4xl shadow-md backdrop-blur-md md:hidden">
			<ul className="mx-auto flex max-w-lg items-center justify-around px-4 py-2">
				{navItems.map(({ id,  icon, href }) => (
					<li key={id}>
						<a
							href={href}
							onClick={() => setActive(id)}
							className={`flex flex-col items-center text-sm  ${
								active === id ? "text-[#d5e6ec]" : "text-[#4f658c]"
							}`}
						>
							{icon}
							
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
