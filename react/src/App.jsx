import HeroPage from "./Components/HeroPage";
import Navbar from "./Components/Navbar";
import InfoPage from "./Components/InfoPage";
import TestimonialPage from "./Components/TestimonialPage";
import AboutPage from "./Components/AboutPage";
import AchivementPage from "./Components/AchivementPage";
import Category from "./Components/Category";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className=" ">
      <Navbar />
      <HeroPage />
      <InfoPage />
      <Category />
      <AboutPage />
      <AchivementPage />
      <TestimonialPage />
      <Footer />
    </div>
  );
};

export default App;
