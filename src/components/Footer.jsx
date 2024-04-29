import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/doctors"}>Doctors</NavLink>
              </li>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>Notifications</NavLink>
              </li>
              <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li>
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3>Social links</h3>
            <ul>
              <li className="facebook">
                <a
                  href="https://web.facebook.com/profile.php?id=100076306196735"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="youtube">
                <a
                  href="https://www.youtube.com/results?search_query=palliative+care+center+teaching+hospital+karapitiya"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
            
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          Made by{" "}
          <a
            href="www.linkedin.com/in/anuji-vithana-b26a5a24a"
            target="_blank"
            rel="noreferrer"
          >
            Anuji Vithana
          </a>{" "}
          © {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
