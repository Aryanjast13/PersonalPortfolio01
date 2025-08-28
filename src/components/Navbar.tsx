import { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { HiX } from "react-icons/hi";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<div className="bg-navbar fixed inset-x-0 top-4 z-50 mx-auto h-18 rounded-4xl px-10 py-4 backdrop-blur-md md:w-full md:px-20 lg:w-5xl xl:w-6xl">
				<nav className="text-navbarText relative flex w-full items-center justify-between py-2">
					<div>Logo</div>

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
					<ul className="hidden gap-10 text-base md:flex">
						<a href="#hero">Home</a>
						<a href="#skills">Skills</a>
						<a href="#projects">Projects</a>
						<a href="#contact">Contact</a>
					</ul>
				</nav>
			</div>
			{/* Mobile menu with animation */}
			<div
				className={`bg-navbar fixed top-24 left-0 z-40 flex w-full flex-col py-2 items-center justify-center space-y-6 rounded-4xl text-base backdrop-blur-md transition-transform duration-300 md:hidden ${
					menuOpen
						? "pointer-events-auto translate-y-0 opacity-100"
						: "pointer-events-none -translate-y-10 opacity-0"
				}`}
				style={{ transitionProperty: "transform, opacity" }}
				onClick={() => setMenuOpen(false)}
			>
				<a href="#hero" className="hover:underline">
					Home
				</a>
				<a href="#skills" className="hover:underline">
					Skills
				</a>
				<a href="#projects" className="hover:underline">
					Projects
				</a>
				<a href="#contact" className="hover:underline">
					Contact
				</a>
			</div>
		</>
	);
};

export default Navbar;
