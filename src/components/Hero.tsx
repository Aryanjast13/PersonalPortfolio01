import { FaReact } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router";
import { DownloadIcon } from "./ui/DownloadIcon";
import { GithubIcon } from "./ui/GithubIcon";
import { LinkedInIcon } from "./ui/LinkedinIcon";
import { TwitterIcon } from "./ui/TwitterIcon";

const Hero = () => {
	const resumeUrl =
		"https://drive.google.com/uc?export=download&id=1-YG3zLJiHd257coRXplF4p713nhoTR4T";

	return (
		<div className="relative mx-auto h-auto w-full pt-20 lg:w-5xl xl:w-6xl">
			<div className="mx-auto h-full w-full pt-[.1px]">
				<div className="flex h-full w-full px-5 pt-10">
					<div className="h-autow-full md:w-[70%]">
						<h1 className="text-[2.4rem] leading-none md:mb-2 md:text-[3rem] lg:text-[3.6rem] xl:text-[4.2rem]">
							Aryan Jast
						</h1>
						<p className="mb-4 text-[1.4rem] text-neutral-50 md:text-[1.2rem]">
							React | NextJs
						</p>
						<p className="mb-6 w-full text-lg leading-6 md:w-[80%] md:text-base">
							Driven full-stack developer with expertise in the <b>MERN</b>{" "}
							stack and growing proficiency in Next.js. Skilled in building
							responsive, user-focused web applications with a focus on
							performance, usability, and clean code
						</p>
						<div className="flex items-center gap-4">
							<Link
								to={resumeUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 rounded-lg bg-[#5a4e4e33] px-3 py-2 hover:bg-[#5a4e4e33]/50"
							>
								<DownloadIcon size={21} />
								<span className="mt-1 text-base">Resume</span>
							</Link>
							<Link
								to="https://github.com/Aryanjast13"
								target="_blank"
								className="mt-3"
							>
								<GithubIcon size={23} />
							</Link>
							<Link
								to="https://www.linkedin.com/in/aryan-kumar-370b1830a/"
								target="_blank"
							>
								<LinkedInIcon size={23} className="mt-3" />
							</Link>
							<Link to="">
								<TwitterIcon size={22} className="mt-3" />
							</Link>
						</div>
					</div>

					<div className="hidden w-[35%] justify-end-safe pr-5 md:flex">
						<div className="grid h-fit grid-cols-2 gap-4">
							<div className="bg-dark-shades-4 border-border flex h-22 w-22 items-center justify-center rounded-md border">
								<FaReact className="rotate-infinite h-10 w-10 text-blue-300" />
							</div>
							<div className="bg-dark-shades-4 border-border up-down flex h-22 w-22 items-center justify-center rounded-md border">
								<SiNextdotjs className="h-10 w-10" />
							</div>
							<div className="bg-dark-shades-4 border-border flex h-22 w-22 items-center justify-center rounded-md border">
								<SiMongodb className="mongoUp-down h-12 w-10 text-green-300" />
							</div>
							<div className="bg-dark-shades-4 border-border flex h-22 w-22 items-center justify-center rounded-md border">
								<SiTailwindcss className="h-10 w-10 text-blue-300" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
