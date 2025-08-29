
import Contact from "./Contact";
import FooterSection from "./FooterSection";
import Hero from "./Hero";
import MobileBottomNav from "./MobileBottomNav";
import Navbar from "./Navbar";
import Project from "./Project";
import Skills from "./Skills";
import { useRef } from "react";

const Layout = () => {
	const heroRef = useRef(null);
     const skillsRef = useRef(null);
     const projectsRef = useRef(null);
	const contactRef = useRef(null);
	

	

	return (
		<div className="relative md:px-5 overflow-hidden">
			<Navbar
				heroRef={heroRef}
				skillsRef={skillsRef}
				projectsRef={projectsRef}
				contactRef={contactRef}
			/>
			<section ref={heroRef}>
				<Hero />
			</section>
			<section ref={skillsRef}>
				<Skills />
			</section>
			<section ref={projectsRef}>
				<Project />
			</section>
			<section
				ref={contactRef}
				className="mx-auto h-fit w-full px-5 md:pb-0 lg:w-5xl xl:w-6xl relative"
			>
				<Contact />
			</section>
			<FooterSection/>
			<MobileBottomNav
				heroRef={heroRef}
				skillsRef={skillsRef}
				projectsRef={projectsRef}
				contactRef={contactRef}
			/>
		</div>
	);
};

export default Layout;
