import React from 'react';
import "../styles/login.css";
import image from "../images/sloginimg.jpg";

export default function Login() {
  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
              <span className="h1 fw-bold mb-0">Palliative Care Center</span>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: '23rem' }}>
                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Staff Log in</h3>
                <div data-mdb-input-init className="form-outline mb-4">
                <select className="select form-control-lg">
                          <option value="1" disabled>Select the role</option>
                          <option value="2">Doctor</option>
                          <option value="3">Nurse</option>
                          <option value="3">Admin</option>
                        </select>
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" id="form2Example28" className="form-control form-control-lg" placeholder="Password"/>
                  {/* <label className="form-label" htmlFor="form2Example28">Password</label> */}
                  
                </div>
                <div className="pt-1 mb-4">
                  <button data-mdb-button-init data-mdb-ripple-init className="btn btn-info btn-lg btn-block" type="button">Login</button>
                </div>
                <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                {/* <p>Don't have an account? <a href="http://localhost:3000/register" className="link-info">Register here</a></p> */}
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img src={image} alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
          </div>
        </div>
      </div>
    </section>
  );
}