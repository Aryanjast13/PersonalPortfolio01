import { BsDownload } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";

import { GithubIcon } from "./ui/GithubIcon";
import { LinkedInIcon } from "./ui/LinkedinIcon";
import { TwitterIcon } from "./ui/TwitterIcon";

const Hero = () => {
	return (
		<div className="relative mx-auto h-auto w-full pt-20 lg:w-5xl xl:w-6xl">
			<div className="mx-auto h-full w-full pt-[.1px]">
				<div className="flex h-full w-full pt-10 px-5">
					<div className="h-autow-full md:w-[70%]">
						<h1 className="leading-none md:mb-2 text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] xl:text-[4.2rem]">
							Aryan Jast
						</h1>
						<p className="mb-4 text-[1.4rem] text-neutral-50 md:text-[1.2rem]">
							React | NextJs
						</p>
						<p className="mb-6 w-full md:w-[80%] text-lg leading-6 md:text-base">
							Driven full-stack developer with expertise in the <b>MERN</b>{" "}
							stack and growing proficiency in Next.js. Skilled in building
							responsive, user-focused web applications with a focus on
							performance, usability, and clean code
						</p>
						<div className="flex items-center gap-4">
							<button className="bg-light-shades-1 flex items-center gap-2 rounded-lg px-3 py-2">
								<BsDownload />
								<span>Resume</span>
							</button>
							<a
								href="https://github.com/Aryanjast13"
								target="_blank"
								className="mt-2"
							>
								<GithubIcon />
							</a>
							<a
								href="https://www.linkedin.com/in/aryan-kumar-370b1830a/"
								target="_blank"
							>
								<LinkedInIcon />
							</a>
							<a href="">
								<TwitterIcon />
							</a>
						</div>
					</div>

					<div className="hidden md:flex w-[35%] justify-end-safe pr-5">
						<div className="grid h-fit grid-cols-2 gap-4">
							<div className="bg-dark-shades-4 border-border flex h-22 w-22 items-center justify-center rounded-md border">
								<FaReact className="h-11 w-11 text-blue-300" />
							</div>
							<div className="bg-dark-shades-4 border-border flex h-22 w-22 items-center justify-center rounded-md border">
								<SiNextdotjs className="h-11 w-11" />
							</div>
							<div className="bg-dark-shades-4 border-border flex h-22 w-22 items-center justify-center rounded-md border">
								<SiMongodb className="h-12 w-11 text-green-300" />
							</div>
							<div className="bg-dark-shades-4 border-border flex h-22 w-22 items-center justify-center rounded-md border">
								<SiTailwindcss className="h-11 w-11 text-blue-300" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
