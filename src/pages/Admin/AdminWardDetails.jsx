import React from 'react';
import AdminLeftNavbar from '../../components/LeftNavBarAdmin';
import TopNavbar from '../../components/TopNavbar';
import Box from "@mui/material/Box";
 import Calender from '../../components/Calender';

export default function AdminWardDetails() {
  return (
    
    <div>
      <TopNavbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <AdminLeftNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Ward Details</h1>
           <Calender/> 

        </Box>
      </Box>
    </div>
  )
}
