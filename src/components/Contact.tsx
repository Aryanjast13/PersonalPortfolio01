
import ContactAvatar from "./ContactAvatar";
import { Link } from "react-router";
import { GithubIcon } from "./ui/GithubIcon";
import { LinkedInIcon } from "./ui/LinkedinIcon";
import { TwitterIcon } from "./ui/TwitterIcon";

const Contact = () => {
	return (
		<>
			<h2>Contact Me</h2>
			<div className="mt-5 flex h-auto w-full justify-between">
				<div className="hidden w-1/3 md:block">
					<h3>Get In Touch</h3>
					<ContactAvatar />
					<div className="mt-4 flex items-center gap-6 pl-3">
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
				<div className="w-full md:w-[60%]">
					<form className="w-full">
						<h3 className="mb-2">Send a Message</h3>
						<div className="mb-4 flex w-full flex-col gap-4 md:flex-row">
							<div className="flex w-full flex-col space-y-2 md:w-1/2">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Name"
									className="border-border rounded-md border p-2 outline-none"
								/>
							</div>
							<div className="flex w-full flex-col space-y-2 md:w-1/2">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									className="border-border rounded-md border p-2 outline-none"
								/>
							</div>
						</div>

						<div className="flex  w-[100%] flex-col space-y-2">
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								placeholder="Your message"
								className="border-border h-full rounded-md border p-2 outline-none"
							/>
						</div>
						<button
							type="submit"
							className="my-4 w-full rounded-md bg-[#23232c9e] px-3 py-2 font-medium text-[#f3f3f3] hover:bg-[#23232c9e]/80"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
