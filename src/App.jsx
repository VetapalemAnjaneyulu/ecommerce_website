import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import AOS from "aos";
import React from "react";
import "aos/dist/aos.css";
import Topproducts from "./Components/Topproducts/Topproducts";
import Banner from "./Components/Banner/Banner";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testominals from "./Components/Testominals/Testominals";
import Footer from "./Components/Footer/Footer";
import Popup from "./Components/Popup/Popup";

  

function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[])
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <Topproducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testominals />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App