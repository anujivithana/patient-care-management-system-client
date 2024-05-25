 import React from 'react';
 import NurseLeftNavbar from '../../components/LeftNavBarNurse';
 import TopNavbar from '../../components/TopNavbar';
 import Box from "@mui/material/Box";
 import TabsWardDetails from '../../components/TabsWardDetails';

 export default function NurseWardDetails() {
   return (
    
     <div>
       <TopNavbar />
       <Box height={30} />
       <Box sx={{ display: "flex" }}>
         <NurseLeftNavbar />
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
           <h1>Ward Details</h1>
          <TabsWardDetails/>
         </Box>
       </Box>
    </div>
   )
    }
