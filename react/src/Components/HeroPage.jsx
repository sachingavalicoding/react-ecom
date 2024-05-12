const HeroPage = () => {
  return (
    <section className="w-full min-h-screen grid place-items-center grid-cols-1 md:grid-cols-2 ">
      <div className="bg-slate-700 flex px-6 justify-center flex-col gap-4 w-full h-screen">
        <h1 className="text-white text-4xl font-bold">
          YOU CAN <br /> HIRE <br /> FREELANCER HERE
        </h1>
        <p className="text-white  font-medium ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page
        </p>
        <div className="w-full mt-3 flex items-center gap-6 ">
          <button className="px-6 py-2 text-[1rem] font-semibold text-white bg-red-600 border-2 duration-300 hover:bg-transparent rounded-md ">
            About us{" "}
          </button>
          <button className="px-6 py-2 text-[1rem] font-semibold text-black bg-white border-2 duration-300 hover:bg-transparent rounded-md ">
            Read More{" "}
          </button>
        </div>
      </div>
      <div className="w-full h-screen bg-teal-500 flex items-center justify-center">
        <img className="" src="/images/slider-img.png" alt="hero img " />
      </div>
    </section>
  );
};

export default HeroPage;
