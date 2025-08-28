
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 border border-border rounded-xl overflow-hidden group">
      {/* Image side */}
      <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
        <div className="absolute inset-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <img
            alt="English Expressway"
            loading="lazy"
            width={800}
            height={1200}
            decoding="async"
            className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
            src="/refokus-woad.vercel.app_.png"
          />
        </div>
      </div>

      {/* Content side */}
      <div className="p-6 space-y-4">
        <h4 className="font-bold">Refokus</h4>
        <p className="text-muted-foreground">
          A modern digital agency site with interactive UI, smooth animations,
          and a clean, user-friendly design system
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {["Reactjs", , "Tailwind CSS", "Framer"].map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors border-transparent bg-logos text-secondary-foreground hover:bg-logos/80"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Key features */}
        <div className="space-y-2">
          <h5 className="font-semibold">Key Features:</h5>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-sm">
              Fast performance and build speed with Vite
            </li>
            <li className="text-sm">
              Modern UI design system using TailwindCSS
            </li>{" "}
            <li className="text-sm">
              Smooth scrolling experience powered by Locomotive Scroll
            </li>{" "}
            <li className="text-sm">
              Interactive animations & project showcases with marquees and
              custom components
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className=" flex gap-5">
          <div className="flex gap-3 pt-2">
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
              href="https://refokus-woad.vercel.app"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiExternalLink className="h-4 w-4" />
              Live
            </a>
          </div>
          {/* Github */}
          <div className="flex gap-3 pt-2">
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
              href="https://github.com/Aryanjast13/Refokus"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiGithub className="h-4 w-4" />
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard