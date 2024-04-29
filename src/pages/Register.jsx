import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../styles/register.css";
import axios from 'axios';
import { NavLink  } from "react-router-dom";


function Register() {
  const [startDate, setStartDate] = useState(null);

  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    gender:"",
    contact_number:"",
    NIC_Number:"",
    email: "",
    password: "",
    //appointment_date: "",
  });

  const handleSubmit =(event) =>{
    event.preventDefault();
    axios.post('http://localhost8081/register',formDetails)
    .then(res => console.log(res))
    .then(err => console.log(err));
  }


  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                       <input type="text" id="firstName" className="form-control form-control-lg" placeholder="First Name" onChange={e => setFormDetails({...formDetails, firstname: e.target.formDetails})}/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="lastName" className="form-control form-control-lg" placeholder= "Last Name" onChange={e => setFormDetails({...formDetails, lastname: e.target.formDetails})}/>
                    
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="w-100">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="lastName" className="form-control form-control-lg" placeholder= "Birthday" onChange={e => setFormDetails({...formDetails, birthday: e.target.formDetails})}/>
                    
                        </div>
                          {/* <label htmlFor="birthdayDate" className="form-label">Birthday</label> */}
                          
                          <DatePicker
                            className="form-control form-control-lg"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="dd/MM/yyyy"
                            id="appointmentDate"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            placeholderText="Select appointment date"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" value="option1" checked onChange={e => setFormDetails({...formDetails, gender: e.target.formDetails})}/>
                          <label className="form-check-label" htmlFor="femaleGender">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" value="option2" />
                          <label className="form-check-label" htmlFor="maleGender">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" value="option3" />
                          <label className="form-check-label" htmlFor="otherGender">Other</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div data-mdb-input-init className="form-outline">
                          <input type="email" id="emailAddress" className="form-control form-control-lg" placeholder="Email" onChange={e => setFormDetails({...formDetails, email: e.target.formDetails})}/>
                          {/* <label className="form-label" htmlFor="emailAddress">Email</label> */}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div data-mdb-input-init className="form-outline">
                          <input type="tel" id="phoneNumber" className="form-control form-control-lg" placeholder="Contact Number" onChange={e => setFormDetails({...formDetails, contact_number: e.target.formDetails})}/>
                          {/* <label className="form-label" htmlFor="phoneNumber">Phone Number</label> */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                       <input type="text" id="NIC" className="form-control form-control-lg" placeholder="NIC Number" onChange={e => setFormDetails({...formDetails, NIC_Number: e.target.formDetails})}/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="password" className="form-control form-control-lg" placeholder= "Password" onChange={e => setFormDetails({...formDetails, password: e.target.formDetails})}/>
                    
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <select className="select form-control-lg">
                          <option value="1" disabled>Select the Clinic</option>
                          <option value="2">Palliative Care Clinic</option>
                          <option value="3">Breast Clinic</option>
                          {/* <option value="4">Subject 3</option> */}
                        </select>
                        <label className="form-label select-label">  </label>
                      </div>
                    </div>
                    
                    {/* <div className="mt-4 pt-2">
                       <input data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg" type="submit" value="Submit" />
                    </div> */}
                    <div className="mt-4 pt-2">
      <button onClick={handleClick} type="button">Submit</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <p>Download the channeling chit or (display) there are no any available reservations.</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>

                    <p>Made appointments before? <a href="http://localhost:3000/login" className="link-info">Login here</a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
