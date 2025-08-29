import { useState } from "react";

export default function ContactAvatar() {
	const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: any) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;

		// pupil movement clamp
		const limit = 6;
		const clampedX = Math.max(-limit, Math.min(limit, x / 15));
		const clampedY = Math.max(-limit, Math.min(limit, y / 15));

		setPupilPos({ x: clampedX, y: clampedY });
	};

	return (
		<div
			className="relative flex w-full items-center "
			onMouseMove={handleMouseMove}
		>
			{/* Avatar image */}
			<img
				src="footer-avatar-vinod.png"
				alt="animation-head"
				className="z-10 h-50 w-40"
				id="footer-wala-avatar"
			/>

			{/* Eyes wrapper */}
			<div className="absolute top-[40%] left-[8%] flex gap-2">
				{/* Left Eye */}
				<div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#dfd2d2] shadow-[inset_-6px_-8px_4px_rgba(0,0,0,0.35)]">
					<div className="absolute left-[10px] z-20 h-[5px] w-[2px] rotate-45 rounded-full bg-[rgba(214,214,214,0.726)] blur-[0.2px]"></div>
					<div
						className="h-4 w-4 rounded-full border-[3px] border-[#413333] bg-black blur-[0.6px] transition-transform duration-75"
						style={{ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }}
					></div>
				</div>

				{/* Right Eye */}
				<div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#dfd2d2] shadow-[inset_6px_6px_4px_rgba(0,0,0,0.25)]">
					<div className="absolute left-[10px] z-20 h-[5px] w-[2px] rotate-45 rounded-full bg-[rgba(214,214,214,0.726)] blur-[0.2px]"></div>
					<div
						className="h-4 w-4 rounded-full border-[3px] border-[#413333] bg-black blur-[0.6px] transition-transform duration-75"
						style={{ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }}
					></div>
				</div>
			</div>
		</div>
	);
}
