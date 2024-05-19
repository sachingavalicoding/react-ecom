const navItems = [
  {
    name: "Best Sellers",
    id: 1,
  },
  {
    name: "Best Sellers",
    id: 2,
  },
  {
    name: "Best Sellers",
    id: 3,
  },
  {
    name: "Best Sellers",
    id: 4,
  },
  {
    name: "Best Sellers",
    id: 5,
  },
];

const SmNav = () => {
  return (
    <div className=" w-full absolute top-0 left-0   ">
      <ul className="max-w-[70rem]  mx-auto px-2 py-6 rounded-lg bg-slate-900 text-white hidden md:flex  items-center justify-center gap-8 ">
        {navItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SmNav;
