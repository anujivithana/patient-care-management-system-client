import React from 'react';
import { NavLink  } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Calendar from '../components/Calender';


export default function RegisterGuidelines() {
  return (
    <div>
      <h2 className="guidelines">Guidelines for Making Appointments</h2>
      <h4>Twenty online reservations can be done for a day while the other forty reservations are done at the hospital premises physically.
      First Numbers will be allocated for the online reservations.<br></br>
       It is a must to have the downloaded channeling chit with you when coming to the clinic.The channeling chit will be sent to the given email after confirmation with the hospital.</h4>
      <div className="mt-4 pt-2">
      <NavLink className="btn" to={"/login"}>Proceed</NavLink>
     </div>
     <Calendar/>
     <div className="contact-div" style={{display:'flex',justifyContent:'center'}}>
        <Contact />
      </div>

      <Footer />
    </div>
  )
}
