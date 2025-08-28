
const Navbar = () => {
  return (
    <div className="fixed z-50 inset-0  h-20 bg-navbar backdrop-blur-md  px-20 py-4 ">
      <nav className=" text-navbarText w-6xl mx-auto flex justify-between py-2   items-center ">
        <div>Logo</div>
        <ul className="flex gap-10 text-base">
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar