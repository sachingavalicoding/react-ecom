const categories = [
  {
    id: 0,
    image: "/images/c1.png",
    title: "Design & Arts",
  },
  {
    id: 1,
    image: "/images/c2.png",
    title: "Web Development",
  },
  {
    id: 2,
    image: "/images/c3.png",
    title: "SEO Markting",
  },
  {
    id: 3,
    image: "/images/c4.png",
    title: "Video Edting",
  },
  {
    id: 4,
    image: "/images/c5.png",
    title: "Logo Design",
  },
  {
    id: 5,
    image: "/images/c6.png",
    title: "Game Design",
  },
];
const Category = () => {
  return (
    <section className="w-full px-4 py-2 flex items-center justify-center  min-h-[70vh]  bg-teal-500 ">
      <ul className=" w-full h-full gap-x-4 gap-y-20 grid grid-cols-2 md:grid-cols-3 place-items-center">
        {categories.map((item) => {
          return (
            <li
              className="flex flex-col gap-2 items-center justify-center"
              key={item.id}
            >
              {" "}
              <img src={item.image} alt="" />
              <h3 className="font-bold text-xl text-white ">
                {" "}
                {item.title}{" "}
              </h3>{" "}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Category;
