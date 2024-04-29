import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <HomeCircles />
      <div className="contact-div" style={{display:'flex',justifyContent:'center'}}>
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Home;
