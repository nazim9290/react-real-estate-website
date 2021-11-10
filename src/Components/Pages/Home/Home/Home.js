import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import NavBar from "../../../Shared/NavBar/NavBar";
import Properties from "../../Properties/Properties";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Properties />
      <ContactUs />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
