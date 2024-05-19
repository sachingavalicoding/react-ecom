import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import baricon from "/images/toggle-icon.png";
import { useState } from "react";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="w-full grid place-items-center fixed top-0 left-0 border-2 bg-slate-200 shadow-lg">
      <div className="   container  flex items-center justify-between  px-8 lg:px-16">
        <div className="h-16 flex items-center justify-center">
          <img src={logo} alt="logo image " />
        </div>
        <nav className="hidden md:flex gap-8   ">
          <Link to={"/"}> Home </Link>
          <Link to={"/about"}> About </Link>
          <Link to={"/products"}> Products </Link>
          <Link to={"/contact"}> Contact </Link>
        </nav>
        <div className="flex md:hidden ">
          <img
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="h-8"
            src={baricon}
            alt="baricon"
          />
        </div>
        <div
          className={`bg-black fixed right-0 top-0 w-80 min-h-screen   duration-500 ${
            isNavOpen ? "flex md:hidden" : "hidden"
          }  `}
        >
          <div className="flex fixed right-5 top-5 md:hidden ">
            <img
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="h-6"
              src={baricon}
              alt="baricon"
            />
          </div>
          <nav className="flex flex-col text-white mt-20 gap-8 pl-8 ">
            <Link to={"/"}> Home </Link>
            <Link to={"/about"}> About </Link>
            <Link to={"/products"}> Products </Link>
            <Link to={"/contact"}> Contact </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
