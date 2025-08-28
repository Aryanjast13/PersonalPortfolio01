import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = () => {
	return (
		<div className="border-border group grid gap-6 overflow-hidden rounded-xl border md:grid-cols-2">
			{/* Image side */}
			<div className="relative h-[300px] overflow-hidden border-b md:h-full md:border-r md:border-b-0">
				<div className="absolute inset-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
					<img
						alt="English Expressway"
						loading="lazy"
						width={800}
						height={1200}
						decoding="async"
						className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
						src="/refokus-woad.vercel.app_.png"
					/>
				</div>
			</div>

			{/* Content side */}
			<div className="space-y-4 p-6">
				<h4 className="font-bold">Refokus</h4>
				<p className="text-muted-foreground">
					A modern digital agency site with interactive UI, smooth animations,
					and a clean, user-friendly design system
				</p>

				{/* Tech badges */}
				<div className="flex flex-wrap gap-2">
					{["Reactjs", , "Tailwind CSS", "Framer"].map((item) => (
						<span
							key={item}
							className="bg-logos text-secondary-foreground hover:bg-logos/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-sm font-semibold transition-colors"
						>
							{item}
						</span>
					))}
				</div>

				{/* Key features */}
				<div className="space-y-2">
					<h5 className="font-semibold">Key Features:</h5>
					<ul className="list-disc space-y-1 pl-5">
						<li className="text-sm">
							Fast performance and build speed with Vite
						</li>
						<li className="text-sm">
							Modern UI design system using TailwindCSS
						</li>{" "}
						<li className="text-sm">
							Smooth scrolling experience powered by Locomotive Scroll
						</li>{" "}
						<li className="text-sm">
							Interactive animations & project showcases with marquees and
							custom components
						</li>
					</ul>
				</div>

				{/* Actions */}
				<div className="flex gap-5">
					<div className="flex gap-3 pt-2">
						<a
							className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center gap-2 rounded-md px-3 text-sm font-medium whitespace-nowrap"
							href="https://refokus-woad.vercel.app"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FiExternalLink className="h-4 w-4" />
							Live
						</a>
					</div>
					{/* Github */}
					<div className="flex gap-3 pt-2">
						<a
							className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center gap-2 rounded-md px-3 text-sm font-medium whitespace-nowrap"
							href="https://github.com/Aryanjast13/Refokus"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FiGithub className="h-4 w-4" />
							Github
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
