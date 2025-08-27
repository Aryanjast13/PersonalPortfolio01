import Contact from "./Contact"
import Hero from "./Hero"
import Project from "./Project"
import Skills from "./Skills"

const Layout = () => {
  return (
      <div className="">
          <Hero />
          <Skills />
          <Project />
          <Contact/>
    </div>
  )
}

export default Layout