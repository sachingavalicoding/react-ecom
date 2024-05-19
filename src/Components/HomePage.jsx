import HeroPage from "./HeroPage";
import SmNav from "./SmNav";
import MenWomanSection from "./section/MenWomanSection";

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
];

const productsArray1 = [
  {
    id: 0,
    name: "T-shirt ",
    category: "shirt",
    price: 2000,
    image: "/images/computer-img.png",
  },
  {
    id: 1,
    name: "T-shirt ",
    category: "shirt",
    price: 4000,
    image: "/images/computer-img.png",
  },
  {
    id: 2,
    name: "pant",
    category: "shirt",
    price: 8000,
    image: "/images/computer-img.png",
  },
];
const productArray3 = [
  {
    id: 0,
    name: "T-shirt ",
    category: "shirt",
    price: 2000,
    image: "/images/jhumka-img.png",
  },
  {
    id: 1,
    name: "T-shirt ",
    category: "shirt",
    price: 4000,
    image: "/images/kangan-img.png",
  },
  {
    id: 2,
    name: "pant",
    category: "shirt",
    price: 8000,
    image: "/images/neklesh-img.png",
  },
];

const HomePage = () => {
  return (
    <div className={`w-full  min-h-screen `}>
      <SmNav />
      <HeroPage />
      <MenWomanSection title={" Man & Woman Fashion"} data={productsArray} />
      <MenWomanSection title={" Electronic"} data={productsArray1} />
      <MenWomanSection title={" Electronic "} data={productArray3} />
    </div>
  );
};

export default HomePage;
