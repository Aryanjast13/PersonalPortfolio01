import { HiHeart } from "react-icons/hi";

export default function FooterSection() {
	return (
		<footer className="border-border lg:5xl mx-auto border-t pt-8 pb-20 md:w-full md:py-8 xl:w-6xl">
			<div className="mx-auto max-w-6xl px-4 sm:px-8">
				<div className="text-foreground/60 flex flex-col items-center gap-2 text-sm">
					<div className="flex items-center gap-2">
						Built with <HiHeart className="text-red-500" /> by Aryan Jast
					</div>
				</div>
			</div>
		</footer>
	);
}
