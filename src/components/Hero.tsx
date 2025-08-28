import { BsDownload } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Navbar from "./Navbar";
import { GithubIcon } from "./ui/GithubIcon";
import { LinkedInIcon } from "./ui/LinkedinIcon";
import { TwitterIcon } from "./ui/TwitterIcon";

const Hero = () => {
  return (
    <div className=" w-full h-auto  relative py-20  ">
      <Navbar />
      <div className="w-full z-12 h-full mx-auto pt-[.1px]">
        <div className="w-6xl mx-auto h-full flex pt-10">
          <div className="w-4xl  h-9 ">
            <h1 className="leading-none">Aryan Jast</h1>
            <p className="text-[22px] mb-4 text-neutral-50">React | NextJs</p>
            <p className="mb-6 text-lg leading-6 w-[80%]">
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
              <a href="https://github.com/Aryanjast13" target="_blank" className="mt-2">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/aryan-kumar-370b1830a/" target="_blank">
                <LinkedInIcon />
              </a>
              <a href="">
                <TwitterIcon />
              </a>
            </div>
          </div>
         
            <div className="grid grid-cols-2 space-y-2  gap-2 w-50 ">
              <div className=" bg-dark-shades-4 border border-border flex justify-center items-center rounded-md w-22 h-22">
                <FaReact className="w-11 h-11 text-blue-300" />
              </div>
              <div className=" bg-dark-shades-4 border border-border flex justify-center items-center rounded-md w-22 h-22">
                <SiNextdotjs className="w-11 h-11 " />
              </div>
              <div className=" bg-dark-shades-4 border border-border flex justify-center items-center rounded-md w-22 h-22">
                <SiMongodb className="w-11 h-12 text-green-300" />
              </div>
              <div className=" bg-dark-shades-4 border border-border flex justify-center items-center rounded-md w-22 h-22">
                <SiTailwindcss className="w-11 h-11 text-blue-300" />
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Hero