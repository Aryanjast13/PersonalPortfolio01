import { BsDownload, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className=" w-full h-auto  relative py-20  ">
      <Navbar />
      <div className="w-full z-12 h-full mx-auto pt-[.1px]">
        <div className="w-6xl mx-auto h-full flex pt-20">
          <div className="w-4xl h-9 ">
            <h1 className="">Aryan Jast</h1>
            <p className="text-[22px] mb-4 text-neutral-50">React | NextJs</p>
            <p className="mb-6 text-lg leading-6">
              Driven full-stack developer with expertise in the <b>MERN</b>{" "}
              stack and growing proficiency in Next.js. Skilled in building
              responsive, user-focused web applications with a focus on
              performance, usability, and clean code
            </p>
            <div className="flex gap-4 items-center">
              <button className="bg-light-shades-1 px-3 py-2 rounded-lg flex gap-2 items-center">
                <BsDownload />
                <span>Resume</span>
              </button>
              <a href="">
                <BsGithub className="w-7 h-7 text-light-shades-3" />
              </a>
              <a href="">
                <BsLinkedin className="w-7 h-7 text-light-shades-3" />
              </a>
              <a href="">
                <BsTwitter className="w-7 h-7 text-light-shades-3" />
              </a>
            </div>
          </div>
          <div className="w-3xl h-92 pl-50 pt-2 z-12 ">
            <div className="grid grid-cols-2 gap-4 w-54 ">
              <div className="logo bg-dark-shades-4 border border-border flex justify-center items-center rounded-md w-25 h-25">
                <img
                  className="w-20 h-20 object-cover"
                  src="/react.svg"
                  alt=""
                />
              </div>
              <div className="logo bg-dark-shades-4 border border-border flex justify-center items-center rounded-md w-25 h-25">
                <img
                  className="w-20 h-20 object-cover"
                  src="/nextjs.svg"
                  alt=""
                />
              </div>
              <div className="logo bg-dark-shades-4 border border-border flex justify-center items-center rounded-md w-25 h-25">
                <img
                  className="w-20 h-20 object-cover"
                  src="/mongo.svg"
                  alt=""
                />
              </div>
              <div className="logo bg-dark-shades-4 border border-border flex justify-center items-center rounded-md w-25 h-25">
                <img
                  className="w-20 h-20 object-cover"
                  src="/tailwind.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero