import React from 'react';
import PatientLeftNavbar from '../../components/LeftNavBarPatient';
import TopNavbar from '../../components/TopNavbar';
import Box from "@mui/material/Box";
// import RegisterGuidelines from '../RegisterGuidelines';
import TabAppointmentsPatient from '../../components/TabAppointmentsPatient';


export default function PatientAppointments() {
  return (
    
    <div>
      <TopNavbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <PatientLeftNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Make Appointments</h1>
          {/* <RegisterGuidelines /> */}
          <TabAppointmentsPatient/>
        </Box>
      </Box>
    </div>
  )
}
