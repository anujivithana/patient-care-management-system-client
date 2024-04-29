import React from "react";
import image from "../images/heroimg1.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
        Relieves suffering ..<br />
        Enhances well-being.. 
        </h1>
        <p>
        Palliative care supports patients with incurable diseases and their families, offering love, care, and symptom management.  This fundraiser builds a center at Karapitiya Hospital to provide this comfort.
        </p>
        
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
