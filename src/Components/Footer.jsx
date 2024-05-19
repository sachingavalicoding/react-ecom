import { Link } from "react-router-dom";
import searchIcon from "/images/search-icon.png";
import Button from "./ui/Button";
const Footer = () => {
  return (
    <div className="w-full bg-black flex flex-col gap-8 items-center justify-center min-h-96">
      <nav className="flex items-center  text-white  gap-8 pl-8 ">
        <Link to={"/"}> Home </Link>
        <Link to={"/about"}> About </Link>
        <Link to={"/products"}> Products </Link>
        <Link to={"/contact"}> Contact </Link>
      </nav>
      <div className="flex flex-col justify-center gap-4">
        <div className="search-bar flex items-center relative top-0 left-0 ">
          <input
            type="search"
            name="searchbar"
            placeholder="Subscribe to connnect with us "
            className=" w-[20rem]  md:w-[25rem]  px-6  py-[0.5rem] rounded-lg  "
          />
          <img
            className="absolute top-1 right-4  p-2 bg-amber-400 rounded-full"
            src={searchIcon}
            alt="search icon "
          />
        </div>
        <Button text={ "Subscribe"}v classname={"text-white bg-amber-300 border-2 border-slate-700 hover:text-amber-300 hover:border-amber-300"} />
      </div>
    </div>
  );
};

export default Footer;
