const AboutPage = () => {
  return (
    <section className="w-full min-h-screen grid place-content-center ">
      <img src="/images/about-img.jpg" alt="about image" />
      <div className=" flex px-6 justify-center flex-col gap-4 w-full ">
        <h2 className=" text-4xl font-bold">ABOUT SPERING COMPANY</h2>
        <p className=" font-medium ">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable. If youThere are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in some form, by
          injected humour, or randomised words which do not look even slightly
          believable. If you
        </p>
        <div className="w-full mt-3 flex items-center gap-6 ">
          <button className="px-6 py-2 text-[1rem] font-semibold text-white bg-red-600  duration-300 border-2 hover:bg-transparent rounded-md ">
            Read more{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
