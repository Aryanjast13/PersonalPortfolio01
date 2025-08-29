import { useState, useEffect } from "react";
import { SlMenu } from "react-icons/sl";
import { HiX } from "react-icons/hi";

type NavbarProps = {
	heroRef: React.RefObject<HTMLElement | null>;
	skillsRef: React.RefObject<HTMLElement | null>;
	projectsRef: React.RefObject<HTMLElement | null>;
	contactRef: React.RefObject<HTMLElement |null >;
};

const Navbar = ({
	heroRef,
	skillsRef,
	projectsRef,
	contactRef,
}: NavbarProps) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("Home");

	// Scroll event handler to detect active section
	useEffect(() => {
		const handleScroll = () => {
			const sections = [
				{ name: "Home", ref: heroRef },
				{ name: "Skills", ref: skillsRef },
				{ name: "Projects", ref: projectsRef },
				{ name: "Contact", ref: contactRef },
			];

			const scrollPosition = window.scrollY + window.innerHeight / 2;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (section.ref.current) {
					const offsetTop = section.ref.current.offsetTop;
					if (scrollPosition >= offsetTop) {
						setActiveSection(section.name);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial check

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [heroRef, skillsRef, projectsRef, contactRef]);

	const navItems = [
		{ label: "Home", ref: heroRef },
		{ label: "Skills", ref: skillsRef },
		{ label: "Projects", ref: projectsRef },
		{ label: "Contact", ref: contactRef },
	];

	const handleScrollTo = (ref: React.RefObject<HTMLElement|null>, label: string) => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
		setActiveSection(label);
		setMenuOpen(false);
	};

	return (
		<>
			<div className="bg-navbar fixed inset-x-0 top-4 z-50 mx-auto h-18 rounded-4xl px-10 py-4 backdrop-blur-md md:w-full md:px-20 lg:w-5xl xl:w-6xl">
				<nav className="text-navbarText relative flex w-full items-center justify-between py-2">
					<div><img src="/AryanLogo.png" className=" w-7 h-7" alt="" /></div>

					{/* Menu toggle button */}
					<button
						className="focus:outline-none md:hidden"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle menu"
					>
						{menuOpen ? (
							<HiX className="h-6 w-6" />
						) : (
							<SlMenu className="h-5 w-5" />
						)}
					</button>

					{/* Desktop menu */}
					<ul className="hidden gap-16 text-base md:flex">
						{navItems.map(({ label, ref }) => (
							<li key={label}>
								<button
									onClick={() => handleScrollTo(ref, label)}
									className={`relative flex items-center text-sm ${
										activeSection === label
											? "selected text-[#1e7ebd]"
											: "text-[#dee3ea]"
									}`}
								>
									{label}
								</button>
							</li>
						))}
					</ul>
				</nav>
			</div>

			{/* Mobile menu with animation */}
			<div
				className={`bg-navbar fixed top-24 left-0 z-40 flex w-full flex-col items-center justify-center space-y-6 rounded-4xl py-2 text-base backdrop-blur-md transition-transform duration-300 md:hidden ${
					menuOpen
						? "pointer-events-auto translate-y-0 opacity-100"
						: "pointer-events-none -translate-y-10 opacity-0"
				}`}
				style={{ transitionProperty: "transform, opacity" }}
				onClick={() => setMenuOpen(false)}
			>
				{navItems.map(({ label, ref }) => (
					<button
						key={label}
						onClick={() => handleScrollTo(ref, label)}
						className={`text-sm ${
							activeSection === label
								? " text-[#1e7ebd]"
								: "text-[#dee3ea]"
						}`}
					>
						{label}
					</button>
				))}
			</div>
		</>
	);
};

export default Navbar;
