import React from 'react';
import AdminLeftNavbar from '../../components/LeftNavBarAdmin';
import TopNavbar from '../../components/TopNavbar';
import Box from "@mui/material/Box";
import AdminDashboard from '../../components/AdminDashboard';



export default function Dashboard() {
  return (
    
    <div>
      <TopNavbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <AdminLeftNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Dashboard</h1>
          <AdminDashboard/>
        </Box>
      </Box>
    </div>
  )
}
