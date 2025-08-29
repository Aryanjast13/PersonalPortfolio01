
import ContactAvatar from "./ContactAvatar";
import { Link } from "react-router";
import { GithubIcon } from "./ui/GithubIcon";
import { LinkedInIcon } from "./ui/LinkedinIcon";
import { TwitterIcon } from "./ui/TwitterIcon";
import { useState, type FormEvent } from "react";
import axios from "axios"

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message:""
	})
	const [showMessage, setShowMessage] = useState(false);
	const [loading, setLoading] = useState(false);

	const URL = import.meta.env.VITE_Backend_Url


	const handleSubmit = async (e: FormEvent) => {
		setLoading(true);
		e.preventDefault();
		const response = await axios.post(`${URL}/api/contact`, { name:formData.name,email:formData.email,message:formData.message });
		const result = await response.data;
		if (result.ok) {
			setShowMessage(true)
			setLoading(false);

			setTimeout(() => {
				setShowMessage(false);
		},3000);
		} 
		console.log(result);
		setFormData({ name: "", email: "", message: "" });
	}

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	}

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
					<div
						className={`absolute top-5 right-5 flex transform items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800 shadow-lg shadow-emerald-100 transition-all duration-500 ease-out ${showMessage ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-emerald-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						Successfully sent
					</div>
					<form onSubmit={handleSubmit} className="w-full">
						<h3 className="mb-2">Send a Message</h3>
						<div className="mb-4 flex w-full flex-col gap-4 md:flex-row">
							<div className="flex w-full flex-col space-y-2 md:w-1/2">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									name="name"
									id="name"
									required
									value={formData.name}
									onChange={handleChange}
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
									required
									value={formData.email}
									onChange={handleChange}
									placeholder="Email"
									className="border-border rounded-md border p-2 outline-none"
								/>
							</div>
						</div>

						<div className="flex w-[100%] flex-col space-y-2">
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								required
								value={formData.message}
								onChange={handleChange}
								placeholder="Your message"
								className="border-border h-full rounded-md border p-2 outline-none"
							/>
						</div>
						<button
							type="submit"
							className="my-4 w-full rounded-md bg-[#23232c9e] px-3 py-2 font-medium text-[#f3f3f3] hover:bg-[#23232c9e]/80"
						>
							{loading ? "...Submitting" : "Submit"}
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
