import Contact from "./Contact";
import Hero from "./Hero";
import MobileBottomNav from "./MobileBottomNav";
import Navbar from "./Navbar";
import Project from "./Project";
import Skills from "./Skills";

const Layout = () => {
	return (
		<div className="relative md:px-5">
			<Navbar />
			<section id="hero">
				<Hero />
			</section>
			<section id="skills">
				<Skills />
			</section>
			<section id="project">
				<Project />
			</section>
			<section
				id="contact"
				className="mx-auto h-fit w-full pb-20 md:pb-0  px-5 lg:w-5xl xl:w-6xl"
			>
				<Contact />
			</section>
			<MobileBottomNav/>
		</div>
	);
};

export default Layout;
