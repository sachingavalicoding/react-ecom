import Footer from "./Components/Footer";
import HomePage  from  "./Components/HomePage"
import {BrowserRouter , Route , Routes}  from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
