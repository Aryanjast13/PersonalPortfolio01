import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import ContactAvatar from "./ContactAvatar";

const Contact = () => {
  return (
    <div className="w-6xl h-auto mx-auto">
      <h2>Contact Me</h2>
      <div className="w-6xl h-40 mt-5 flex justify-between">
        <div className="w-2xl">
          <h3>Get In Touch</h3>
          <ContactAvatar />
          <div className="flex gap-6 items-center mt-12 pl-3">
            <a href="">
              <BsGithub className="w-6 h-6" />
            </a>
            <a href="">
              <BsLinkedin className="w-6 h-6" />
            </a>
            <a href="">
              <BsTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className=" w-4xl h-32">
          <form className="w-full ">
            <h3 className="mb-2">Send a Message</h3>
            <div className="flex gap-4 mb-4">
              <div className="flex flex-col w-[50%] space-y-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="outline-none border border-border rounded-md p-2 "
                />
              </div>
              <div className="flex flex-col w-[50%] space-y-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="outline-none border border-border rounded-md p-2"
                />
              </div>
            </div>
            <div className="flex flex-col w-[100%] h-36 space-y-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                className="outline-none h-full border border-border rounded-md p-2"
              />
            </div>
            <button
              type="submit"
              className="px-3 py-2 rounded-md bg-logos hover:bg-logos/80 w-full my-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact