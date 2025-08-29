import { SiReact, SiTailwindcss, SiVercel } from "react-icons/si";
import packageJson from "../../package.json";

export default function FooterSection() {
	return (
		<footer className=" border-t border-border pb-20 pt-8 xl:w-6xl lg:5xl md:w-full mx-auto md:py-8">
			<div className="mx-auto max-w-6xl px-4 sm:px-8">
				<div className="text-foreground/60 flex flex-col items-center gap-2 text-sm">
					{/* Built with */}
					<div className="flex items-center gap-2">
						<span>Built with</span>
						<SiTailwindcss className="text-[#06B6D4]" size={16} />
						<span>{packageJson.devDependencies["tailwindcss"]}</span>
						<span>•</span>
						<SiReact className="text-[#61DAFB]" size={16} />
						<span>{packageJson.dependencies["react"]}</span>
						<span>•</span>
						<span>powered by</span>
						<SiVercel size={14} className="text-white" />
					</div>
				</div>
			</div>
		</footer>
	);
}
