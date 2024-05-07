import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterGuidelines from "./pages/RegisterGuidelines";
import StaffLogin from "./pages/StaffLogin";
import AppointmentsS from "./pages/AppointmentsS";
import Calender from "./pages/Calender";
import Dashboard from "./pages/Admin/Dashboard";
import DoctorDetails from "./pages/Admin/DoctorDetails";
import NurseDetails from "./pages/Admin/NurseDetails"
import AdminAppointments from "./pages/Admin/AdminAppointments"
import AdminRegistration from "./pages/Admin/AdminRegistration";
import AdminWardDetails from "./pages/Admin/AdminWardDetails";
import DoctorProfile from "./pages/Doctor/DoctorProfile";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import DoctorPatientList from "./pages/Doctor/DoctorPatientList";
import DoctorWardDetails from "./pages/Doctor/DoctorWard Details";
import NurseProfile from "./pages/Nurse/NurseProfile";
import NurseAppointments from "./pages/Nurse/NurseAppointment";
import NurseRegistration from "./pages/Nurse/NurseRegistration";
import NurseSearchPatient from "./pages/Nurse/NurseSearchPatient";
import NurseWardDetails from "./pages/Nurse/NurseWardDetails";
import PatientProfile from "./pages/Patient/PatientProfile";
import PatientDoctorDetails from "./pages/Patient/PatientDoctorDetails";
import PatientAppointments from "./pages/Patient/PatientAppointments";
import PatientNotifications from "./pages/Patient/PatientNotifications";
// import AdminDashboard from "./pages/AdminDashboard";
// import AdminDoctor from "./pages/AdminDoctor";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/guidelines' element={<RegisterGuidelines/>}></Route>
      <Route path='/stafflogin' element={<StaffLogin/>}></Route>
      <Route path='/admin/home' element={<AppointmentsS/>}></Route>

      <Route path='/admin/dashboard' element={<Dashboard/>}></Route>
      <Route path='/admin/doctordetails' element={<DoctorDetails/>}></Route>
      <Route path='/admin/nursedetails' element={<NurseDetails/>}></Route>
      <Route path='/admin/adminappointments' element={<AdminAppointments/>}></Route>
      <Route path='/admin/adminregistration' element={<AdminRegistration/>}></Route>
      <Route path='/admin/adminwarddetails' element={<AdminWardDetails/>}></Route>


      <Route path='/doctor/profile' element={<DoctorProfile/>}></Route>
      <Route path='/doctor/doctorappointments' element={<DoctorAppointments/>}></Route>
      <Route path='/doctor/searchpatient' element={<DoctorPatientList/>}></Route>
      <Route path='/doctor/doctorwarddetails' element={<DoctorWardDetails/>}></Route>

      <Route path='/nurse/profile' element={<NurseProfile/>}></Route>
      <Route path='/nurse/nurseappointments' element={<NurseAppointments/>}></Route>
      <Route path='/nurse/nurseregistration' element={<NurseRegistration/>}></Route>
      <Route path='/nurse/nursesearchpatient' element={<NurseSearchPatient/>}></Route>
      <Route path='/nurse/nursewarddetails' element={<NurseWardDetails/>}></Route>

      
      <Route path='/patient/profile' element={<PatientProfile/>}></Route>
      <Route path='/patient/patientdoctordetails' element={<PatientDoctorDetails/>}></Route>
      <Route path='/patients/patientappointments' element={<PatientAppointments/>}></Route>
      <Route path='/patient/notifications' element={<PatientNotifications/>}></Route>
      {/* <Route path='/admin' element={<AdminDashboard/>}>
         <Route path='/dashboard' element={<AdminDashboard/>}></Route>
         <Route path='/doctor' element={<AdminDoctor/>}></Route>
         {/* <Route path='nurse' element={<AdminDoctor/>}></Route> */}
         {/* <Route path='/appointments' element={<AppointmentsS/>}></Route>
         </Route> */}
      <Route path='/calender' element={<Calender/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

