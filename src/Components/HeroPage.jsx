import logo from "/images/logo.png";
import barIcon from "/images/toggle-icon.png";
import searchIcon from "/images/search-icon.png";
import cartIcon from "/images/user-icon.png";
import Button from "./ui/Button";
const HeroPage = () => {
  return (
    <main className="w-full pt-2 md:pt-8 bg-cover bg-center bg-no-repeat h-screen bg-hero-image ">
      <div className="w-full flex items-center justify-center mt-20 ">
        <img src={logo} alt="logo" />
      </div>
      <header className="w-full grid  items-center  mt-4">
        <div className="container mx-auto flex items-center justify-center gap-10  py-2 px-6 lg:px-16">
          <img className="h-8" src={barIcon} alt="bar icons " />
          <div className="selector hidden lg:flex">
            <select
              className="px-4 text-[1rem]  rounded-lg py-2 bg-slate-800 text-white"
              name="category"
              id=""
            >
              <option className="bg-white text-black" value="T-shirt">
                {" "}
                Select Category{" "}
              </option>
              <option className="bg-white text-black" value="T-shirt">
                {" "}
                T-shirt{" "}
              </option>
              <option className="bg-white text-black" value="T-shirt">
                {" "}
                Pant{" "}
              </option>
              <option className="bg-white text-black" value="T-shirt">
                {" "}
                Shooes{" "}
              </option>
            </select>
          </div>
          <div className="search-bar flex items-center relative top-0 left-0 ">
            <input
              type="search"
              name="searchbar"
              placeholder="Search the product "
              className=" w-full md:w-[25rem] lg:w-[35rem] px-6 py-[0.5rem] rounded-lg  "
            />
            <img
              className="absolute top-1 right-4  p-2 bg-amber-400 rounded-full"
              src={searchIcon}
              alt="search icon "
            />
          </div>
          <div className="selector hidden lg:flex">
            <select
              name="category"
              id=""
              className="px-4 text-[1rem]  rounded-lg py-2 bg-white text-black"
            >
              <option value="T-shirt"> Select Language </option>
              <option value="T-shirt"> English </option>
              <option value="T-shirt"> Hindi </option>
              <option value="T-shirt"> Marathi </option>
            </select>
          </div>
          <div className="cart-div hidden  xl:flex">
            <div className=" flex items-center gap-4">
              <h3 className="font-semibold  text-white "> CART </h3>
              <img src={cartIcon} alt="cart icon " />
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-[65rem] flex-wrap mx-auto mt-40 flex items-center justify-center flex-col  gap-8 ">
        <h2 className="font-bold text-4xl md:text-6xl  text-center text-white">
          GET START{" "}
        </h2>
        <h2 className="font-bold text-4xl md:text-6xl  text-center text-white">
          YOUR FAVRIOT SHOPING
        </h2>
        <Button text={"BUY NOW "} />
      </div>
    </main>
  );
};

export default HeroPage;
