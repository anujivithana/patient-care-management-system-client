import React from 'react';
import NurseLeftNavbar from '../../components/LeftNavBarNurse';
import TopNavbar from '../../components/TopNavbar';
import Box from "@mui/material/Box";
import TabsClinicNurse from '../../components/TabsClinicNurse';

export default function NurseAppointments() {
  return (
    
    <div>
      <TopNavbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <NurseLeftNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Appointment Details</h1>
          { <div style={{ height: 400, width: '100%' }}>
      
             <TabsClinicNurse/>


    </div> }

        </Box>
      </Box>
    </div>
  )
}
