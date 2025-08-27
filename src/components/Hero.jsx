import { BsDownload, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="w-full h-auto  relative py-20  ">
      <Navbar />
      <div className="w-6xl h-full mx-auto pt-[.1px]">
        <div className="w-6xl  h-full flex pt-20">
          <div className="w-4xl h-9 ">
            <h1 className=" mb-2">Aryan Jast</h1>
            <p className="text-[22px] mb-6">Mern & Nextjs</p>
            <p className="mb-6 text-lg leading-6">
              A driven full-stack developer based in Kurukshetra, India, with a
              solid foundation in the <b>MERN</b> (MongoDB, Express, React,
              Node.js) stack and a growing proficiency in Next.js. I build
              responsive, user-focused web applications and always strive to
              enhance performance, usability, and code quality.
            </p>
            <div className="flex gap-4 items-center">
              <button className="bg-logos px-3 py-2 rounded-lg flex gap-2 items-center">
                <BsDownload />
                <span>Resume</span>
              </button>
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
          <div className="w-3xl h-92 pl-50 pt-2 ">
            <div className="grid grid-cols-2 gap-6 w-64 ">
              <div className="logo bg-logos border border-border flex justify-center items-center rounded-md w-30 h-30">
                <img
                  className="w-20 h-20 object-cover"
                  src="/react.svg"
                  alt=""
                />
              </div>
              <div className="logo bg-logos border border-border flex justify-center items-center rounded-md w-30 h-30">
                <img
                  className="w-20 h-20 object-cover"
                  src="/nextjs.svg"
                  alt=""
                />
              </div>
              <div className="logo bg-logos border border-border flex justify-center items-center rounded-md w-30 h-30">
                <img
                  className="w-20 h-20 object-cover"
                  src="/mongo.svg"
                  alt=""
                />
              </div>
              <div className="logo bg-logos border border-border flex justify-center items-center rounded-md w-30 h-30">
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