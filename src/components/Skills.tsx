import { Backend, Frontend, Tools } from "../data/skills";

const Skills = () => {
	return (
		<div className="mx-auto mt-20 h-auto w-full px-5 pb-20 lg:w-5xl xl:w-6xl">
			<h2 className="mb-4">My Skills</h2>
			<p className="mb-6 text-[20px]">
				Technologies I’ve Hands-On Experience With
			</p>
			<div>
				<h3 className="">Front-End</h3>

				<div className="mt-5 flex flex-wrap items-center gap-4">
					{Frontend?.map((skill) => (
						<div
							key={skill._id}
							className="border-border group hover:bg-dark-shades-2 flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-base shadow-md transition-all duration-300 ease-in-out sm:px-4 sm:py-2"
						>
							<img
								className="w-4 transition-transform duration-300 group-hover:scale-125"
								src={skill.image.url}
								alt={skill.name || "Tool icon"}
							/>
							<span className=" ">{skill.name}</span>
						</div>
					))}
				</div>
			</div>
			{/* Backend */}
			<div>
				<h3 className="mt-5">Back-End</h3>

				<div className="mt-5 flex flex-wrap items-center gap-4">
					{Backend?.map((skill) => (
						<div
							key={skill._id}
							className="border-border group hover:bg-bg-dark-shades-2 flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-base shadow-md transition-all duration-300 ease-in-out sm:px-4 sm:py-2"
						>
							<img
								className="w-4 transition-transform duration-300 group-hover:scale-125"
								src={skill.image.url}
								alt={skill.name || "Tool icon"}
							/>
							<span className="text-[.9rem] transition duration-300">
								{skill.name}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Tools & Platforms */}
			<div>
				<h3 className="mt-5">Tools & Platforms</h3>

				<div className="mt-5 flex flex-wrap items-center gap-4">
					{Tools?.map((skill) => (
						<div
							key={skill._id}
							className="border-border group hover:bg-dark-shades-2 flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-base shadow-md transition-all duration-300 ease-in-out sm:px-4 sm:py-2"
						>
							<img
								className="w-4 transition-transform duration-300 group-hover:scale-125"
								src={skill.image.url}
								alt={skill.name || "Tool icon"}
							/>
							<span className="text-[.9rem] transition duration-300">
								{skill.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
