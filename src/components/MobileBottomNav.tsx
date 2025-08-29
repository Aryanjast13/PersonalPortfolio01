

import { useState, useEffect } from "react";
import { HiHome, HiMail } from "react-icons/hi";
import { FaCode } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

type MobileBottomNavProps = {
	heroRef: React.RefObject<HTMLElement | null>;
	skillsRef: React.RefObject<HTMLElement | null>;
	projectsRef: React.RefObject<HTMLElement | null>;
	contactRef: React.RefObject<HTMLElement | null>;
};

export default function MobileBottomNav({
	heroRef,
	skillsRef,
	projectsRef,
	contactRef,
}: MobileBottomNavProps) {
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			const sections = [
				{ id: "home", ref: heroRef },
				{ id: "skills", ref: skillsRef },
				{ id: "projects", ref: projectsRef },
				{ id: "contact", ref: contactRef },
			];

			const scrollPosition = window.scrollY + window.innerHeight / 2;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (section.ref.current) {
					const offsetTop = section.ref.current.offsetTop;
					if (scrollPosition >= offsetTop) {
						setActiveSection(section.id);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial call

		return () => window.removeEventListener("scroll", handleScroll);
	}, [heroRef, skillsRef, projectsRef, contactRef]);

	const handleScrollTo = (ref: React.RefObject<HTMLElement|null>, id: string) => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
		setActiveSection(id);
	};

	const navItems = [
		{ id: "home", label: "Home", icon: <HiHome size={24} />, ref: heroRef },
		{
			id: "skills",
			label: "Skills",
			icon: <FaCode size={24} />,
			ref: skillsRef,
		},
		{
			id: "projects",
			label: "Projects",
			icon: <GoProjectSymlink size={24} />,
			ref: projectsRef,
		},
		{
			id: "contact",
			label: "Contact",
			icon: <HiMail size={24} />,
			ref: contactRef,
		},
	];

	return (
		<nav className="bg-navbar/80 fixed right-2 bottom-2 left-2 z-50 rounded-4xl py-2 shadow-md backdrop-blur-md md:hidden">
			<ul className="mx-auto flex max-w-lg items-center justify-around px-4 py-2">
				{navItems.map(({ id, icon, ref }) => (
					<li key={id}>
						<button
							onClick={() => handleScrollTo(ref, id)}
							className={`flex flex-col items-center text-sm ${
								activeSection === id ?  "text-[#d5e6ec]" : "text-[#4f658c]"
							}`}
						>
							{icon}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}

