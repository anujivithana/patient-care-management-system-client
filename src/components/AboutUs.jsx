import React from "react";
import image from "../images/aboutimg1.jpeg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            The need for palliative care center in the Sri Lanka, 
            as in other countries, keeps growing because of increased
            life expectancy, increasing number of elderly, the 
            increased incidence of cancer and other incurable diseases.
            In light of this increase and because of the need for 
            this service and as part of the efforts of the palliative 
            care team, Teaching Hospital karapitiya Sri Lanka.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;