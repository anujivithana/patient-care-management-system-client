import React, { useState } from 'react';
import NurseLeftNavbar from '../../components/LeftNavBarNurse';
import TopNavbar from '../../components/TopNavbar';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function NurseSearchPatient() {
  const [nicNumber, setNicNumber] = useState('');
  const [patient, setPatient] = useState(null); // Assuming you will fetch or filter patient data
  
  const handleSearch = () => {
    // Implement search logic here
    // For demonstration, we'll assume we have a list of patients and we filter it
    const patients = [
      { nic: '12345', name: 'John Doe', age: 30 },
      { nic: '67890', name: 'Jane Smith', age: 25 },
      // Add more patients as needed
    ];
    
    const foundPatient = patients.find(p => p.nic === nicNumber);
    setPatient(foundPatient);
  };

  return (
    <div>
      <TopNavbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <NurseLeftNavbar />
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            p: 3, 
            display: 'flex', 
            flexDirection: 'column', 
             alignItems: 'center' 
          }}
        >
         <h1>Search Patient</h1>

          <Box 
            sx={{ 
              backgroundColor: 'lavender', 
              padding: 2, 
              borderRadius: 1, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '50%', // Adjust width as needed
              mt: 2
            }}
          >
            <TextField 
              label="NIC Number" 
              variant="outlined" 
              value={nicNumber} 
              onChange={(e) => setNicNumber(e.target.value)} 
              sx={{ backgroundColor: 'white', borderRadius: 1, flexGrow: 1 }}
              fullWidth
            />
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleSearch}
              sx={{ ml: 2 }}
            >
              Search
            </Button>
          </Box>
          {patient && (
            <Box mt={4} sx={{ width: '50%' }}>
              <h2>Patient Details</h2>
              <p><strong>Name:</strong> {patient.name}</p>
              <p><strong>NIC:</strong> {patient.nic}</p>
              <p><strong>Age:</strong> {patient.age}</p>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
