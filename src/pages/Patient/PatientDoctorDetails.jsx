import React, { useEffect, useState } from 'react';
import PatientLeftNavbar from '../../components/LeftNavBarPatient';
import TopNavbar from '../../components/TopNavbar';
import Box from "@mui/material/Box";
import DoctorCard from '../../components/DoctorCard';
import axios from 'axios';

export default function PatientDoctorDetails() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/doctors/doctordetails')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the doctor data!', error);
      });
  }, []);

  return (
    <div>
      <TopNavbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <PatientLeftNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Doctor Details</h1>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {doctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
}
