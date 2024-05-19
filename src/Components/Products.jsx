const productsArray = [
  {
    id: 0,
    name: "T-shirt ",
    category: "shirt",
    price: 2000,
    image: "/images/tshirt-img.png",
  },
  {
    id: 1,
    name: "T-shirt ",
    category: "shirt",
    price: 4000,
    image: "/images/tshirt-img.png",
  },
  {
    id: 2,
    name: "pant",
    category: "shirt",
    price: 8000,
    image: "/images/tshirt-img.png",
  },
  {
    id: 3,
    name: "T-shirt ",
    category: "shirt",
    price: 2000,
    image: "/images/tshirt-img.png",
  },
  {
    id: 4,
    name: "T-shirt ",
    category: "shirt",
    price: 4000,
    image: "/images/tshirt-img.png",
  },
  {
    id: 5,
    name: "pant",
    category: "shirt",
    price: 8000,
    image: "/images/tshirt-img.png",
  },
];
const Products = () => {
    return <div className="w-full min-h-screen  border-2  pt-8  grid grid-cols-3 gap-16 place-items-center ">
      {
        productsArray.map((item) => (
          <article key={item.id}>
            <h2 className="text-red-500 text-bold text-2xl "> {item.name} </h2>
            <img src={item.image} alt="image" />
          </article>
        ))
       }
  </div>;
};

export default Products;
