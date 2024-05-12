const InfoPage = () => {
  return (
    <section className="w-full mt-5 mb-5 bg-white min-h-[80vh] grid grid-cols-1 md:grid-cols-2 ">
      <div className="w-full  flex items-center justify-center">
        <img className="" src="/images/experience-img.jpg" alt="hero img " />
      </div>
      <div className=" flex px-6 justify-center flex-col gap-4 w-full ">
        <h2 className=" text-4xl font-bold">BEST EXPERINCED FREELANCER HERE</h2>
        <p className=" font-medium ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as
        </p>
        <div className="w-full mt-3 flex items-center gap-6 ">
          <button className="px-6 py-2 text-[1rem] font-semibold text-white bg-red-600 border-2 duration-300 hover:bg-transparent rounded-md ">
            Read more{" "}
          </button>
          <button className="px-6 py-2 text-[1rem] font-semibold text-white bg-gray-800 bborder-2 duration-300 hover:bg-transparent rounded-md ">
            Hire me{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
