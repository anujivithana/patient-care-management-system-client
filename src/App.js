import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterGuidelines from "./pages/RegisterGuidelines";
import StaffLogin from "./pages/StaffLogin";
import AppointmentsP from "./pages/AppointmentsP";



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/guidelines' element={<RegisterGuidelines/>}></Route>
      <Route path='/stafflogin' element={<StaffLogin/>}></Route>
      <Route path='/appointmentsp' element={<AppointmentsP/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

