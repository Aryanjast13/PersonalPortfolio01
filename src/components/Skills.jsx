import { Backend, Frontend, Tools } from "../data/skills";

const Skills = () => {
  return (
    <div className="w-6xl h-auto  mx-auto pb-20">
      <h2 className="mb-4">My Skills</h2>
      <p className="mb-6 text-[18px]">
        Technologies I’ve Hands-On Experience With
      </p>
      <div>
        <h3 className="">Front-End</h3>

        <div className=" flex  flex-wrap items-center  gap-4 mt-5">
          {Frontend?.map((skill) => (
            <div
              key={skill._id}
              className=" px-3 py-2 sm:px-4 sm:py-2 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md border border-border transition-all duration-300 ease-in-out group hover:bg-[#191126d2] hover:rotate-[3deg] hover:scale-105"
            >
              <img
                className="transition-transform duration-300 group-hover:scale-125 w-4 "
                src={skill.image.url}
                alt={skill.name || "Tool icon"}
              />
              <span className="transition duration-300 text-[.9rem] group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500 group-hover:bg-clip-text group-hover:text-transparent">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Backend */}
      <div>
        <h3 className="mt-5">Back-End</h3>

        <div className=" flex  flex-wrap items-center  gap-4 mt-5">
          {Backend?.map((skill) => (
            <div
              key={skill._id}
              className=" px-3 py-2 sm:px-4 sm:py-2 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md border border-border transition-all duration-300 ease-in-out group hover:bg-[#191126d2] hover:rotate-[3deg] hover:scale-105"
            >
              <img
                className="transition-transform duration-300 group-hover:scale-125 w-4 "
                src={skill.image.url}
                alt={skill.name || "Tool icon"}
              />
              <span className="transition duration-300 text-[.9rem] group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500 group-hover:bg-clip-text group-hover:text-transparent">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Platforms */}
      <div>
        <h3 className="mt-5">Tools & Platforms</h3>

        <div className=" flex  flex-wrap items-center  gap-4 mt-5">
          {Tools?.map((skill) => (
            <div
              key={skill._id}
              className=" px-3 py-2 sm:px-4 sm:py-2 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md border border-border transition-all duration-300 ease-in-out group hover:bg-[#191126d2] hover:rotate-[3deg] hover:scale-105"
            >
              <img
                className="transition-transform duration-300 group-hover:scale-125 w-4 "
                src={skill.image.url}
                alt={skill.name || "Tool icon"}
              />
              <span className="transition duration-300 text-[.9rem] group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500 group-hover:bg-clip-text group-hover:text-transparent">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills