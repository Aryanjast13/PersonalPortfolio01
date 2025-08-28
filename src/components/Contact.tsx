import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import ContactAvatar from "./ContactAvatar";

const Contact = () => {
	return (
		<>
			<h2>Contact Me</h2>
			<div className="mt-5 flex h-auto w-full justify-between">
				<div className="w-1/3 hidden md:block">
					<h3>Get In Touch</h3>
					<ContactAvatar />
					<div className="mt-12 flex items-center gap-6 pl-3">
						<a href="">
							<BsGithub className="h-6 w-6" />
						</a>
						<a href="">
							<BsLinkedin className="h-6 w-6" />
						</a>
						<a href="">
							<BsTwitter className="h-6 w-6" />
						</a>
					</div>
				</div>
				<div className="w-full md:w-[60%]">
					<form className="w-full">
						<h3 className="mb-2">Send a Message</h3>
						<div className="mb-4 flex w-full md:flex-row flex-col  gap-4">
							<div className="flex w-full  md:w-1/2 flex-col space-y-2">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Name"
									className="border-border rounded-md border p-2 outline-none"
								/>
							</div>
							<div className="flex w-full  md:w-1/2 flex-col space-y-2">
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







						<div className="flex h-36 w-[100%] flex-col space-y-2">
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
